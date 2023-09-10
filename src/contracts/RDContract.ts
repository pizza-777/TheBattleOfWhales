const RDContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "placeBet",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "roundTime",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint32"
                    },
                    {
                        "name": "value1",
                        "type": "uint32"
                    }
                ]
            },
            {
                "name": "calcRoundAddress",
                "inputs": [
                    {
                        "name": "roundStart",
                        "type": "uint32"
                    },
                    {
                        "name": "roundEnd",
                        "type": "uint32"
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
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "side",
                "inputs": [],
                "outputs": [
                    {
                        "name": "side",
                        "type": "uint2"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "roundCode",
                "type": "cell"
            },
            {
                "key": 2,
                "name": "betCode",
                "type": "cell"
            },
            {
                "key": 3,
                "name": "side",
                "type": "uint2"
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
                "name": "roundCode",
                "type": "cell"
            },
            {
                "name": "betCode",
                "type": "cell"
            },
            {
                "name": "side",
                "type": "uint2"
            },
            {
                "name": "roundAddress",
                "type": "address"
            }
        ]
    },
    tvc: "te6ccgECHwEABH4AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gscBQQeA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwaCwYCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8DwYCKCCCEGuQB4K74wIgghB0a6iCuuMCCAcBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAAD0a6iCgyM7LAclw+wDe8gAbBFAgghATPnCHuuMCIIIQU50YNrrjAiCCEGi1Xz+64wIgghBrkAeCuuMCDQwKCQJoMPhG8uBM0ds8Io4hJNDTAfpAMDHIz4cgzoBiz0BeAc+TrkAeCssfyx/JcPsAkVvi4wDyABgOAiIw+EJu4wD4RvJz0fgA2zzyAAsQBJLtRNDXScIBj75w7UTQ9AVxIYBA9A+OgYjfciKAQPQPjoGI33MjgED0Dm+Rk9cLAd6J+G34bPhr+GqAQPQO8r3XC//4YnD4Y+MNHh4aGwNuMPhG8uBM+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5NOdGDazs3JcPsAkTDi2zzyABsREAN2MPhG8uBM+EJu4wDTH9Mf0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+STPnCHs7NyXD7AJEw4uMA8gAbFg4AKO1E0NP/0z8x+ENYyMv/yz/Oye1UAx74RvLgTPhCbuMA2zww2zwbERAANvhN+Ez4S/hK+EP4QsjL/8s/z4PMzMsBzsntVAQkiYhopv5gghA7msoAvvLoZNs8GhkYEgMsiCKmPLUf+CO58uhl+ABc2zz4TSHHBRcWEwL+jvj4QsjL/3BtgED0QyPIyx9yWIBA9EMiyMsfc1iAQPRD+EtxWIBA9BfI9ADJ+ErIz4SA9AD0AM+BySD5APhJ+kJvEsjPhkDKB8v/ydBmyM+FiM6CgCHc1lAAAAAAAAAAAAAAAAAAA88LjiHbPMzPkNFqvn/Jc/sA+G3f+En4TBUUAEZopv5gVQLIz4WIzgH6AnHPC2pZyM+Rvtn2UssBzs3Jc/sAWwA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMAhvhCyMv/cG2AQPRDWMjLH3JYgED0QwHIyx9zWIBA9EP4S3FYgED0F8j0AMn4SsjPhID0APQAz4HJ+QDIz4oAQMv/ydAAPlBhdXNlIG9uZSBtaW51dGUgYmV0d2VlbiByb3VuZHMAIoEBaPgjIakEIai1HyBYoLUfAChNaW4gYmV0IHZhbHVlIDEgZXZlcgBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAA67UTQ0//TP9MAMdTU0wH6QNH4bfhs+Gv4avhj+GICEPSkIPS98sBOHh0AFHNvbCAwLjcxLjAAAA==",
    code: "te6ccgECHAEABFEABCSK7VMg4wMgwP/jAiDA/uMC8gsZAgEbA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwXCAMCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8DAMCKCCCEGuQB4K74wIgghB0a6iCuuMCBQQBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAAD0a6iCgyM7LAclw+wDe8gAYBFAgghATPnCHuuMCIIIQU50YNrrjAiCCEGi1Xz+64wIgghBrkAeCuuMCCgkHBgJoMPhG8uBM0ds8Io4hJNDTAfpAMDHIz4cgzoBiz0BeAc+TrkAeCssfyx/JcPsAkVvi4wDyABULAiIw+EJu4wD4RvJz0fgA2zzyAAgNBJLtRNDXScIBj75w7UTQ9AVxIYBA9A+OgYjfciKAQPQPjoGI33MjgED0Dm+Rk9cLAd6J+G34bPhr+GqAQPQO8r3XC//4YnD4Y+MNGxsXGANuMPhG8uBM+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5NOdGDazs3JcPsAkTDi2zzyABgODQN2MPhG8uBM+EJu4wDTH9Mf0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+STPnCHs7NyXD7AJEw4uMA8gAYEwsAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAx74RvLgTPhCbuMA2zww2zwYDg0ANvhN+Ez4S/hK+EP4QsjL/8s/z4PMzMsBzsntVAQkiYhopv5gghA7msoAvvLoZNs8FxYVDwMsiCKmPLUf+CO58uhl+ABc2zz4TSHHBRQTEAL+jvj4QsjL/3BtgED0QyPIyx9yWIBA9EMiyMsfc1iAQPRD+EtxWIBA9BfI9ADJ+ErIz4SA9AD0AM+BySD5APhJ+kJvEsjPhkDKB8v/ydBmyM+FiM6CgCHc1lAAAAAAAAAAAAAAAAAAA88LjiHbPMzPkNFqvn/Jc/sA+G3f+En4TBIRAEZopv5gVQLIz4WIzgH6AnHPC2pZyM+Rvtn2UssBzs3Jc/sAWwA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMAhvhCyMv/cG2AQPRDWMjLH3JYgED0QwHIyx9zWIBA9EP4S3FYgED0F8j0AMn4SsjPhID0APQAz4HJ+QDIz4oAQMv/ydAAPlBhdXNlIG9uZSBtaW51dGUgYmV0d2VlbiByb3VuZHMAIoEBaPgjIakEIai1HyBYoLUfAChNaW4gYmV0IHZhbHVlIDEgZXZlcgBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAA67UTQ0//TP9MAMdTU0wH6QNH4bfhs+Gv4avhj+GICEPSkIPS98sBOGxoAFHNvbCAwLjcxLjAAAA==",
    codeHash: "ff2e841acbac71465e122850340d768c2836789ec6e843312d0dcace2ab4a42b",
};
export default RDContract;