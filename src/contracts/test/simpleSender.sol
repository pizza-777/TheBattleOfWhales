pragma ever-solidity >= 0.71.0;

contract Sender {
    uint static public nonce;

    function send(uint128 amount, address addr) pure public {
        tvm.accept();
        addr.transfer(amount, true, 1);
    }
}