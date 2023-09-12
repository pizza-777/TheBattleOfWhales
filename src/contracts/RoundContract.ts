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
    codeHash: "26a6034a27ce8ac84737ec86f8eb56291b866d2b0f5ef1c90ca31f0dd0fc0090",
};
export default RoundContract;