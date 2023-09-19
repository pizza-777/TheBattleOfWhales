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
    codeHash: "302a1881b51d65c6a5a93d2577d3027bef266fc126b38cc1c86530a44f355478",
};
export default RoundContract;