const RoundContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "replenish",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "deployBetContract",
                "inputs": [
                    {
                        "name": "player",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "buildBetContractInitData",
                "inputs": [
                    {
                        "name": "player",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "cell"
                    }
                ]
            },
            {
                "name": "calcBetAddress",
                "inputs": [
                    {
                        "name": "player",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "placeBet",
                "inputs": [
                    {
                        "name": "side",
                        "type": "uint2"
                    },
                    {
                        "name": "player",
                        "type": "address"
                    },
                    {
                        "name": "betValue",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "claimReward",
                "inputs": [
                    {
                        "name": "player",
                        "type": "address"
                    },
                    {
                        "name": "amountOnSide1",
                        "type": "uint128"
                    },
                    {
                        "name": "amountOnSide2",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "calcProcessingFee",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "calcReward",
                "inputs": [
                    {
                        "name": "amountOnSide1",
                        "type": "uint128"
                    },
                    {
                        "name": "amountOnSide2",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getBetsData",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    },
                    {
                        "name": "value1",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "roundStart",
                "inputs": [],
                "outputs": [
                    {
                        "name": "roundStart",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "roundEnd",
                "inputs": [],
                "outputs": [
                    {
                        "name": "roundEnd",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "RD1",
                "inputs": [],
                "outputs": [
                    {
                        "name": "RD1",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "RD2",
                "inputs": [],
                "outputs": [
                    {
                        "name": "RD2",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "side1",
                "inputs": [],
                "outputs": [
                    {
                        "name": "side1",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "side2",
                "inputs": [],
                "outputs": [
                    {
                        "name": "side2",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "betsOnSide1",
                "inputs": [],
                "outputs": [
                    {
                        "name": "betsOnSide1",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "betsOnSide2",
                "inputs": [],
                "outputs": [
                    {
                        "name": "betsOnSide2",
                        "type": "uint128"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "betCode",
                "type": "cell"
            },
            {
                "key": 2,
                "name": "roundStart",
                "type": "uint32"
            },
            {
                "key": 3,
                "name": "roundEnd",
                "type": "uint32"
            },
            {
                "key": 4,
                "name": "RD1",
                "type": "address"
            },
            {
                "key": 5,
                "name": "RD2",
                "type": "address"
            }
        ],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "betCode",
                "type": "cell"
            },
            {
                "name": "roundStart",
                "type": "uint32"
            },
            {
                "name": "roundEnd",
                "type": "uint32"
            },
            {
                "name": "RD1",
                "type": "address"
            },
            {
                "name": "RD2",
                "type": "address"
            },
            {
                "name": "side1",
                "type": "uint128"
            },
            {
                "name": "side2",
                "type": "uint128"
            },
            {
                "name": "betsOnSide1",
                "type": "uint128"
            },
            {
                "name": "betsOnSide2",
                "type": "uint128"
            },
            {
                "name": "contractBalanceAfterRoundEnded",
                "type": "uint128"
            },
            {
                "name": "paymentFeeAfterRoundEnded",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "e36aa5163468ea9e4b00037dc9e8c6b20a3d2c7327b27fcf5f34c770a7fab7c0",
};
export default RoundContract;