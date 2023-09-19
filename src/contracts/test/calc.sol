pragma ever-solidity >=0.71.0;

contract calc {
    uint128 side1 = 6;
    uint128 side2 = 123;

    function calcReward(
        uint128 a1,
        uint128 a2
    ) public view returns (uint128) {
       return (a1*2)/a2;
    }
}
