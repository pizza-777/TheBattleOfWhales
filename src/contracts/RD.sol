pragma ever-solidity >=0.71.0;

import "./Round.sol";

contract RD {
    //static
    TvmCell static roundCode;
    TvmCell static betCode;
    uint2 public static side; // 1 or 2

    //state
    address roundAddress;

    receive() external {
        placeBet();
    }

    function placeBet() public returns (address) {
        require(msg.value >= 1 ever, 100, "Min bet value 1 ever");
        (uint32 roundStart, uint32 roundEnd) = roundTime();
        require((roundStart+60)<block.timestamp, 101, 'Pause one minute between rounds');
        tvm.accept();        
        address _roundAddress = calcRoundAddress(roundStart, roundEnd);        
		//if round.sol doesn't exists deploy it
        if (roundAddress != _roundAddress) {
            TvmCell stateInit = tvm.buildStateInit({
                code: roundCode,
                varInit: {
                    roundStart: roundStart,
                    roundEnd: roundEnd,
                    betCode: betCode
                },
                contr: Round,
                pubkey: tvm.pubkey()
            });
            roundAddress = new Round{
                stateInit: stateInit,
                value: 1e8,
                wid: msg.sender.wid,
                flag: 3
            }();
        }

        Round(_roundAddress).placeBet{value: msg.value, flag: 3}(side, msg.sender);
    }

    function roundTime() public pure returns (uint32, uint32) {
        uint32 currTime = block.timestamp;
        uint32 period = 6 * 60; //* 60; //6 hours
        uint32 periods = currTime / period;
        uint32 roundStart = periods * period;
        uint32 roundEnd = roundStart + period;
        return (roundStart, roundEnd);
    }

    function calcRoundAddress(
        uint32 roundStart,
        uint32 roundEnd
    ) public view returns (address) {
        return
            address(
                tvm.hash(
                    tvm.buildStateInit({
                        code: roundCode,
                        varInit: {
                            roundStart: roundStart,
                            roundEnd: roundEnd,
                            betCode: betCode
                        },
                        contr: Round,
                        pubkey: tvm.pubkey()
                    })
                )
            );
    }
}
