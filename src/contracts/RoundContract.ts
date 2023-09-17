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
                    },
                    {
                        "name": "count",
                        "type": "uint32"
                    }
                ],
                "outputs": []
            },
            {
                "name": "calcProcessingFee",
                "inputs": [
                    {
                        "name": "count",
                        "type": "uint32"
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
            },
            {
                "key": 6,
                "name": "pool",
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
                "name": "pool",
                "type": "address"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "1df1941344c22af132af3155e261c427b7f52e3d0986c4d5616936797b76370f",
};
export default RoundContract;