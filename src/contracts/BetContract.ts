const BetContract = {
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
                "name": "storeBet",
                "inputs": [
                    {
                        "name": "amount",
                        "type": "uint128"
                    },
                    {
                        "name": "side",
                        "type": "uint2"
                    }
                ],
                "outputs": []
            },
            {
                "name": "claim",
                "inputs": [],
                "outputs": []
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
                    },
                    {
                        "name": "value2",
                        "type": "bool"
                    },
                    {
                        "name": "value3",
                        "type": "uint32"
                    },
                    {
                        "name": "value4",
                        "type": "uint32"
                    },
                    {
                        "name": "value5",
                        "type": "uint128"
                    },
                    {
                        "name": "value6",
                        "type": "uint128"
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
                "name": "player",
                "inputs": [],
                "outputs": [
                    {
                        "name": "player",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "round",
                "inputs": [],
                "outputs": [
                    {
                        "name": "round",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "claimedReward",
                "inputs": [],
                "outputs": [
                    {
                        "name": "claimedReward",
                        "type": "bool"
                    }
                ]
            },
            {
                "name": "countSide1",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countSide1",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "countSide2",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countSide2",
                        "type": "uint128"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "roundStart",
                "type": "uint32"
            },
            {
                "key": 2,
                "name": "roundEnd",
                "type": "uint32"
            },
            {
                "key": 3,
                "name": "player",
                "type": "address"
            },
            {
                "key": 4,
                "name": "round",
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
                "name": "side1",
                "type": "uint128"
            },
            {
                "name": "side2",
                "type": "uint128"
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
                "name": "player",
                "type": "address"
            },
            {
                "name": "round",
                "type": "address"
            },
            {
                "name": "claimedReward",
                "type": "bool"
            },
            {
                "name": "countSide1",
                "type": "uint128"
            },
            {
                "name": "countSide2",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "te6ccgECIgEABaQABCSK7VMg4wMgwP/jAiDA/uMC8gsfAgEhA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwODQMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8Hh4DBFAgghAyP8hdu+MCIIIQWr7ZqbvjAiCCEHs7Jiq74wIgghB/ZYl3uuMCGA8HBAOMMPhG8uBM+EJu4wDR2zwnji0p0NMB+kAwMcjPhyDOcc8LYV5gyM+T/ZYl3st/y3/KAMsfyx/Lf8t/zclw+wCSXwfi4wDyAB0GBQAo7UTQ0//TPzH4Q1jIy//LP87J7VQAHPhK+Ev4UPhM+E34UfhSBFAgghBotV8/uuMCIIIQb2U7x7rjAiCCEHowjCW64wIgghB7OyYquuMCCwoJCAFQMNHbPPhMIY4cjQRwAAAAAAAAAAAAAAAAPs7JiqDIzssfyXD7AN7yAB0BUDDR2zz4SiGOHI0EcAAAAAAAAAAAAAAAAD6MIwlgyM7Lf8lw+wDe8gAdAU4w0ds8+E8hjhuNBHAAAAAAAAAAAAAAAAA72U7x4MjOzslw+wDe8gAdAzYw+EJu4wD4RvJz0Yj4SfhPxwXy6GX4ANs88gANDBUARk9ubHkgcm91bmQgY2FuIGRlcGxveSB0aGlzIGNvbnRyYWN0A+btRNDXScIBj2hw7UTQ9AVwIHEjgED0Dm+Rk9cLH95yJIBA9A5vkZPXCx/ecyWAQPQOjoGJ33QmgED0Do6Bid9wXyD4cvhx+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Y3D4anD4a3D4cHD4cXD4cuMNDg4dAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBFAgghAztwKruuMCIIIQO5WphbrjAiCCEELFMHC64wIgghBavtmpuuMCFBMREAFQMNHbPPhLIY4cjQRwAAAAAAAAAAAAAAAANq+2amDIzst/yXD7AN7yAB0DJDD4RvLgTPhCbuMA0ds82zzyAB0SFQG4iPhJ+E/HBfLoZ/hQf7qOEPhOyM+FiM6Ab89AyYBA+wDggggPQkBy+wJ/+HD4UvhR+Ev4SvhO+E/Iz4WIznHPC25VQMjPkaVpXWLOy3/Lf8t/AcjLf83NyYMG+wAXAVAw0ds8+FEhjhyNBHAAAAAAAAAAAAAAAAAu5WphYMjOy3/JcPsA3vIAHQMsMPhG8uBM+EJu4wDTf9MB0ds82zzyAB0WFQBw+FL4UfhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4PLf8t/yx/LH1VAyM5VMMjOygDLf8t/zc3J7VQBloj4SfhPxwXy6GaCCJiWgHL7AsABn/hKIaC1f/hq+FGktX/4cZ/4SyGgtX/4a/hSpLV/+HLiMPhPyM+FiM6CEBJD6VHPC47Jgwb7ABcAGFdyb25nIHNlbmRlcgRQIIIQCsfUrrrjAiCCECNRcLe64wIgghAxkM3MuuMCIIIQMj/IXbrjAhwbGhkBUDDR2zz4TSGOHI0EcAAAAAAAAAAAAAAAACyP8hdgyM7LH8lw+wDe8gAdAVAw0ds8+FAhjhyNBHAAAAAAAAAAAAAAAAAsZDNzIMjOygDJcPsA3vIAHQFOMNHbPPhOIY4bjQRwAAAAAAAAAAAAAAAAKNRcLeDIzs7JcPsA3vIAHQFQMNHbPPhSIY4cjQRwAAAAAAAAAAAAAAAAIrH1K6DIzst/yXD7AN7yAB0Acu1E0NP/0z/TADHTf9N/0x/TH9TR0PpA1NHQ+kDSANN/03/R+HL4cfhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCEPSkIPS98sBOISAAFHNvbCAwLjcxLjAAAA==",
    codeHash: "bfd97a1e7d05d801abdebf9e48098abac6f80afc468120fed3478118fdf3c013",
};
export default BetContract;