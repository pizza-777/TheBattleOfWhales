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
                "name": "count",
                "inputs": [],
                "outputs": [
                    {
                        "name": "count",
                        "type": "uint32"
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
                "name": "count",
                "type": "uint32"
            }
        ]
    },
    tvc: "te6ccgECJAEABVwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gshBQQjA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwODQYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8ICAGAzwgghAyP8hdu+MCIIIQWr7ZqbvjAiCCEHs7Jiq74wIYDwcEUCCCEGi1Xz+64wIgghBvZTvHuuMCIIIQejCMJbrjAiCCEHs7Jiq64wILCgkIAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA+zsmKoMjOyx/JcPsA3vIAHwFQMNHbPPhKIY4cjQRwAAAAAAAAAAAAAAAAPowjCWDIzst/yXD7AN7yAB8BTjDR2zz4TyGOG40EcAAAAAAAAAAAAAAAADvZTvHgyM7OyXD7AN7yAB8DNjD4Qm7jAPhG8nPRiPhJ+E/HBfLoZfgA2zzyAA0MFQBGT25seSByb3VuZCBjYW4gZGVwbG95IHRoaXMgY29udHJhY3QD2u1E0NdJwgGPYnDtRND0BXAgcSOAQPQOb5GT1wsf3nIkgED0Dm+Rk9cLH95zJYBA9A6OgYnfdCaAQPQOjoGJ33Ag+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjcPhqcPhrcPhwcPhx4w0ODh8AQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEUCCCEDO3Aqu64wIgghBCxTBwuuMCIIIQV2yMoLrjAiCCEFq+2am64wIUEhEQAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAA2r7ZqYMjOy3/JcPsA3vIAHwFQMNHbPPhRIY4cjQRwAAAAAAAAAAAAAAAANdsjKCDIzssfyXD7AN7yAB8DJDD4RvLgTPhCbuMA0ds82zzyAB8TFQF0iPhJ+E/HBfLoZ4IImJaAcvsCf/hw+Ev4SvhO+E/Iz4WIznHPC25VIMjPkKO9+tLOy3/Lf83Jgwb7ABcDLDD4RvLgTPhCbuMA03/TAdHbPNs88gAfFhUAaPhR+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg8t/y3/LH8sfVTDIzlUgyM7KAMsfzc3J7VQBiIj4SfhPxwXy6GaCCJiWgHL7AvhRpLUf+HHAAZj4SiGgtX/4apj4SyGgtX/4a+Iw+E/Iz4WIzoIQEkPpUc8LjsmDBvsAFwAYV3Jvbmcgc2VuZGVyBFAgghAVAixBuuMCIIIQI1Fwt7rjAiCCEDGQzcy64wIgghAyP8hduuMCHBsaGQFQMNHbPPhNIY4cjQRwAAAAAAAAAAAAAAAALI/yF2DIzssfyXD7AN7yAB8BUDDR2zz4UCGOHI0EcAAAAAAAAAAAAAAAACxkM3MgyM7KAMlw+wDe8gAfAU4w0ds8+E4hjhuNBHAAAAAAAAAAAAAAAAAo1Fwt4MjOzslw+wDe8gAfA4Qw+Eby4Ez4Qm7jANHbPCWOKSfQ0wH6QDAxyM+HIM5xzwthXkDIz5JUCLEGy3/Lf8oAyx/LH83JcPsAkl8F4uMA8gAfHh0AKO1E0NP/0z8x+ENYyMv/yz/Oye1UABT4SvhL+FD4TPhNAGrtRNDT/9M/0wAx03/Tf9Mf0x/U0dD6QNTR0PpA0gDTH9H4cfhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCEPSkIPS98sBOIyIAFHNvbCAwLjcxLjAAAA==",
    code: "te6ccgECIQEABS8ABCSK7VMg4wMgwP/jAiDA/uMC8gseAgEgA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwLCgMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8HR0DAzwgghAyP8hdu+MCIIIQWr7ZqbvjAiCCEHs7Jiq74wIVDAQEUCCCEGi1Xz+64wIgghBvZTvHuuMCIIIQejCMJbrjAiCCEHs7Jiq64wIIBwYFAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA+zsmKoMjOyx/JcPsA3vIAHAFQMNHbPPhKIY4cjQRwAAAAAAAAAAAAAAAAPowjCWDIzst/yXD7AN7yABwBTjDR2zz4TyGOG40EcAAAAAAAAAAAAAAAADvZTvHgyM7OyXD7AN7yABwDNjD4Qm7jAPhG8nPRiPhJ+E/HBfLoZfgA2zzyAAoJEgBGT25seSByb3VuZCBjYW4gZGVwbG95IHRoaXMgY29udHJhY3QD2u1E0NdJwgGPYnDtRND0BXAgcSOAQPQOb5GT1wsf3nIkgED0Dm+Rk9cLH95zJYBA9A6OgYnfdCaAQPQOjoGJ33Ag+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjcPhqcPhrcPhwcPhx4w0LCxwAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEUCCCEDO3Aqu64wIgghBCxTBwuuMCIIIQV2yMoLrjAiCCEFq+2am64wIRDw4NAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAA2r7ZqYMjOy3/JcPsA3vIAHAFQMNHbPPhRIY4cjQRwAAAAAAAAAAAAAAAANdsjKCDIzssfyXD7AN7yABwDJDD4RvLgTPhCbuMA0ds82zzyABwQEgF0iPhJ+E/HBfLoZ4IImJaAcvsCf/hw+Ev4SvhO+E/Iz4WIznHPC25VIMjPkKO9+tLOy3/Lf83Jgwb7ABQDLDD4RvLgTPhCbuMA03/TAdHbPNs88gAcExIAaPhR+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg8t/y3/LH8sfVTDIzlUgyM7KAMsfzc3J7VQBiIj4SfhPxwXy6GaCCJiWgHL7AvhRpLUf+HHAAZj4SiGgtX/4apj4SyGgtX/4a+Iw+E/Iz4WIzoIQEkPpUc8LjsmDBvsAFAAYV3Jvbmcgc2VuZGVyBFAgghAVAixBuuMCIIIQI1Fwt7rjAiCCEDGQzcy64wIgghAyP8hduuMCGRgXFgFQMNHbPPhNIY4cjQRwAAAAAAAAAAAAAAAALI/yF2DIzssfyXD7AN7yABwBUDDR2zz4UCGOHI0EcAAAAAAAAAAAAAAAACxkM3MgyM7KAMlw+wDe8gAcAU4w0ds8+E4hjhuNBHAAAAAAAAAAAAAAAAAo1Fwt4MjOzslw+wDe8gAcA4Qw+Eby4Ez4Qm7jANHbPCWOKSfQ0wH6QDAxyM+HIM5xzwthXkDIz5JUCLEGy3/Lf8oAyx/LH83JcPsAkl8F4uMA8gAcGxoAKO1E0NP/0z8x+ENYyMv/yz/Oye1UABT4SvhL+FD4TPhNAGrtRNDT/9M/0wAx03/Tf9Mf0x/U0dD6QNTR0PpA0gDTH9H4cfhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCEPSkIPS98sBOIB8AFHNvbCAwLjcxLjAAAA==",
    codeHash: "4b54df8d0a3afa7fc326622ceeb4671cc2530c7c51c21ec806b294f52bb3d300",
};
export default BetContract;