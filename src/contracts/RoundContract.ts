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
    codeHash: "5f400e8a1bcd94d898596858c53d146e86f64a2b3969ece25bd54b67dacea39b",
};
export default RoundContract;