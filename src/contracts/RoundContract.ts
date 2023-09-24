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
                        "name": "countPlayerBetsSide1",
                        "type": "uint128"
                    },
                    {
                        "name": "countPlayerBetsSide2",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "calcProcessingFee",
                "inputs": [
                    {
                        "name": "countPlayerBetsSide1",
                        "type": "uint128"
                    },
                    {
                        "name": "countPlayerBetsSide2",
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
                "name": "getSetFinalRoundBalance",
                "inputs": [],
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
                "name": "countTotalBetsONSide1",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countTotalBetsONSide1",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "countTotalBetsONSide2",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countTotalBetsONSide2",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "finalRoundBalance",
                "inputs": [],
                "outputs": [
                    {
                        "name": "finalRoundBalance",
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
                "name": "countTotalBetsONSide1",
                "type": "uint128"
            },
            {
                "name": "countTotalBetsONSide2",
                "type": "uint128"
            },
            {
                "name": "finalRoundBalance",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "5f774dec3fdc7366527336819abdcc1aab51016d729d2ec3405762dd8cf8c04f",
};
export default RoundContract;