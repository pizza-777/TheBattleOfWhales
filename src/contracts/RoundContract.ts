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
    codeHash: "e5c15e226c5eda6982041f00387cf54f4325025797a11a27c3a7c9115637e739",
};
export default RoundContract;