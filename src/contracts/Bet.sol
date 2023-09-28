pragma ever-solidity >=0.71.0;

import "./Round.sol";

contract Bet {
    uint128 public side1 = 0;
    uint128 public side2 = 0;

    uint32 public static roundStart;
    uint32 public static roundEnd;
    address public static player;
    address public static round;

    bool public claimedReward = false;
    uint128 public countSide1 = 0; // quantitiy of bets
    uint128 public countSide2 = 0;

    constructor() {
        require(
            msg.sender == round,
            101,
            "Only round can deploy this contract"
        );
        tvm.accept();
    }

    function storeBet(uint128 amount, uint2 side) public {
        require(msg.sender == round, 102, "Wrong sender");
        tvm.rawReserve(1e7, 2);

        if (side == 1) {
            side1 += amount;
            countSide1++;
        } else {
            side2 += amount;
            countSide2++;
        }

        Round(round).replenish{value: 0, flag: 128}();
    }

    function claim() public {
        require(msg.sender == round, 103, "Wrong sender"); //only round can send claim message
        if (claimedReward == true) {
            player.transfer({value: 0, flag: 64});
            return;
        }
        // I think 0.001 Evers is enough for storing data some time. 
        // After the reward is claimed this contact is only for hystory
        tvm.rawReserve(1e6, 2); 
        claimedReward = true;
        Round(round).claimReward{value: 0, flag: 128}(
            player,
            side1,
            side2,
            countSide1,
            countSide2
        );
    }

    function getBetsData()
        public
        view
        returns (uint128, uint128, bool, uint32, uint32, uint128, uint128)
    {
        return (
            side1,
            side2,
            claimedReward,
            roundStart,
            roundEnd,
            countSide1,
            countSide2
        );
    }
}
