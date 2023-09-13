const RoundContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time"
        ],
        "functions": [
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
                "inputs": [
                    {
                        "name": "reward",
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
                "name": "constructor",
                "inputs": [],
                "outputs": []
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
    codeHash: "b93b87687fbb35792f54fd5a534076932e7385be0872b7a9fd5cdee45adad323",
};
export default RoundContract;