pragma ever-solidity >=0.71.0;

import "./Whale.sol";

contract Utils {
    TvmCell whaleCode;

    function deployWhaleAddrContract(
        address _addr
    ) public view returns (address) {
        TvmCell stateInit = whaleContractStateInit(_addr);

        return new Whale{stateInit: stateInit, value: 1e8, flag: 0}();
    }

    function caclWhaleAddrContract(
        address _addr
    ) public view returns (address) {
        TvmCell stateInit = whaleContractStateInit(_addr);
        return address(tvm.hash(stateInit));
    }

    function whaleContractStateInit(
        address _addr
    ) public view returns (TvmCell) {
        return
            tvm.buildStateInit({
                code: whaleCode,
                varInit: {addr: _addr},
                contr: Whale,
                pubkey: tvm.pubkey()
            });
    }
}
