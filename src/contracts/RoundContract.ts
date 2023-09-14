const RoundContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time"
        ],
        "functions": [
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
            },
            {
                "name": "cIn",
                "inputs": [],
                "outputs": [
                    {
                        "name": "cIn",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "c",
                "inputs": [],
                "outputs": [
                    {
                        "name": "c",
                        "type": "uint256"
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
                "name": "cIn",
                "type": "uint256"
            },
            {
                "name": "c",
                "type": "uint256"
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECMgEACHIABCSK7VMg4wMgwP/jAiDA/uMC8gsvAgExA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwMCwMCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8KgMCKCCCEHowjCW74wIgghB8aOqKu+MCBwQCKCCCEHs7Jiq64wIgghB8aOqKuuMCBgUDcDD4RvLgTPhCbuMA03/Tf9HbPCGOHCPQ0wH6QDAxyM+HIM6CEPxo6orPC4HLf8lw+wCRMOLjAPIALiIpAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAA+zsmKoMjOyx/JcPsA3vIALgRQIIIQItFThLvjAiCCEDTG9qa74wIgghBFFB9su+MCIIIQejCMJbvjAiQVDwgEUCCCEFfBv7m64wIgghBavtmpuuMCIIIQaLVfP7rjAiCCEHowjCW64wIODQoJAVAw0ds8+E8hjhyNBHAAAAAAAAAAAAAAAAA+jCMJYMjOy3/JcPsA3vIALgIiMPhCbuMA+Ebyc9H4ANs88gALKwTw7UTQ10nCAY/tcO1E0PQFcSGAQPQPjoGI33IigED0Dm+Rk9cLH95zI4BA9A5vkZPXCx/edCSAQPQOjoGJ33UlgED0Do6Bid9wXzD4cvhx+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Y3D4b3D4cHD4cXD4cuMNMQwMLgBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAFQMNHbPPhQIY4cjQRwAAAAAAAAAAAAAAAANq+2amDIzst/yXD7AN7yAC4BTjDR2zz4TSGOG40EcAAAAAAAAAAAAAAAADXwb+5gyM7OyXD7AN7yAC4EUCCCEDfxFd664wIgghA9D90RuuMCIIIQRIA0iLrjAiCCEEUUH2y64wIUExIQA3Iw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM6AYs9AXgHPkxRQfbLLf8t/yXD7AJFb4uMA8gAuESkACPhP+FACYjD4RvLgTNN/0ds8IY4cI9DTAfpAMDHIz4cgzoIQxIA0iM8Lgct/yXD7AJEw4uMA8gAhKQN+MPhG8uBM+EJu4wAhk9TR0N76QNHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkvQ/dEbOzclw+wCRMOLjAPIALiwpAVAw0ds8+FIhjhyNBHAAAAAAAAAAAAAAAAAt/EV3oMjOy//JcPsA3vIALgRQIIIQKO9+tLrjAiCCECvd4fy64wIgghAyP8hduuMCIIIQNMb2prrjAh8cGxYDQjD4RvLgTPhCbuMAIZXTAdTR0JLTAeL6QNN/0ds82zzyAC4XKwTkiCPAASTAArHy6GUiwAGS+E2S+E7iiAH4SccF8uhliPgj+Eu8+CP4TLmw8uhmAds8XyJYyM+FiM6CoCAvrwgAAAAAAAAAAAAAAAAAADO3AqvPC67Lf8sByXD7AAHAAZj4TyGgtX/4b5j4UCGgtX/4cOIwGhkYHQAUV3JvbmcgdGltZQA0T25sdXkgUkQgY29udHJhY3QgY2FuIHNlbmQAFFdyb25nIHNpZGUBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAACyP8hdgyM7LH8lw+wDe8gAuA34w+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Sr3eH8s7NyXD7AJEw4uMA8gAuHSkCcts8IPkAyM+KAEDL/8nQZsjPhYjOgoAgL68IAAAAAAAAAAAAAAAAAAPPC44h2zzMz5DRar5/yXD7AC0eADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwM8MPhG8uBM+EJu4wAhk9TR0N76QNN/03/R2zzjAPIALiApBEqII9s8+EnHBfLoZts8INs8obV/AcjPhYjOAfoCgGvPQMmAQPsAIywiIQAugGSpBCCCEAvrwgC8kSCWghAL68IA4jEAgHD4T/hQupVZoLV/MeD4T/hQvI4RIlUC+E+pBPhQqLV/oLV/bCHg+FD4T7yOECFY+FCpBPhPqLV/oLV/bCHgbCEAIldyb25nIGJldCBhZGRyZXNzBFAgghAFAsOquuMCIIIQEH5uCrrjAiCCEBJD6VG64wIgghAi0VOEuuMCKCcmJQFQMNHbPPhRIY4cjQRwAAAAAAAAAAAAAAAAKLRU4SDIzsv/yXD7AN7yAC4DJDD4RvLgTPhCbuMA0ds82zzyAC4xKwFOMNHbPPhOIY4bjQRwAAAAAAAAAAAAAAAAJB+bgqDIzs7JcPsA3vIALgN2MPhG8uBM+EJu4wAhk9TR0N76QNHbPCGOGyPQ0wH6QDAxyM+HIM6CEIUCw6rPC4HMyXD7AJEw4uMA8gAuLSkAKO1E0NP/0z8x+ENYyMv/yz/Oye1UA3j4RvLgTPhCbuMA+FKk+HJopv5gghAF9eEAvvgj+Ey8sY6X+EnbPMjPhYjOghBCxTBwzwuOyYBA+wDe2zwuLCsAbPhS+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+DzMsfyx/OVUDIzst/y39ZyMv/y//NzcntVAEa2zz5AMjPigBAy//J0C0AgPhCyMv/cG2AQPRD+EvIyx9xWIBA9EP4TMjLH3JYgED0Q3MBgED0FvgodFiAQPQWyPQAyfhKyM+EgPQA9ADPgckAcO1E0NP/0z/TADHU0x/TH/pA1NHQ+kDTf9N/1NHQ0//T/9H4cvhx+HD4b/hu+G34bPhr+Gr4Y/hiAhD0pCD0vfLATjEwABRzb2wgMC43MS4wAAA=",
    codeHash: "ed9aa360e6e177ea24d30793f26f8c165c05320c6dbd6910d5a762dd23f70a2f",
};
export default RoundContract;