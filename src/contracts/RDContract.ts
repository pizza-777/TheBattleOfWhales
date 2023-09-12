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
                "name": "buildRoundContractInitData",
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
                        "type": "cell"
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
    tvc: "te6ccgECIAEABJMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsdBQQfA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwbDAYCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8EQYCKCCCEGi1Xz+74wIgghB0a6iCu+MCCgcCKCCCEGuQB4K64wIgghB0a6iCuuMCCQgBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAAD0a6iCgyM7LAclw+wDe8gAcAmgw+Eby4EzR2zwijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5OuQB4Kyx/LH8lw+wCRW+LjAPIAGRAETiCCCEQCUrrjAiCCEBM+cIe64wIgghBTnRg2uuMCIIIQaLVfP7rjAg8ODQsCIjD4Qm7jAPhG8nPR+ADbPPIADBIEku1E0NdJwgGPvnDtRND0BXEhgED0D46BiN9yIoBA9A+OgYjfcyOAQPQOb5GT1wsB3on4bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0fHxscA24w+Eby4Ez4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk050YNrOzclw+wCRMOLbPPIAHBMSA3Yw+Eby4Ez4Qm7jANMf0x/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5JM+cIezs3JcPsAkTDi4wDyABwWEANuMPhG8uBM+EJu4wDTH9Mf0ds8IY4bI9DTAfpAMDHIz4cgzoIQgEQCUs8LgczJcPsAkTDi4wDyABwXEAAo7UTQ0//TPzH4Q1jIy//LP87J7VQDHvhG8uBM+EJu4wDbPDDbPBwTEgA2+E34TPhL+Er4Q/hCyMv/yz/Pg8zMywHOye1UBCSJiGim/mCCEDuaygC+8uhk2zwbGhkUBPSIIqY8tR/4I7ny6GX4AFzbPFnbPCD5APhJ+kJvEsjPhkDKB8v/ydBmyM+FiM6CgCAX14QAAAAAAAAAAAAAAAAAA88LjiHbPMzPkNFqvn/JcfsA+G34SfhMaKb+YFUCyM+FiM4B+gJxzwtqWcjPkb7Z9lLLAc7NyXP7ABgWFxUANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DARrbPPkAyM+KAEDL/8nQFwBw+ELIy/9wbYBA9ENYyMsfcliAQPRDAcjLH3NYgED0Q/hLcViAQPQXyPQAyfhKyM+EgPQA9ADPgckAPlBhdXNlIG9uZSBtaW51dGUgYmV0d2VlbiByb3VuZHMAIoEBaPgjIakEIai1HyBYoLUfAChNaW4gYmV0IHZhbHVlIDEgZXZlcgBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAA67UTQ0//TP9MAMdTU0wH6QNH4bfhs+Gv4avhj+GICEPSkIPS98sBOHx4AFHNvbCAwLjcxLjAAAA==",
    code: "te6ccgECHQEABGYABCSK7VMg4wMgwP/jAiDA/uMC8gsaAgEcA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwYCQMCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8DgMCKCCCEGi1Xz+74wIgghB0a6iCu+MCBwQCKCCCEGuQB4K64wIgghB0a6iCuuMCBgUBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAAD0a6iCgyM7LAclw+wDe8gAZAmgw+Eby4EzR2zwijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5OuQB4Kyx/LH8lw+wCRW+LjAPIAFg0ETiCCCEQCUrrjAiCCEBM+cIe64wIgghBTnRg2uuMCIIIQaLVfP7rjAgwLCggCIjD4Qm7jAPhG8nPR+ADbPPIACQ8Eku1E0NdJwgGPvnDtRND0BXEhgED0D46BiN9yIoBA9A+OgYjfcyOAQPQOb5GT1wsB3on4bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0cHBgZA24w+Eby4Ez4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk050YNrOzclw+wCRMOLbPPIAGRAPA3Yw+Eby4Ez4Qm7jANMf0x/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5JM+cIezs3JcPsAkTDi4wDyABkTDQNuMPhG8uBM+EJu4wDTH9Mf0ds8IY4bI9DTAfpAMDHIz4cgzoIQgEQCUs8LgczJcPsAkTDi4wDyABkUDQAo7UTQ0//TPzH4Q1jIy//LP87J7VQDHvhG8uBM+EJu4wDbPDDbPBkQDwA2+E34TPhL+Er4Q/hCyMv/yz/Pg8zMywHOye1UBCSJiGim/mCCEDuaygC+8uhk2zwYFxYRBPSIIqY8tR/4I7ny6GX4AFzbPFnbPCD5APhJ+kJvEsjPhkDKB8v/ydBmyM+FiM6CgCAX14QAAAAAAAAAAAAAAAAAA88LjiHbPMzPkNFqvn/JcfsA+G34SfhMaKb+YFUCyM+FiM4B+gJxzwtqWcjPkb7Z9lLLAc7NyXP7ABUTFBIANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DARrbPPkAyM+KAEDL/8nQFABw+ELIy/9wbYBA9ENYyMsfcliAQPRDAcjLH3NYgED0Q/hLcViAQPQXyPQAyfhKyM+EgPQA9ADPgckAPlBhdXNlIG9uZSBtaW51dGUgYmV0d2VlbiByb3VuZHMAIoEBaPgjIakEIai1HyBYoLUfAChNaW4gYmV0IHZhbHVlIDEgZXZlcgBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAA67UTQ0//TP9MAMdTU0wH6QNH4bfhs+Gv4avhj+GICEPSkIPS98sBOHBsAFHNvbCAwLjcxLjAAAA==",
    codeHash: "2c5c3947e14558c837d9b086d755bdadc6011ccec481663c1e3e23b1a40d1cb5",
};
export default RDContract;