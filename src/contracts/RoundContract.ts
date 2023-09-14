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
                        "name": "reward",
                        "type": "uint128"
                    },
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
    codeHash: "6da4b0a324e5119b08512fb0b76cbedc9529ac64f67b19fb9deb507eee4c097d",
};
export default RoundContract;