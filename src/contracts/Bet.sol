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
//todo deploy constructor https://github.com/tonlabs/samples/blob/master/solidity/17_SimpleWallet.sol#L23
//можно ли передеплоить в один и тот же конструктор
// деплоить имеет право только кто-то с определенным клчем
    function storeBet(uint128 amount, uint2 side) public {
        require(msg.sender == round, 101, "Wrong sender");
        tvm.rawReserve(1e7, 2);
        if (side == 1) side1 += amount;
        else side2 += amount;

        //return change
        round.transfer({value: 0, flag: 128});
    }

    function claim() public {
        require(msg.value >= 1e8, 101, "Small attached amount");
        require(block.timestamp > roundEnd, 102, "Too early request");
        require(
            claimedReward == false,
            103,
            "The reward has been already claimed"
        );
        tvm.rawReserve(1e7, 2);
        claimedReward = true;
        Round(round).claimReward{value: 0, flag: 128}(
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

    //claim reward directly
    receive() external {
        claim();
    }
}
