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
            },
            {
                "name": "contractBalanceAfterRoundEnded",
                "inputs": [],
                "outputs": [
                    {
                        "name": "contractBalanceAfterRoundEnded",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "paymentFeeAfterRoundEnded",
                "inputs": [],
                "outputs": [
                    {
                        "name": "paymentFeeAfterRoundEnded",
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
    codeHash: "53c35821c5c13a5fb9ba9931bd83ca0aeb5a9d2b2ad1af890f35f1b0bc373c38",
};
export default RoundContract;