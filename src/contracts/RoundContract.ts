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
    codeHash: "f9230b94e514ff034ede48ee458b9d5bce37341a107fb30dbf491887092a0ae3",
};
export default RoundContract;