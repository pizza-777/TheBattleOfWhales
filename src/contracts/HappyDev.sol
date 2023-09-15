pragma ever-solidity >=0.71.0;

contract HappyDev {
    struct Dev {
        address wallet;
    }

    Dev[] public Devs;   

    constructor() {        
        require(tvm.pubkey() != 0, 101);        
        require(msg.pubkey() == tvm.pubkey(), 102);
        tvm.accept();
    }
    
    modifier onlyOwner() {
        require(tvm.pubkey() == msg.pubkey());
        tvm.accept();
        _;
    }

    function addDev(address wallet) public onlyOwner {
        Devs.push(Dev({wallet: wallet}));
    }

    receive() external {
        if (address(this).value > 101e9) {
            for (uint8 index = 0; index < Devs.length; index++) {
                Devs[index].wallet.transfer({
                    value: uint128(100e9 / Devs.length),
                    flag: 0
                });
            }
        }
    }
}
