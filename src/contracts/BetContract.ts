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
    tvc: "te6ccgECJAEABXMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gshBQQjA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwODQYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8ICAGAzwgghAyP8hdu+MCIIIQWr7ZqbvjAiCCEHs7Jiq74wIYDwcEUCCCEGi1Xz+64wIgghBvZTvHuuMCIIIQejCMJbrjAiCCEHs7Jiq64wILCgkIAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA+zsmKoMjOyx/JcPsA3vIAHwFQMNHbPPhKIY4cjQRwAAAAAAAAAAAAAAAAPowjCWDIzst/yXD7AN7yAB8BTjDR2zz4TyGOG40EcAAAAAAAAAAAAAAAADvZTvHgyM7OyXD7AN7yAB8DNjD4Qm7jAPhG8nPRiPhJ+E/HBfLoZfgA2zzyAA0MFQBGT25seSByb3VuZCBjYW4gZGVwbG95IHRoaXMgY29udHJhY3QD2u1E0NdJwgGPYnDtRND0BXAgcSOAQPQOb5GT1wsf3nIkgED0Dm+Rk9cLH95zJYBA9A6OgYnfdCaAQPQOjoGJ33Ag+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjcPhqcPhrcPhwcPhx4w0ODh8AQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEUCCCEDO3Aqu64wIgghBCxTBwuuMCIIIQV2yMoLrjAiCCEFq+2am64wIUEhEQAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAA2r7ZqYMjOy3/JcPsA3vIAHwFQMNHbPPhRIY4cjQRwAAAAAAAAAAAAAAAANdsjKCDIzssfyXD7AN7yAB8DJDD4RvLgTPhCbuMA0ds82zzyAB8TFQGiiPhJ+E/HBfLoZ/hQf7qOEPhOyM+FiM6Ab89AyYBA+wDggggPQkBy+wJ/+HD4S/hK+E74T8jPhYjOcc8LblUgyM+Qo7360s7Lf8t/zcmDBvsAFwMsMPhG8uBM+EJu4wDTf9MB0ds82zzyAB8WFQBo+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dy3/Lf8sfyx9VMMjOVSDIzsoAyx/NzcntVAGIiPhJ+E/HBfLoZoIImJaAcvsC+FGktR/4ccABmPhKIaC1f/hqmPhLIaC1f/hr4jD4T8jPhYjOghASQ+lRzwuOyYMG+wAXABhXcm9uZyBzZW5kZXIEUCCCEBUCLEG64wIgghAjUXC3uuMCIIIQMZDNzLrjAiCCEDI/yF264wIcGxoZAVAw0ds8+E0hjhyNBHAAAAAAAAAAAAAAAAAsj/IXYMjOyx/JcPsA3vIAHwFQMNHbPPhQIY4cjQRwAAAAAAAAAAAAAAAALGQzcyDIzsoAyXD7AN7yAB8BTjDR2zz4TiGOG40EcAAAAAAAAAAAAAAAACjUXC3gyM7OyXD7AN7yAB8DhDD4RvLgTPhCbuMA0ds8JY4pJ9DTAfpAMDHIz4cgznHPC2FeQMjPklQIsQbLf8t/ygDLH8sfzclw+wCSXwXi4wDyAB8eHQAo7UTQ0//TPzH4Q1jIy//LP87J7VQAFPhK+Ev4UPhM+E0Aau1E0NP/0z/TADHTf9N/0x/TH9TR0PpA1NHQ+kDSANMf0fhx+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4jIgAUc29sIDAuNzEuMAAA",
    code: "te6ccgECIQEABUYABCSK7VMg4wMgwP/jAiDA/uMC8gseAgEgA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwLCgMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8HR0DAzwgghAyP8hdu+MCIIIQWr7ZqbvjAiCCEHs7Jiq74wIVDAQEUCCCEGi1Xz+64wIgghBvZTvHuuMCIIIQejCMJbrjAiCCEHs7Jiq64wIIBwYFAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA+zsmKoMjOyx/JcPsA3vIAHAFQMNHbPPhKIY4cjQRwAAAAAAAAAAAAAAAAPowjCWDIzst/yXD7AN7yABwBTjDR2zz4TyGOG40EcAAAAAAAAAAAAAAAADvZTvHgyM7OyXD7AN7yABwDNjD4Qm7jAPhG8nPRiPhJ+E/HBfLoZfgA2zzyAAoJEgBGT25seSByb3VuZCBjYW4gZGVwbG95IHRoaXMgY29udHJhY3QD2u1E0NdJwgGPYnDtRND0BXAgcSOAQPQOb5GT1wsf3nIkgED0Dm+Rk9cLH95zJYBA9A6OgYnfdCaAQPQOjoGJ33Ag+HH4cPhv+G74bfhs+Gv4aoBA9A7yvdcL//hicPhjcPhqcPhrcPhwcPhx4w0LCxwAQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEUCCCEDO3Aqu64wIgghBCxTBwuuMCIIIQV2yMoLrjAiCCEFq+2am64wIRDw4NAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAA2r7ZqYMjOy3/JcPsA3vIAHAFQMNHbPPhRIY4cjQRwAAAAAAAAAAAAAAAANdsjKCDIzssfyXD7AN7yABwDJDD4RvLgTPhCbuMA0ds82zzyABwQEgGiiPhJ+E/HBfLoZ/hQf7qOEPhOyM+FiM6Ab89AyYBA+wDggggPQkBy+wJ/+HD4S/hK+E74T8jPhYjOcc8LblUgyM+Qo7360s7Lf8t/zcmDBvsAFAMsMPhG8uBM+EJu4wDTf9MB0ds82zzyABwTEgBo+FH4UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dy3/Lf8sfyx9VMMjOVSDIzsoAyx/NzcntVAGIiPhJ+E/HBfLoZoIImJaAcvsC+FGktR/4ccABmPhKIaC1f/hqmPhLIaC1f/hr4jD4T8jPhYjOghASQ+lRzwuOyYMG+wAUABhXcm9uZyBzZW5kZXIEUCCCEBUCLEG64wIgghAjUXC3uuMCIIIQMZDNzLrjAiCCEDI/yF264wIZGBcWAVAw0ds8+E0hjhyNBHAAAAAAAAAAAAAAAAAsj/IXYMjOyx/JcPsA3vIAHAFQMNHbPPhQIY4cjQRwAAAAAAAAAAAAAAAALGQzcyDIzsoAyXD7AN7yABwBTjDR2zz4TiGOG40EcAAAAAAAAAAAAAAAACjUXC3gyM7OyXD7AN7yABwDhDD4RvLgTPhCbuMA0ds8JY4pJ9DTAfpAMDHIz4cgznHPC2FeQMjPklQIsQbLf8t/ygDLH8sfzclw+wCSXwXi4wDyABwbGgAo7UTQ0//TPzH4Q1jIy//LP87J7VQAFPhK+Ev4UPhM+E0Aau1E0NP/0z/TADHTf9N/0x/TH9TR0PpA1NHQ+kDSANMf0fhx+HD4b/hu+G34bPhr+Gr4Y/hiAAr4RvLgTAIQ9KQg9L3ywE4gHwAUc29sIDAuNzEuMAAA",
    codeHash: "46babaf46ccdeae2ee5500c572efd0a65e561fc4b23b333bb03fe7ed807d3d5a",
};
export default BetContract;