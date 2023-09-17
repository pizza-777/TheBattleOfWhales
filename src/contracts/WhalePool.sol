pragma ever-solidity >=0.71.0;

import "./Whale.sol";
import "./Utils.sol";

contract WhalePool is Utils {
    uint128 public total = 0; //sum of all users bets

    //store update total
    function store(uint128 betAmount, address whaleAddr) public {
        //restrict only round can call this
        total += betAmount;
        address whaleContractAddr = Utils.deployWhaleAddrContract(whaleAddr);
        Whale(whaleContractAddr).updTotal(betAmount);
    }

    //this function called from Whale contract by internal message
    function claim3(
        address wallet,
        uint128 whaleTotal,
        uint128 claimed
    ) public view {
        address whaleContractAddr = caclWhaleAddrContract(wallet);
        require(whaleContractAddr == msg.sender, 102, "Wrong address");
        uint128 processingFee = 2e8;

        uint128 reward = (total * whaleTotal) / total - claimed;

        //min amount for claime is 1 ever
        if (reward < 1e9) return;

        wallet.transfer({value: reward - processingFee, flag: 1});
        Whale(whaleContractAddr).updClaimed(reward);
    }

    function calcReward(uint128 whaleTotal) public view returns (uint128) {
        return (total * whaleTotal) / total - 2e8;
    }

    function getTotal() public view returns(uint128){
        return total;
    }
}
