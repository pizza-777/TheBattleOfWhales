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
    codeHash: "e098ef66c0fa6bf5cda982249c83f586cad7131e5581d709bb9ad7006752d775",
};
export default RoundContract;