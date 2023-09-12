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
    tvc: "te6ccgECKwEABroAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsoBQQqAtztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4UgwjXGCD4KMjOzsn5AFj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAwGA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCcnBgM8IIIQMj/IXbvjAiCCEFq+2am74wIgghB8aOqKu+MCGQ0HBFAgghBotV8/uuMCIIIQejCMJbrjAiCCEHs7Jiq64wIgghB8aOqKuuMCCwoJCANwMPhG8uBM+EJu4wDTf9N/0ds8IY4cI9DTAfpAMDHIz4cgzoIQ/Gjqis8Lgct/yXD7AJEw4uMA8gAmICQBUDDR2zz4SyGOHI0EcAAAAAAAAAAAAAAAAD7OyYqgyM7LH8lw+wDe8gAmAVAw0ds8+E0hjhyNBHAAAAAAAAAAAAAAAAA+jCMJYMjOy3/JcPsA3vIAJgIiMPhCbuMA+Ebyc9H4ANs88gAMEwKq7UTQ10nCAY7KcO1E0PQFcSGAQPQPjoGI33IigED0Dm+Rk9cLH95zI4BA9A5vkZPXCx/ecCD4bvht+Gz4a/hqgED0DvK91wv/+GJw+GNw+G1w+G7jDSomBFAgghA0xvamuuMCIIIQPQ/dEbrjAiCCEEUUH2y64wIgghBavtmpuuMCEhEPDgFQMNHbPPhOIY4cjQRwAAAAAAAAAAAAAAAANq+2amDIzst/yXD7AN7yACYDcjD4RvLgTPhCbuMA0ds8Io4hJNDTAfpAMDHIz4cgzoBiz0BeAc+TFFB9sst/y3/JcPsAkVvi4wDyACYQJAAI+E34TgN+MPhG8uBM+EJu4wAhk9TR0N76QNHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkvQ/dEbOzclw+wCRMOLjAPIAJiEkA0Iw+Eby4Ez4Qm7jACGV0wHU0dCS0wHi+kDTf9HbPNs88gAmFBMAQvhO+E34TPhL+Er4Q/hCyMv/yz/Pg8zLH8sfy3/Lf8ntVARUiGim/mCCEDuaygC+8uhkiCPAASTAArHy6GWI+CP4S7z4I/hMubDy6GYBGBcWFQHu2zwiWcjPhYjOgqAgL68IAAAAAAAAAAAAAAAAAAAztwKrzwuuy3/LAclw+wD4TfhOoLV/jiL4ScjPhYjOgoAh3NZQAAAAAAAAAAAAAAAAAADPC47JcfsA3yDAAZv4TWim/mCgtX/4bd7AApv4Tmim/mCgtX/4bt4cABRXcm9uZyB0aW1lABRXcm9uZyBzaWRlABxNaW4gYmV0IDEgZXZlcgRQIIIQBQLDqrrjAiCCECjvfrS64wIgghAr3eH8uuMCIIIQMj/IXbrjAiMeGxoBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAACyP8hdgyM7LH8lw+wDe8gAmA34w+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Sr3eH8s7NyXD7AJEw4uMA8gAmHCQCcts8IPkAyM+KAEDL/8nQZsjPhYjOgoAgL68IAAAAAAAAAAAAAAAAAAPPC44h2zzMz5DRar5/yXD7ACUdADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwM8MPhG8uBM+EJu4wAhk9TR0N76QNN/03/R2zzjAPIAJh8kA06II9s8+EnHBfLoZts8IIBkqQShtX8ByM+FiM4B+gKAa89AyYBA+wAiISAAgHD4TfhOupVZoLV/MeD4TfhOvI4RIlUC+E2pBPhOqLV/oLV/bCHg+E74TbyOECFY+E6pBPhNqLV/oLV/bCHgbCEBGts8+QDIz4oAQMv/ydAlACJXcm9uZyBiZXQgYWRkcmVzcwN2MPhG8uBM+EJu4wAhk9TR0N76QNHbPCGOGyPQ0wH6QDAxyM+HIM6CEIUCw6rPC4HMyXD7AJEw4uMA8gAmJSQAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAID4QsjL/3BtgED0Q/hLyMsfcViAQPRD+EzIyx9yWIBA9ENzAYBA9Bb4KHRYgED0Fsj0AMn4SsjPhID0APQAz4HJAETtRNDT/9M/0wAx1NMf0x/Tf9N/0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4qKQAUc29sIDAuNzEuMAAA",
    code: "te6ccgECKAEABo0ABCSK7VMg4wMgwP/jAiDA/uMC8gslAgEnAtztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4UgwjXGCD4KMjOzsn5AFj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAkDA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPCQkAwM8IIIQMj/IXbvjAiCCEFq+2am74wIgghB8aOqKu+MCFgoEBFAgghBotV8/uuMCIIIQejCMJbrjAiCCEHs7Jiq64wIgghB8aOqKuuMCCAcGBQNwMPhG8uBM+EJu4wDTf9N/0ds8IY4cI9DTAfpAMDHIz4cgzoIQ/Gjqis8Lgct/yXD7AJEw4uMA8gAjHSEBUDDR2zz4SyGOHI0EcAAAAAAAAAAAAAAAAD7OyYqgyM7LH8lw+wDe8gAjAVAw0ds8+E0hjhyNBHAAAAAAAAAAAAAAAAA+jCMJYMjOy3/JcPsA3vIAIwIiMPhCbuMA+Ebyc9H4ANs88gAJEAKq7UTQ10nCAY7KcO1E0PQFcSGAQPQPjoGI33IigED0Dm+Rk9cLH95zI4BA9A5vkZPXCx/ecCD4bvht+Gz4a/hqgED0DvK91wv/+GJw+GNw+G1w+G7jDScjBFAgghA0xvamuuMCIIIQPQ/dEbrjAiCCEEUUH2y64wIgghBavtmpuuMCDw4MCwFQMNHbPPhOIY4cjQRwAAAAAAAAAAAAAAAANq+2amDIzst/yXD7AN7yACMDcjD4RvLgTPhCbuMA0ds8Io4hJNDTAfpAMDHIz4cgzoBiz0BeAc+TFFB9sst/y3/JcPsAkVvi4wDyACMNIQAI+E34TgN+MPhG8uBM+EJu4wAhk9TR0N76QNHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkvQ/dEbOzclw+wCRMOLjAPIAIx4hA0Iw+Eby4Ez4Qm7jACGV0wHU0dCS0wHi+kDTf9HbPNs88gAjERAAQvhO+E34TPhL+Er4Q/hCyMv/yz/Pg8zLH8sfy3/Lf8ntVARUiGim/mCCEDuaygC+8uhkiCPAASTAArHy6GWI+CP4S7z4I/hMubDy6GYBFRQTEgHu2zwiWcjPhYjOgqAgL68IAAAAAAAAAAAAAAAAAAAztwKrzwuuy3/LAclw+wD4TfhOoLV/jiL4ScjPhYjOgoAh3NZQAAAAAAAAAAAAAAAAAADPC47JcfsA3yDAAZv4TWim/mCgtX/4bd7AApv4Tmim/mCgtX/4bt4ZABRXcm9uZyB0aW1lABRXcm9uZyBzaWRlABxNaW4gYmV0IDEgZXZlcgRQIIIQBQLDqrrjAiCCECjvfrS64wIgghAr3eH8uuMCIIIQMj/IXbrjAiAbGBcBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAACyP8hdgyM7LH8lw+wDe8gAjA34w+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Sr3eH8s7NyXD7AJEw4uMA8gAjGSECcts8IPkAyM+KAEDL/8nQZsjPhYjOgoAgL68IAAAAAAAAAAAAAAAAAAPPC44h2zzMz5DRar5/yXD7ACIaADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwM8MPhG8uBM+EJu4wAhk9TR0N76QNN/03/R2zzjAPIAIxwhA06II9s8+EnHBfLoZts8IIBkqQShtX8ByM+FiM4B+gKAa89AyYBA+wAfHh0AgHD4TfhOupVZoLV/MeD4TfhOvI4RIlUC+E2pBPhOqLV/oLV/bCHg+E74TbyOECFY+E6pBPhNqLV/oLV/bCHgbCEBGts8+QDIz4oAQMv/ydAiACJXcm9uZyBiZXQgYWRkcmVzcwN2MPhG8uBM+EJu4wAhk9TR0N76QNHbPCGOGyPQ0wH6QDAxyM+HIM6CEIUCw6rPC4HMyXD7AJEw4uMA8gAjIiEAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAID4QsjL/3BtgED0Q/hLyMsfcViAQPRD+EzIyx9yWIBA9ENzAYBA9Bb4KHRYgED0Fsj0AMn4SsjPhID0APQAz4HJAETtRNDT/9M/0wAx1NMf0x/Tf9N/0fhu+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4nJgAUc29sIDAuNzEuMAAA",
    codeHash: "1baf757275b81d613244bd8702ee444c6840324b2640000c2602ef0eab9ac116",
};
export default RoundContract;