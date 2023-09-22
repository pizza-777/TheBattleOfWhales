pragma ever-solidity >=0.71.0;

contract a {
    bool public v = false;

    function t() public returns (uint64){
  return block.timestamp;
    }
}
