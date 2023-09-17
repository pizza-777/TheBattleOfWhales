pragma ever-solidity >=0.71.0;

interface WhalePoolInterface {
    function claim3(
        address wallet,
        uint128 whaletotal,
        uint128 claimedReward
    ) external;
}

contract Whale {
    address public static addr; //address of userWallet

    address public static whalePoolAddr;

    uint128 public total = 0;

    uint128 public claimed = 0;

    function updTotal(uint128 _total) public {
        total += _total;
    }

    function updClaimed(uint128 _claimed) public {
        claimed += _claimed;
    }

    //claim step2
    function claim2() public view {
        tvm.rawReserve(1e7, 2);
        WhalePoolInterface(whalePoolAddr).claim3{value: 0, flag: 128}(
            addr,
            total,
            claimed
        );
    }
}
