const BetContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time"
        ],
        "functions": [
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
                "name": "constructor",
                "inputs": [],
                "outputs": []
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
            }
        ]
    },
    tvc: "te6ccgECIgEABO8AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsfBQQhA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwODQYCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8GgYDPCCCEDI/yF274wIgghBotV8/u+MCIIIQezsmKrvjAhMLBwM8IIIQb2U7x7rjAiCCEHowjCW64wIgghB7OyYquuMCCgkIAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA+zsmKoMjOyx/JcPsA3vIAHgFQMNHbPPhKIY4cjQRwAAAAAAAAAAAAAAAAPowjCWDIzst/yXD7AN7yAB4BTjDR2zz4TyGOG40EcAAAAAAAAAAAAAAAADvZTvHgyM7OyXD7AN7yAB4EUCCCEDO3Aqu64wIgghBCxTBwuuMCIIIQWr7ZqbrjAiCCEGi1Xz+64wIREA8MAiIw+EJu4wD4RvJz0fgA2zzyAA0bA87tRNDXScIBj1xw7UTQ9AVwIHEjgED0Dm+Rk9cLH95yJIBA9A5vkZPXCx/ecyWAQPQOjoGJ33QmgED0Do6Bid9w+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Y3D4anD4a3D4cOMNDg4eAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAA2r7ZqYMjOy3/JcPsA3vIAHgMkMPhG8uBM+EJu4wDR2zzbPPIAHhwbAyww+Eby4Ez4Qm7jANN/0wHR2zzbPPIAHhIbAXCI+En4T8cF8uhlggiYloBy+wLAAZj4SiGgtX/4apj4SyGgtX/4a+Iw+E/Iz4WIzoBvz0DJgwb7AB0EUCCCEBUCLEG64wIgghAjUXC3uuMCIIIQMZDNzLrjAiCCEDI/yF264wIXFhUUAVAw0ds8+E0hjhyNBHAAAAAAAAAAAAAAAAAsj/IXYMjOyx/JcPsA3vIAHgFQMNHbPPhQIY4cjQRwAAAAAAAAAAAAAAAALGQzcyDIzsoAyXD7AN7yAB4BTjDR2zz4TiGOG40EcAAAAAAAAAAAAAAAACjUXC3gyM7OyXD7AN7yAB4DhDD4RvLgTPhCbuMA0ds8JY4pJ9DTAfpAMDHIz4cgznHPC2FeQMjPklQIsQbLf8t/ygDLH8sfzclw+wCSXwXi4wDyAB4ZGAAo7UTQ0//TPzH4Q1jIy//LP87J7VQAFPhK+Ev4UPhM+E0DHPhG8uBM+EJu4wDbPNs8HhwbAF74UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dy3/Lf8sfyx9VIMjOWcjOygDNzcntVAF0iPhJ+E/HBfLoZYIImJaAcvsCf/hw+Ev4SvhO+E/Iz4WIznHPC25VIMjPkKO9+tLOy3/Lf83Jgwb7AB0AGFdyb25nIHNlbmRlcgBi7UTQ0//TP9MAMdN/03/TH9Mf1NHQ+kDU0dD6QNIA0fhw+G/4bvht+Gz4a/hq+GP4YgIQ9KQg9L3ywE4hIAAUc29sIDAuNzEuMAAA",
    code: "te6ccgECHwEABMIABCSK7VMg4wMgwP/jAiDA/uMC8gscAgEeA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwLCgMCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8FwMDPCCCEDI/yF274wIgghBotV8/u+MCIIIQezsmKrvjAhAIBAM8IIIQb2U7x7rjAiCCEHowjCW64wIgghB7OyYquuMCBwYFAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA+zsmKoMjOyx/JcPsA3vIAGwFQMNHbPPhKIY4cjQRwAAAAAAAAAAAAAAAAPowjCWDIzst/yXD7AN7yABsBTjDR2zz4TyGOG40EcAAAAAAAAAAAAAAAADvZTvHgyM7OyXD7AN7yABsEUCCCEDO3Aqu64wIgghBCxTBwuuMCIIIQWr7ZqbrjAiCCEGi1Xz+64wIODQwJAiIw+EJu4wD4RvJz0fgA2zzyAAoYA87tRNDXScIBj1xw7UTQ9AVwIHEjgED0Dm+Rk9cLH95yJIBA9A5vkZPXCx/ecyWAQPQOjoGJ33QmgED0Do6Bid9w+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Y3D4anD4a3D4cOMNCwsbAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAA2r7ZqYMjOy3/JcPsA3vIAGwMkMPhG8uBM+EJu4wDR2zzbPPIAGxkYAyww+Eby4Ez4Qm7jANN/0wHR2zzbPPIAGw8YAXCI+En4T8cF8uhlggiYloBy+wLAAZj4SiGgtX/4apj4SyGgtX/4a+Iw+E/Iz4WIzoBvz0DJgwb7ABoEUCCCEBUCLEG64wIgghAjUXC3uuMCIIIQMZDNzLrjAiCCEDI/yF264wIUExIRAVAw0ds8+E0hjhyNBHAAAAAAAAAAAAAAAAAsj/IXYMjOyx/JcPsA3vIAGwFQMNHbPPhQIY4cjQRwAAAAAAAAAAAAAAAALGQzcyDIzsoAyXD7AN7yABsBTjDR2zz4TiGOG40EcAAAAAAAAAAAAAAAACjUXC3gyM7OyXD7AN7yABsDhDD4RvLgTPhCbuMA0ds8JY4pJ9DTAfpAMDHIz4cgznHPC2FeQMjPklQIsQbLf8t/ygDLH8sfzclw+wCSXwXi4wDyABsWFQAo7UTQ0//TPzH4Q1jIy//LP87J7VQAFPhK+Ev4UPhM+E0DHPhG8uBM+EJu4wDbPNs8GxkYAF74UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dy3/Lf8sfyx9VIMjOWcjOygDNzcntVAF0iPhJ+E/HBfLoZYIImJaAcvsCf/hw+Ev4SvhO+E/Iz4WIznHPC25VIMjPkKO9+tLOy3/Lf83Jgwb7ABoAGFdyb25nIHNlbmRlcgBi7UTQ0//TP9MAMdN/03/TH9Mf1NHQ+kDU0dD6QNIA0fhw+G/4bvht+Gz4a/hq+GP4YgIQ9KQg9L3ywE4eHQAUc29sIDAuNzEuMAAA",
    codeHash: "2b588126b21fa7ebd698a4b39fd8663528a184da9079a814c4556c08c9bb68f3",
};
export default BetContract;