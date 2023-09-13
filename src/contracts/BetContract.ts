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
    tvc: "te6ccgECJQEABVYAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsiBQQkA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwODQYCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8GwYDPCCCEDI/yF274wIgghBotV8/u+MCIIIQezsmKrvjAhQLBwM8IIIQb2U7x7rjAiCCEHowjCW64wIgghB7OyYquuMCCgkIAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA+zsmKoMjOyx/JcPsA3vIAIQFQMNHbPPhKIY4cjQRwAAAAAAAAAAAAAAAAPowjCWDIzst/yXD7AN7yACEBTjDR2zz4TyGOG40EcAAAAAAAAAAAAAAAADvZTvHgyM7OyXD7AN7yACEEUCCCEDO3Aqu64wIgghBCxTBwuuMCIIIQWr7ZqbrjAiCCEGi1Xz+64wIREA8MAiIw+EJu4wD4RvJz0fgA2zzyAA0cA87tRNDXScIBj1xw7UTQ9AVwIHEjgED0Dm+Rk9cLH95yJIBA9A5vkZPXCx/ecyWAQPQOjoGJ33QmgED0Do6Bid9w+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Y3D4anD4a3D4cOMNDg4hAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAA2r7ZqYMjOy3/JcPsA3vIAIQMkMPhG8uBM+EJu4wDR2zzbPPIAIR0cAyww+Eby4Ez4Qm7jANN/0wHR2zzbPPIAIRIcAXCI+En4T8cF8uhkggiYloBy+wLAAZj4SiGgtX/4apj4SyGgtX/4a+Iw+E/Iz4WIzoBvz0DJgwb7ABMAGFdyb25nIHNlbmRlcgRQIIIQFQIsQbrjAiCCECNRcLe64wIgghAxkM3MuuMCIIIQMj/IXbrjAhgXFhUBUDDR2zz4TSGOHI0EcAAAAAAAAAAAAAAAACyP8hdgyM7LH8lw+wDe8gAhAVAw0ds8+FAhjhyNBHAAAAAAAAAAAAAAAAAsZDNzIMjOygDJcPsA3vIAIQFOMNHbPPhOIY4bjQRwAAAAAAAAAAAAAAAAKNRcLeDIzs7JcPsA3vIAIQOEMPhG8uBM+EJu4wDR2zwljikn0NMB+kAwMcjPhyDOcc8LYV5AyM+SVAixBst/y3/KAMsfyx/NyXD7AJJfBeLjAPIAIRoZACjtRNDT/9M/MfhDWMjL/8s/zsntVAAU+Er4S/hQ+Ez4TQMc+Eby4Ez4Qm7jANs82zwhHRwAXvhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4PLf8t/yx/LH1UgyM5ZyM7KAM3Nye1UA6CIaKb+YIIQBfXhAL7y6GWI+CP4Tbzy6GaI+FBwuvLoZ4IImJaAcvsCf/hw+Ev4SvhO+E/Iz4WIznHPC25VIMjPkKO9+tLOy3/Lf83Jgwb7ACAfHgBGVGhlIHJld2FyZCBoYXMgYmVlbiBhbHJlYWR5IGNsYWltZWQAIlRvbyBlYXJseSByZXF1ZXN0ACpTbWFsbCBhdHRhY2hlZCBhbW91bnQAYu1E0NP/0z/TADHTf9N/0x/TH9TR0PpA1NHQ+kDSANH4cPhv+G74bfhs+Gv4avhj+GICEPSkIPS98sBOJCMAFHNvbCAwLjcxLjAAAA==",
    code: "te6ccgECIgEABSkABCSK7VMg4wMgwP/jAiDA/uMC8gsfAgEhA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwLCgMCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8GAMDPCCCEDI/yF274wIgghBotV8/u+MCIIIQezsmKrvjAhEIBAM8IIIQb2U7x7rjAiCCEHowjCW64wIgghB7OyYquuMCBwYFAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA+zsmKoMjOyx/JcPsA3vIAHgFQMNHbPPhKIY4cjQRwAAAAAAAAAAAAAAAAPowjCWDIzst/yXD7AN7yAB4BTjDR2zz4TyGOG40EcAAAAAAAAAAAAAAAADvZTvHgyM7OyXD7AN7yAB4EUCCCEDO3Aqu64wIgghBCxTBwuuMCIIIQWr7ZqbrjAiCCEGi1Xz+64wIODQwJAiIw+EJu4wD4RvJz0fgA2zzyAAoZA87tRNDXScIBj1xw7UTQ9AVwIHEjgED0Dm+Rk9cLH95yJIBA9A5vkZPXCx/ecyWAQPQOjoGJ33QmgED0Do6Bid9w+HD4b/hu+G34bPhr+GqAQPQO8r3XC//4YnD4Y3D4anD4a3D4cOMNCwseAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAA2r7ZqYMjOy3/JcPsA3vIAHgMkMPhG8uBM+EJu4wDR2zzbPPIAHhoZAyww+Eby4Ez4Qm7jANN/0wHR2zzbPPIAHg8ZAXCI+En4T8cF8uhkggiYloBy+wLAAZj4SiGgtX/4apj4SyGgtX/4a+Iw+E/Iz4WIzoBvz0DJgwb7ABAAGFdyb25nIHNlbmRlcgRQIIIQFQIsQbrjAiCCECNRcLe64wIgghAxkM3MuuMCIIIQMj/IXbrjAhUUExIBUDDR2zz4TSGOHI0EcAAAAAAAAAAAAAAAACyP8hdgyM7LH8lw+wDe8gAeAVAw0ds8+FAhjhyNBHAAAAAAAAAAAAAAAAAsZDNzIMjOygDJcPsA3vIAHgFOMNHbPPhOIY4bjQRwAAAAAAAAAAAAAAAAKNRcLeDIzs7JcPsA3vIAHgOEMPhG8uBM+EJu4wDR2zwljikn0NMB+kAwMcjPhyDOcc8LYV5AyM+SVAixBst/y3/KAMsfyx/NyXD7AJJfBeLjAPIAHhcWACjtRNDT/9M/MfhDWMjL/8s/zsntVAAU+Er4S/hQ+Ez4TQMc+Eby4Ez4Qm7jANs82zweGhkAXvhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4PLf8t/yx/LH1UgyM5ZyM7KAM3Nye1UA6CIaKb+YIIQBfXhAL7y6GWI+CP4Tbzy6GaI+FBwuvLoZ4IImJaAcvsCf/hw+Ev4SvhO+E/Iz4WIznHPC25VIMjPkKO9+tLOy3/Lf83Jgwb7AB0cGwBGVGhlIHJld2FyZCBoYXMgYmVlbiBhbHJlYWR5IGNsYWltZWQAIlRvbyBlYXJseSByZXF1ZXN0ACpTbWFsbCBhdHRhY2hlZCBhbW91bnQAYu1E0NP/0z/TADHTf9N/0x/TH9TR0PpA1NHQ+kDSANH4cPhv+G74bfhs+Gv4avhj+GICEPSkIPS98sBOISAAFHNvbCAwLjcxLjAAAA==",
    codeHash: "8a2778313d4b6f205432f83fd8881958d84735d07fc547fe89d7b17103096a78",
};
export default BetContract;