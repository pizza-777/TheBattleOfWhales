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

    //replenish balance of this contract with this function,
    //because direct payment go to receive and bet
    function replenish() public {}

    function placeBet() public {
        //return small amount to sender
        if (msg.value < 1e9) {
            msg.sender.transfer({value: 0, flag: 64});
            return;
        }
        (uint32 roundStart, uint32 roundEnd) = roundTime();
        if ((roundStart + 60) > block.timestamp || roundEnd < block.timestamp) {
            msg.sender.transfer({value: 0, flag: 64});
            return;
        }
        tvm.rawReserve(1e8, 2);
        address _roundAddress = calcRoundAddress(roundStart, roundEnd);
        if (roundAddress != _roundAddress) {
            roundAddress = new Round{
                stateInit: buildRoundContractInitData(roundStart, roundEnd),
                value: 1e8, //credit 1 ever to Round.sol. This value will returned after first bet
                flag: 0
            }(); //pay deploying fee from value
            //  betAttachValue -= 1e8; //repay deployed money spent
        }

        Round(_roundAddress).placeBet{value: 0, flag: 128}(
            side,
            msg.sender,
            msg.value
        );
    }

    function roundTime() public pure returns (uint32, uint32) {
        uint32 currTime = block.timestamp;
        uint32 period = 6 * 60; //* 60; //6 min
        uint32 periods = currTime / period;
        uint32 roundStart = periods * period;
        uint32 roundEnd = roundStart + period;
        return (roundStart, roundEnd);
    }

    function buildRoundContractInitData(
        uint32 roundStart,
        uint32 roundEnd
    ) public view returns (TvmCell) {
        return
            tvm.buildStateInit({
                code: roundCode,
                varInit: {
                    roundStart: roundStart,
                    roundEnd: roundEnd,
                    betCode: betCode,
                    RD1: buildRDContractInitData(1),
                    RD2: buildRDContractInitData(2)
                },
                contr: Round,
                pubkey: tvm.pubkey()
            });
    }

    function buildRDContractInitData(
        uint2 _side
    ) public view returns (address) {
        return
            address(
                tvm.hash(
                    tvm.buildStateInit({
                        code: tvm.code(),
                        varInit: {
                            roundCode: roundCode,
                            betCode: betCode,
                            side: _side
                        },
                        contr: RD,
                        pubkey: tvm.pubkey()
                    })
                )
            );
    }

    function calcRoundAddress(
        uint32 roundStart,
        uint32 roundEnd
    ) public view returns (address) {
        return
            address(tvm.hash(buildRoundContractInitData(roundStart, roundEnd)));
    }
}
