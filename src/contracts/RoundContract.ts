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
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "f04cb691b5a735c6c09dde6d4a8bc42dfbd8abcce0c3256d0b9c0c2117445727",
};
export default RoundContract;