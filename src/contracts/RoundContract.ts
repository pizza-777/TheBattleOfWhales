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
    codeHash: "a0bf4a859a739c9690b5142ad08c2f63feab6dc4713c4992e1a87d312bd5ccfa",
};
export default RoundContract;