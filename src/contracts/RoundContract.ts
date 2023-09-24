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
            }
        ]
    },
    tvc: "te6ccgECNgEACZsAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gszBQQ1A5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwUEwYCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8LgYCKCCCEHowjCW74wIgghB8aOqKu+MCCgcCKCCCEHs7Jiq64wIgghB8aOqKuuMCCQgDcDD4RvLgTPhCbuMA03/Tf9HbPCGOHCPQ0wH6QDAxyM+HIM6CEPxo6orPC4HLf8lw+wCRMOLjAPIAMg8tAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAA+zsmKoMjOyx/JcPsA3vIAMgRQIIIQK93h/LvjAiCCEDyR5iO74wIgghBXwb+5u+MCIIIQejCMJbvjAiYcFgsEUCCCEFq+2am64wIgghBotV8/uuMCIIIQaVpXWLrjAiCCEHowjCW64wIVEQ0MAVAw0ds8+E8hjhyNBHAAAAAAAAAAAAAAAAA+jCMJYMjOy3/JcPsA3vIAMgNKMPhG8uBM+EJu4wAhk9TR0N76QNN/03/Tf9TR0NN/0ds82zzyADIOLwRmiCXbPPhJxwXy6GZa2zxZ2zxcobT/wgCUXKG1f5Fw4mwhAcjPhYjOAfoCgGvPQMmAQPsAEDAPHgCAcPhP+FC6lVmgtX8x4PhP+FC8jhEiVQL4UKi1f/hPqQSgtX9sIeD4UPhPvI4QIVj4T6i1f/hQqQSgtX9sIeBsIQAiV3JvbmcgYmV0IGFkZHJlc3MDRDD4Qm7jAPhG8nPRiPhJ+E3HBfhJ+E7HBbHy6GX4ANs88gATEi8AWE9ubHkgUm91bmQgRGVwbG95ZXIgY2FuIGRlcGxveSB0aGlzIGNvbnRyYWN0BPDtRNDXScIBj+1w7UTQ9AVxIYBA9A+OgYjfciKAQPQOb5GT1wsf3nMjgED0Dm+Rk9cLH950JIBA9A6OgYnfdSWAQPQOjoGJ33BfMPhy+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjcPhvcPhwcPhxcPhy4w01FBQyAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAVAw0ds8+FAhjhyNBHAAAAAAAAAAAAAAAAA2r7ZqYMjOy3/JcPsA3vIAMgRQIIIQPQ/dEbrjAiCCEEUUH2y64wIgghBWhM56uuMCIIIQV8G/ubrjAhsZGBcBTjDR2zz4TSGOG40EcAAAAAAAAAAAAAAAADXwb+5gyM7OyXD7AN7yADIBUDDR2zz4USGOHI0EcAAAAAAAAAAAAAAAADWhM56gyM7Lf8lw+wDe8gAyA3Iw+Eby4Ez4Qm7jANHbPCKOISTQ0wH6QDAxyM+HIM6AYs9AXgHPkxRQfbLLf8t/yXD7AJFb4uMA8gAyGi0ACPhP+FADfjD4RvLgTPhCbuMAIZPU0dDe+kDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5L0P3RGzs3JcPsAkTDi4wDyADIwLQRQIIIQMj/IXbrjAiCCEDTG9qa64wIgghA07mYZuuMCIIIQPJHmI7rjAiUhIB0DcDD4RvLgTPhCbuMA03/Tf9HbPCGOHCPQ0wH6QDAxyM+HIM6CELyR5iPPC4HLf8lw+wCRMOLbPPIAMh4vAfxw+CdvEGim/mChtX8gggiYloChtP/4T/hQoLV/vJNfBHDg+E/4UKC1f6K1f4IImJaAoLV/+E/4ULqOI/hR+FKgtX+pBl2gtX+otX/4UVUDobV/+HH4UlUCobV/+HIx4PhP+FC8jhf4UakGI1UCoLV/qLV/+FFVAqG1f/hxMeAfAET4UPhPvI4X+FKpBlUCI6C1f6i1f/hSVQKhtX/4cjHgMGwhAVAw0ds8+FIhjhyNBHAAAAAAAAAAAAAAAAAtO5mGYMjOy3/JcPsA3vIAMgNCMPhG8uBM+EJu4wAhldMB1NHQktMB4vpA03/R2zzbPPIAMiIvA+KII8ABJMACsfLoZSLAAZL4TZL4TuKIAfhJxwXy6GUB2zxfIljIz4WIzoKgIC+vCAAAAAAAAAAAAAAAAAAAM7cCq88Lrst/ywHJcPsAAcABn/hPIaC1f/hv+FGktX/4cZ/4UCGgtX/4cPhSpLV/+HLiMCQjKAAyT25seSBSRCBjb250cmFjdCBjYW4gc2VuZAAUV3Jvbmcgc2lkZQFQMNHbPPhMIY4cjQRwAAAAAAAAAAAAAAAALI/yF2DIzssfyXD7AN7yADIEUCCCEAUCw6q64wIgghAQfm4KuuMCIIIQEkPpUbrjAiCCECvd4fy64wIsKyonA34w+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Sr3eH8s7NyXD7AJEw4uMA8gAyKC0Ccts8IPkAyM+KAEDL/8nQZsjPhYjOgoAgL68IAAAAAAAAAAAAAAAAAAPPC44h2zzMz5DRar5/yXD7ADEpADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwMkMPhG8uBM+EJu4wDR2zzbPPIAMjUvAU4w0ds8+E4hjhuNBHAAAAAAAAAAAAAAAAAkH5uCoMjOzslw+wDe8gAyA3Yw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8IY4bI9DTAfpAMDHIz4cgzoIQhQLDqs8LgczJcPsAkTDi4wDyADIxLQAo7UTQ0//TPzH4Q1jIy//LP87J7VQDvPhG8uBM+EJu4wBopv5gghAF9eEAvvgj+Ey8sI6e+EnbPMjPhYjOjQSAAAAAAAAAAAAAAAAAACFimDhAjhf4ScjPhYjOi+AAAAAAAAAAAAAAAAAAEOLPFsmAQPsA2zwyMC8AbPhS+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+DzMsfyx/OVUDIzst/y3/LfwHIy3/NzcntVAEa2zz5AMjPigBAy//J0DEAgPhCyMv/cG2AQPRD+EvIyx9xWIBA9EP4TMjLH3JYgED0Q3MBgED0FvgodFiAQPQWyPQAyfhKyM+EgPQA9ADPgckAcO1E0NP/0z/TADHU0x/TH/pA1NHQ+kDTf9N/03/U0dDTf9H4cvhx+HD4b/hu+G34bPhr+Gr4Y/hiAhD0pCD0vfLATjU0ABRzb2wgMC43MS4wAAA=",
    code: "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",
    codeHash: "646ef690f3a1e1387753c61be5a8c5a813806199bfe47e5d555944978ba50302",
};
export default RoundContract;