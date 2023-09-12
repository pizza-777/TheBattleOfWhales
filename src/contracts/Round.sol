pragma ever-solidity >=0.71.0;

import "./Bet.sol";

contract Round {
    TvmCell static betCode;

    uint32 public static roundStart;
    uint32 public static roundEnd;

    uint128 public side1 = 0;
    uint128 public side2 = 0;

    function deployBetContract(address player) public view returns (address) {       

        return
            new Bet{
                stateInit: buildBetContractInitData(player),
                value: 1e8, 
                wid: 0,
                flag: 0//pay deploying fee from value
            }();
    }
    function buildBetContractInitData(address player) public view returns(TvmCell){
        return tvm.buildStateInit({
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
        return
            address(
                tvm.hash(
                    buildBetContractInitData(player)
                )
            );
    }

    function placeBet(uint2 side, address player, uint128 betValue) public {
        //todo restrict - only RD.sol can place bet
        require(msg.value >= 1e9, 100, "Min bet 1 ever");
        require(side == 1 || side == 2, 101, "Wrong side");
        require(
            block.timestamp > roundStart && block.timestamp < roundEnd,
            102,
            "Wrong time"
        );
        // I don't know is BetContracts exists or not, then trying to deploying it
        address betAddress = deployBetContract(player);

        //flag 0: pay fee from value because bet value is a msg.value as a param
        Bet(betAddress).storeBet{value: 1e8, flag: 0}(betValue, side);

        //if it is the first bet - return 1 ever to RD.sol contract. 
        //1 ever was value for deployment Round.sol. And only used part of them.        
        if((side1 + side2) == 0){
            msg.sender.transfer(1e9, true, 1);            
        }

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
        //The processing fee is the 1% from returned reward
        uint128 processingFee = reward/100;
        reward = reward - processingFee;
        //todo Where processing fee will go?
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
