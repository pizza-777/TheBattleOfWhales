pragma ever-solidity >=0.71.0;

import "./Bet.sol";
import "./WhalePool.sol";

contract Round {
    TvmCell static betCode;
    address static pool;

    uint32 public static roundStart;
    uint32 public static roundEnd;

    address public static RD1;
    address public static RD2;

    uint128 public side1 = 0;
    uint128 public side2 = 0;

   // address static public happyDev;

    constructor() {
        require(
            msg.sender == RD1 || msg.sender == RD2,
            101,
            "Only Round Deployer can deploy this contract"
        );
        tvm.accept();
    }

    receive() external {
        if (msg.value >= 1e8 || block.timestamp > roundEnd) {
            address betAddress = calcBetAddress(msg.sender);

            Bet(betAddress).claim{value: 0, flag: 64}();
        }
    }

    function replenish() public {}

    function deployBetContract(address player) public view returns (address) {
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
        require(
            block.timestamp > roundStart && block.timestamp < roundEnd,
            102,
            "Wrong time"
        );
        // I don't know is BetContracts exists or not, then trying to deploying it
        address betAddress = deployBetContract(player);

        //flag 0: pay fee from value because bet value is a msg.value as a param
        Bet(betAddress).storeBet{value: 1e8, flag: 0}(betValue, side);

        if (side == 1) side1 += betValue;
        else side2 += betValue;
        
       // if(betValue > 10 ever)
        WhalePool(pool).store{value: (betValue/20), flag: 0}(betValue, player);
    }

    function claimReward(
        address player,
        uint128 amountOnSide1,
        uint128 amountOnSide2,
        uint32 count
    ) public view {
        require(calcBetAddress(player) == msg.sender, 102, "Wrong bet address");

        uint128 reward = calcReward(amountOnSide1, amountOnSide2);
        
        uint128 processingFee = calcProcessingFee(count);
        reward = reward - processingFee;
        //todo Where processing fee will go?
        player.transfer({value: reward, flag: 64});   
       // happyDev.transfer({value:1e8, flag:0});     
    }

    //1% or minimal 0.2 ever
    function calcProcessingFee(uint32 count) public pure returns (uint128) {
        return count * 5e8;
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
