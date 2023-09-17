pragma ever-solidity >=0.71.0;

//Simple contract for direct claiming rewards from Whale rewards pool
import "./Utils.sol";

contract Claim is Utils {
    receive() external {
        tvm.rawReserve(1e7, 2);
        if (msg.value >= 1e8) {
            claim1();
        } else {
            msg.sender.transfer({value: 0, flag: 128});
        }
    }
    

    //caclWhaleAddrContract(address _addr)
    //step1
    function claim1() public view{
        address whaleContractAddr = caclWhaleAddrContract(msg.sender);
        Whale(whaleContractAddr).claim2{value: 0, flag: 128}();
    }
}
