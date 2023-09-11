pragma ever-solidity >=0.71.0;

import "./Bet.sol";

contract Round {
    TvmCell static betCode;

    uint32 public static roundStart;
    uint32 public static roundEnd;

    uint128 public side1 = 0;
    uint128 public side2 = 0;

    function deployBetContract(address player) public view returns (address) {
        TvmCell stateInit = tvm.buildStateInit({
            code: betCode,
            varInit: {
                roundStart: roundStart,
                roundEnd: roundEnd,
                player: player,
                round: address(this)
            },
            contr: Bet,
            pubkey: tvm.pubkey()
        });

        return
            new Bet{
                stateInit: stateInit,
                value: 1e8, //TODO MIN GAS VALUE FOR DEPLOYMENT
                wid: 0,
                flag: 3
            }();
    }

    function calcBetAddress(address player) public view returns (address) {
        return
            address(
                tvm.hash(
                    tvm.buildStateInit({
                        code: betCode,
                        varInit: {
                            roundStart: roundStart,
                            roundEnd: roundEnd,
                            player: player,
                            round: address(this)
                        },
                        contr: Bet,
                        pubkey: tvm.pubkey()
                    })
                )
            );
    }

    function placeBet(uint2 side, address player) public {
        require(msg.value >= 1e9, 100, "Min bet 1 ever");
        require(side == 1 || side == 2, 101, "Wrong side");
        require(
            block.timestamp > roundStart && block.timestamp < roundEnd,
            102,
            "Wrong time"
        );
        address betAddress = deployBetContract(player);
        Bet(betAddress).storeBet(msg.value, side);

        if (side == 1) side1 += msg.value;
        if (side == 2) side2 += msg.value;
    }

    function claimReward(
        address player,
        uint128 amountOnSide1,
        uint128 amountOnSide2
    ) public view {
        require(calcBetAddress(player) == msg.sender, 102, "Wrong bet address");

        uint128 reward = calcReward(amountOnSide1, amountOnSide2);
        reward -= 1e8; //processing fee
        player.transfer(reward, true, 64);
    }

    function calcReward(
        uint128 amountOnSide1,
        uint128 amountOnSide2
    ) public view returns (uint128) {
        if (side1 == side2) {
            return amountOnSide1 + amountOnSide2;
        }
        if (side1 > side2) {
            return amountOnSide1 + (amountOnSide1 / side1) * side2;
        }

        if (side2 > side1) {
            return amountOnSide2 + (amountOnSide2 / side2) * side1;
        }
    }

    function getBetsData() public view returns (uint128, uint128) {
        return (side1, side2);
    }
}
