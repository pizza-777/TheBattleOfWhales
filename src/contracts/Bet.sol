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

    function storeBet(uint128 amount, uint2 side) public {
        require(msg.sender == round, 100, "Wrong sender");

        tvm.accept();
        if (side == 1) side1 += amount;
        if (side == 2) side2 += amount;
    }

    function claim() public {
        require(msg.value >= 1e8, 101, "Small attached amount");
        require(block.timestamp > roundEnd, 102, "Too early request");
        require(claimedReward == false, 103, "The reward has been already claimed");

        claimedReward = true;
        Round(round).claimReward{value: 1e8, bounce: true, flag: 3}(
            player,
            side1,
            side2
        );
    }

    function getBetsData()
        public
        view
        returns (uint128, uint128, bool, uint32, uint32)
    {
        return (side1, side2, claimedReward, roundStart, roundEnd);
    }
}
