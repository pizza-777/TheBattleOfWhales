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
    tvc: "te6ccgECHgEABFAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsbBQQdA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwZCwYCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8DwYCKCCCEGuQB4K74wIgghB0a6iCuuMCCAcBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAAD0a6iCgyM7LAclw+wDe8gAaBFAgghATPnCHuuMCIIIQU50YNrrjAiCCEGi1Xz+64wIgghBrkAeCuuMCDQwKCQJoMPhG8uBM0ds8Io4hJNDTAfpAMDHIz4cgzoBiz0BeAc+TrkAeCssfyx/JcPsAkVvi4wDyABcOAiIw+EJu4wD4RvJz0fgA2zzyAAsQBJLtRNDXScIBj75w7UTQ9AVxIYBA9A+OgYjfciKAQPQPjoGI33MjgED0Dm+Rk9cLAd6J+G34bPhr+GqAQPQO8r3XC//4YnD4Y+MNHR0ZGgNuMPhG8uBM+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5NOdGDazs3JcPsAkTDi2zzyABoREAN2MPhG8uBM+EJu4wDTH9Mf0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+STPnCHs7NyXD7AJEw4uMA8gAaFg4AKO1E0NP/0z8x+ENYyMv/yz/Oye1UAx74RvLgTPhCbuMA2zww2zwaERAANvhN+Ez4S/hK+EP4QsjL/8s/z4PMzMsBzsntVAQqiYhopv5gghA7msoAvvLoZPgA2zxcGRgXEgIO2zz4TSHHBRYTAv6O+PhCyMv/cG2AQPRDI8jLH3JYgED0QyLIyx9zWIBA9EP4S3FYgED0F8j0AMn4SsjPhID0APQAz4HJIPkA+En6Qm8SyM+GQMoHy//J0GbIz4WIzoKAIdzWUAAAAAAAAAAAAAAAAAADzwuOIds8zM+Q0Wq+f8lz+wD4bd/4SfhMFRQARmim/mBVAsjPhYjOAfoCcc8LalnIz5G+2fZSywHOzclz+wBbADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwCG+ELIy/9wbYBA9ENYyMsfcliAQPRDAcjLH3NYgED0Q/hLcViAQPQXyPQAyfhKyM+EgPQA9ADPgcn5AMjPigBAy//J0AAigQFo+CMhqQQhqLUfIFigtR8AKE1pbiBiZXQgdmFsdWUgMSBldmVyAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQADrtRNDT/9M/0wAx1NTTAfpA0fht+Gz4a/hq+GP4YgIQ9KQg9L3ywE4dHAAUc29sIDAuNzEuMAAA",
    code: "te6ccgECGwEABCMABCSK7VMg4wMgwP/jAiDA/uMC8gsYAgEaA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwWCAMCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8DAMCKCCCEGuQB4K74wIgghB0a6iCuuMCBQQBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAAD0a6iCgyM7LAclw+wDe8gAXBFAgghATPnCHuuMCIIIQU50YNrrjAiCCEGi1Xz+64wIgghBrkAeCuuMCCgkHBgJoMPhG8uBM0ds8Io4hJNDTAfpAMDHIz4cgzoBiz0BeAc+TrkAeCssfyx/JcPsAkVvi4wDyABQLAiIw+EJu4wD4RvJz0fgA2zzyAAgNBJLtRNDXScIBj75w7UTQ9AVxIYBA9A+OgYjfciKAQPQPjoGI33MjgED0Dm+Rk9cLAd6J+G34bPhr+GqAQPQO8r3XC//4YnD4Y+MNGhoWFwNuMPhG8uBM+EJu4wDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5NOdGDazs3JcPsAkTDi2zzyABcODQN2MPhG8uBM+EJu4wDTH9Mf0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+STPnCHs7NyXD7AJEw4uMA8gAXEwsAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAx74RvLgTPhCbuMA2zww2zwXDg0ANvhN+Ez4S/hK+EP4QsjL/8s/z4PMzMsBzsntVAQqiYhopv5gghA7msoAvvLoZPgA2zxcFhUUDwIO2zz4TSHHBRMQAv6O+PhCyMv/cG2AQPRDI8jLH3JYgED0QyLIyx9zWIBA9EP4S3FYgED0F8j0AMn4SsjPhID0APQAz4HJIPkA+En6Qm8SyM+GQMoHy//J0GbIz4WIzoKAIdzWUAAAAAAAAAAAAAAAAAADzwuOIds8zM+Q0Wq+f8lz+wD4bd/4SfhMEhEARmim/mBVAsjPhYjOAfoCcc8LalnIz5G+2fZSywHOzclz+wBbADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwCG+ELIy/9wbYBA9ENYyMsfcliAQPRDAcjLH3NYgED0Q/hLcViAQPQXyPQAyfhKyM+EgPQA9ADPgcn5AMjPigBAy//J0AAigQFo+CMhqQQhqLUfIFigtR8AKE1pbiBiZXQgdmFsdWUgMSBldmVyAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQADrtRNDT/9M/0wAx1NTTAfpA0fht+Gz4a/hq+GP4YgIQ9KQg9L3ywE4aGQAUc29sIDAuNzEuMAAA",
    codeHash: "fbbd0298bb10cab6cdd589451daef3331840df104bcac96bfd71039c56079fad",
};
export default RDContract;