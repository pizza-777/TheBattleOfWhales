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
    tvc: "te6ccgECJQEABVgAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsiBQQkA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwODQYCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8GwYDPCCCEDI/yF274wIgghBotV8/u+MCIIIQezsmKrvjAhQLBwM8IIIQb2U7x7rjAiCCEHowjCW64wIgghB7OyYquuMCCgkIAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA+zsmKoMjOyx/JcPsA3vIAIQFQMNHbPPhKIY4cjQRwAAAAAAAAAAAAAAAAPowjCWDIzst/yXD7AN7yACEBTjDR2zz4TyGOG40EcAAAAAAAAAAAAAAAADvZTvHgyM7OyXD7AN7yACEEUCCCEDO3Aqu64wIgghBCxTBwuuMCIIIQWr7ZqbrjAiCCEGi1Xz+64wIREA8MAiIw+EJu4wD4RvJz0fgA2zzyAA0cA87tRNDXScIBj1xw7UTQ9AVwIHEjgED0Dm+Rk9cLH95yJIBA9A5vkZPXCx/ecyWAQPQOjoGJ33QmgED0Do6Bid9w+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Y3D4anD4a3D4cOMNDg4hAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAA2r7ZqYMjOy3/JcPsA3vIAIQMkMPhG8uBM+EJu4wDR2zzbPPIAIR0cAyww+Eby4Ez4Qm7jANN/0wHR2zzbPPIAIRIcAWyI+En4T8cF8uhk+AAgwAGY+EoioLV/+GrewAKY+EshoLV/+GveMPhPyM+FiM6Ab89AyYBA+wATABhXcm9uZyBzZW5kZXIEUCCCEBUCLEG64wIgghAjUXC3uuMCIIIQMZDNzLrjAiCCEDI/yF264wIYFxYVAVAw0ds8+E0hjhyNBHAAAAAAAAAAAAAAAAAsj/IXYMjOyx/JcPsA3vIAIQFQMNHbPPhQIY4cjQRwAAAAAAAAAAAAAAAALGQzcyDIzsoAyXD7AN7yACEBTjDR2zz4TiGOG40EcAAAAAAAAAAAAAAAACjUXC3gyM7OyXD7AN7yACEDhDD4RvLgTPhCbuMA0ds8JY4pJ9DTAfpAMDHIz4cgznHPC2FeQMjPklQIsQbLf8t/ygDLH8sfzclw+wCSXwXi4wDyACEaGQAo7UTQ0//TPzH4Q1jIy//LP87J7VQAFPhK+Ev4UPhM+E0DHPhG8uBM+EJu4wDbPNs8IR0cAF74UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dy3/Lf8sfyx9VIMjOWcjOygDNzcntVAOoiGim/mCCEAX14QC+8uhliPgj+E288uhmiPhQcLry6Gd/+HD4S/hK+E5opv5g+E9/yM+FgMoAz4RAzgH6AnHPC2pVIMjPkKO9+tLOy3/Lf83JcPsAIB8eAEZUaGUgcmV3YXJkIGhhcyBiZWVuIGFscmVhZHkgY2xhaW1lZAAiVG9vIGVhcmx5IHJlcXVlc3QAKlNtYWxsIGF0dGFjaGVkIGFtb3VudABi7UTQ0//TP9MAMdN/03/TH9Mf1NHQ+kDU0dD6QNIA0fhw+G/4bvht+Gz4a/hq+GP4YgIQ9KQg9L3ywE4kIwAUc29sIDAuNzEuMAAA",
    code: "te6ccgECIgEABSsABCSK7VMg4wMgwP/jAiDA/uMC8gsfAgEhA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwLCgMCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8GAMDPCCCEDI/yF274wIgghBotV8/u+MCIIIQezsmKrvjAhEIBAM8IIIQb2U7x7rjAiCCEHowjCW64wIgghB7OyYquuMCBwYFAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA+zsmKoMjOyx/JcPsA3vIAHgFQMNHbPPhKIY4cjQRwAAAAAAAAAAAAAAAAPowjCWDIzst/yXD7AN7yAB4BTjDR2zz4TyGOG40EcAAAAAAAAAAAAAAAADvZTvHgyM7OyXD7AN7yAB4EUCCCEDO3Aqu64wIgghBCxTBwuuMCIIIQWr7ZqbrjAiCCEGi1Xz+64wIODQwJAiIw+EJu4wD4RvJz0fgA2zzyAAoZA87tRNDXScIBj1xw7UTQ9AVwIHEjgED0Dm+Rk9cLH95yJIBA9A5vkZPXCx/ecyWAQPQOjoGJ33QmgED0Do6Bid9w+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Y3D4anD4a3D4cOMNCwseAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAA2r7ZqYMjOy3/JcPsA3vIAHgMkMPhG8uBM+EJu4wDR2zzbPPIAHhoZAyww+Eby4Ez4Qm7jANN/0wHR2zzbPPIAHg8ZAWyI+En4T8cF8uhk+AAgwAGY+EoioLV/+GrewAKY+EshoLV/+GveMPhPyM+FiM6Ab89AyYBA+wAQABhXcm9uZyBzZW5kZXIEUCCCEBUCLEG64wIgghAjUXC3uuMCIIIQMZDNzLrjAiCCEDI/yF264wIVFBMSAVAw0ds8+E0hjhyNBHAAAAAAAAAAAAAAAAAsj/IXYMjOyx/JcPsA3vIAHgFQMNHbPPhQIY4cjQRwAAAAAAAAAAAAAAAALGQzcyDIzsoAyXD7AN7yAB4BTjDR2zz4TiGOG40EcAAAAAAAAAAAAAAAACjUXC3gyM7OyXD7AN7yAB4DhDD4RvLgTPhCbuMA0ds8JY4pJ9DTAfpAMDHIz4cgznHPC2FeQMjPklQIsQbLf8t/ygDLH8sfzclw+wCSXwXi4wDyAB4XFgAo7UTQ0//TPzH4Q1jIy//LP87J7VQAFPhK+Ev4UPhM+E0DHPhG8uBM+EJu4wDbPNs8HhoZAF74UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dy3/Lf8sfyx9VIMjOWcjOygDNzcntVAOoiGim/mCCEAX14QC+8uhliPgj+E288uhmiPhQcLry6Gd/+HD4S/hK+E5opv5g+E9/yM+FgMoAz4RAzgH6AnHPC2pVIMjPkKO9+tLOy3/Lf83JcPsAHRwbAEZUaGUgcmV3YXJkIGhhcyBiZWVuIGFscmVhZHkgY2xhaW1lZAAiVG9vIGVhcmx5IHJlcXVlc3QAKlNtYWxsIGF0dGFjaGVkIGFtb3VudABi7UTQ0//TP9MAMdN/03/TH9Mf1NHQ+kDU0dD6QNIA0fhw+G/4bvht+Gz4a/hq+GP4YgIQ9KQg9L3ywE4hIAAUc29sIDAuNzEuMAAA",
    codeHash: "b7aa3c159835c86f8a35f2462a21552eb9b8cbd9072b7262bef4580f225e4fcd",
};
export default BetContract;