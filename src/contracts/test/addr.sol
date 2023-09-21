pragma ever-solidity >=0.71.0;

contract a {
    bool public v = false;

    function t() public returns (bool){
       uint c = 1;
       uint b = 2;

       if((int(c) - int(b)) < 0){
        v = true;
       }
       return v;
    }
}
