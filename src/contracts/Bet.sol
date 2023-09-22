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
    uint32 public count = 0; // quantitiy of bets
   
    constructor() {
         require(msg.sender == round, 101, "Only round can deploy this contract");
         tvm.accept();
    }
    function storeBet(uint128 amount, uint2 side) public {
        require(msg.sender == round, 102, "Wrong sender");
        tvm.rawReserve(1e7, 2);
        count++;
        if (side == 1) side1 += amount;
        else side2 += amount;

        Round(round).replenish{value: 0, flag: 128}();
    }

    function claim() public {
        require(msg.sender == round, 103, "Wrong sender"); //only round can send claim message
        if(claimedReward == true) {
            player.transfer({value: 0, flag: 64});
            return; 
        }       
        tvm.rawReserve(1e6, 2);
        claimedReward = true;
        Round(round).claimReward{value: 0, flag: 128}(player, side1, side2);
    }

    function getBetsData()
        public
        view
        returns (uint128, uint128, bool, uint32, uint32)
    {
        return (side1, side2, claimedReward, roundStart, roundEnd);
    }    
}
