pragma ever-solidity >=0.71.0;

import "./Bet.sol";

contract Round {
    TvmCell static betCode;

    uint32 public static roundStart;
    uint32 public static roundEnd;

    address public static RD1;
    address public static RD2;

    uint128 public side1 = 0;
    uint128 public side2 = 0;
    uint128 public countTotalBetsONSide1 = 0;
    uint128 public countTotalBetsONSide2 = 0;

    uint128 public finalRoundBalance = 0;

    constructor() {
        require(
            msg.sender == RD1 || msg.sender == RD2,
            101,
            "Only Round Deployer can deploy this contract"
        );
        tvm.accept();
    }

    receive() external {
        if (msg.value >= 1e8 && block.timestamp > roundEnd) {
            address betAddress = calcBetAddress(msg.sender);

            Bet(betAddress).claim{value: 0, flag: 64}();
        } else {
            msg.sender.transfer({value: 0, flag: 64});
        }
    }

    function replenish() public {}

    function deployBetContract(address player) private view returns (address) {
        return
            new Bet{
                stateInit: buildBetContractInitData(player),
                value: 1e8,
                flag: 0
            }();
    }

    function buildBetContractInitData(
        address player
    ) public view returns (TvmCell) {
        return
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
            });
    }

    function calcBetAddress(address player) public view returns (address) {
        return address(tvm.hash(buildBetContractInitData(player)));
    }

    function placeBet(uint2 side, address player, uint128 betValue) public {
        require(side == 1 || side == 2, 101, "Wrong side");
        address sender = side == 1 ? RD1 : RD2;
        require(sender == msg.sender, 101, "Only RD contract can send");       
        // I don't know is BetContracts exists or not, then trying to deploying it
        address betAddress = deployBetContract(player);

        //flag 0: pay fee from value because bet value is a msg.value as a param
        Bet(betAddress).storeBet{value: 1e8, flag: 0}(betValue, side);

        if (side == 1) {
            side1 += betValue;
            countTotalBetsONSide1++;
        } else {
            side2 += betValue;
            countTotalBetsONSide2++;
        }
    }

    function claimReward(
        address player,
        uint128 amountOnSide1,
        uint128 amountOnSide2,
        uint128 countPlayerBetsSide1,
        uint128 countPlayerBetsSide2
    ) public {
        require(calcBetAddress(player) == msg.sender, 102, "Wrong bet address");

        uint128 reward = calcReward(amountOnSide1, amountOnSide2);

        uint128 fee = calcProcessingFee(
            countPlayerBetsSide1,
            countPlayerBetsSide2
        );
        if ((int(reward) - int(fee)) > 0) {
            reward = reward - fee;
        } else {
            reward = 0;
        }

        player.transfer({value: reward, flag: 64});
    }

    //calculating proportionally: more bets count - more fee 
    function calcProcessingFee(
        uint128 countPlayerBetsSide1,
        uint128 countPlayerBetsSide2
    ) public returns (uint128) {
        uint128 roundBalance = getSetFinalRoundBalance();
        //check if enough money for payment without fee. 1e7 - remaining balance
        if ((int(roundBalance) - 1e7) > int(side1 + side2)) return 0;
        //calculate total payment fee
        uint128 lackedPaymentAmount = (side1 + side2) - roundBalance + 1e7;
        if (side1 == side2) {
            //we need to pay attention on player bets quantity, because one player can bet many times and use a lot of gas
            uint128 _fee = math.divc(
                lackedPaymentAmount,
                countTotalBetsONSide1 + countTotalBetsONSide2
            ) * (countPlayerBetsSide1 + countPlayerBetsSide2);
            return _fee;
        }
        if (side1 > side2) {
            uint128 _fee = math.divc(
                lackedPaymentAmount,
                countTotalBetsONSide1
            ) * countPlayerBetsSide1;
            return _fee;
        }

        if (side2 > side1) {
            uint128 _fee = math.divc(
                lackedPaymentAmount,
                countTotalBetsONSide2
            ) * countPlayerBetsSide2;
            return _fee;
        }
    }

    //calculating proportionally: more bets value - more win amount
    function calcReward(
        uint128 amountOnSide1,
        uint128 amountOnSide2
    ) public view returns (uint128) {
        if (side1 == side2) {
            return amountOnSide1 + amountOnSide2;
        }
        if (side1 > side2) {
            return amountOnSide1 + (amountOnSide1 * side2) / side1;
        }

        if (side2 > side1) {
            return amountOnSide2 + (amountOnSide2 * side1) / side2;
        }
    }

    function getSetFinalRoundBalance() public returns (uint128) {
        if (finalRoundBalance == 0)
            finalRoundBalance = address(this).balance - msg.value;
        return finalRoundBalance;
    }

    function getBetsData() public view returns (uint128, uint128) {
        return (side1, side2);
    }
}
