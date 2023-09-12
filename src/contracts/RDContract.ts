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
    tvc: "te6ccgECIQEABKcAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gseBQQgA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwcDAYCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8EQYCKCCCEGi1Xz+74wIgghB0a6iCu+MCCgcCKCCCEGuQB4K64wIgghB0a6iCuuMCCQgBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAAD0a6iCgyM7LAclw+wDe8gAdAmgw+Eby4EzR2zwijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5OuQB4Kyx/LH8lw+wCRW+LjAPIAGhAETiCCCEQCUrrjAiCCEBM+cIe64wIgghBTnRg2uuMCIIIQaLVfP7rjAg8ODQsCIjD4Qm7jAPhG8nPR+ADbPPIADBIEku1E0NdJwgGPvnDtRND0BXEhgED0D46BiN9yIoBA9A+OgYjfcyOAQPQOb5GT1wsB3on4bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0gIBwdA24w+Eby4Ez4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk050YNrOzclw+wCRMOLbPPIAHRMSA3Yw+Eby4Ez4Qm7jANMf0x/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5JM+cIezs3JcPsAkTDi4wDyAB0XEANuMPhG8uBM+EJu4wDTH9Mf0ds8IY4bI9DTAfpAMDHIz4cgzoIQgEQCUs8LgczJcPsAkTDi4wDyAB0YEAAo7UTQ0//TPzH4Q1jIy//LP87J7VQDHvhG8uBM+EJu4wDbPDDbPB0TEgA2+E34TPhL+Er4Q/hCyMv/yz/Pg8zMywHOye1UBCSJiGim/mCCEDuaygC+8uhk2zwcGxoUAyyIIqY8tR/4I7ny6GX4AFzbPPhNIccFGRcVAuqPRF8i2zwg+QD4SfpCbxLIz4ZAygfL/8nQZsjPhYjOgoAh3NZQAAAAAAAAAAAAAAAAAAPPC44h2zzMz5DRar5/yXD7APht32im/mD4SfhMaKb+YFUDyM+FiM4B+gJxzwtqVSDIz5DTG9qaywHOy3/NyXD7AFsYFgA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMBGts8+QDIz4oAQMv/ydAYAHD4QsjL/3BtgED0Q1jIyx9yWIBA9EMByMsfc1iAQPRD+EtxWIBA9BfI9ADJ+ErIz4SA9AD0AM+ByQA+UGF1c2Ugb25lIG1pbnV0ZSBiZXR3ZWVuIHJvdW5kcwAigQFo+CMhqQQhqLUfIFigtR8AKE1pbiBiZXQgdmFsdWUgMSBldmVyAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQADrtRNDT/9M/0wAx1NTTAfpA0fht+Gz4a/hq+GP4YgIQ9KQg9L3ywE4gHwAUc29sIDAuNzEuMAAA",
    code: "te6ccgECHgEABHoABCSK7VMg4wMgwP/jAiDA/uMC8gsbAgEdA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwZCQMCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8DgMCKCCCEGi1Xz+74wIgghB0a6iCu+MCBwQCKCCCEGuQB4K64wIgghB0a6iCuuMCBgUBUDDR2zz4TCGOHI0EcAAAAAAAAAAAAAAAAD0a6iCgyM7LAclw+wDe8gAaAmgw+Eby4EzR2zwijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5OuQB4Kyx/LH8lw+wCRW+LjAPIAFw0ETiCCCEQCUrrjAiCCEBM+cIe64wIgghBTnRg2uuMCIIIQaLVfP7rjAgwLCggCIjD4Qm7jAPhG8nPR+ADbPPIACQ8Eku1E0NdJwgGPvnDtRND0BXEhgED0D46BiN9yIoBA9A+OgYjfcyOAQPQOb5GT1wsB3on4bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0dHRkaA24w+Eby4Ez4Qm7jANHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPk050YNrOzclw+wCRMOLbPPIAGhAPA3Yw+Eby4Ez4Qm7jANMf0x/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5JM+cIezs3JcPsAkTDi4wDyABoUDQNuMPhG8uBM+EJu4wDTH9Mf0ds8IY4bI9DTAfpAMDHIz4cgzoIQgEQCUs8LgczJcPsAkTDi4wDyABoVDQAo7UTQ0//TPzH4Q1jIy//LP87J7VQDHvhG8uBM+EJu4wDbPDDbPBoQDwA2+E34TPhL+Er4Q/hCyMv/yz/Pg8zMywHOye1UBCSJiGim/mCCEDuaygC+8uhk2zwZGBcRAyyIIqY8tR/4I7ny6GX4AFzbPPhNIccFFhQSAuqPRF8i2zwg+QD4SfpCbxLIz4ZAygfL/8nQZsjPhYjOgoAh3NZQAAAAAAAAAAAAAAAAAAPPC44h2zzMz5DRar5/yXD7APht32im/mD4SfhMaKb+YFUDyM+FiM4B+gJxzwtqVSDIz5DTG9qaywHOy3/NyXD7AFsVEwA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMBGts8+QDIz4oAQMv/ydAVAHD4QsjL/3BtgED0Q1jIyx9yWIBA9EMByMsfc1iAQPRD+EtxWIBA9BfI9ADJ+ErIz4SA9AD0AM+ByQA+UGF1c2Ugb25lIG1pbnV0ZSBiZXR3ZWVuIHJvdW5kcwAigQFo+CMhqQQhqLUfIFigtR8AKE1pbiBiZXQgdmFsdWUgMSBldmVyAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQADrtRNDT/9M/0wAx1NTTAfpA0fht+Gz4a/hq+GP4YgIQ9KQg9L3ywE4dHAAUc29sIDAuNzEuMAAA",
    codeHash: "2e8b1cddcc8049e00f5c3fcfbc2c101ecdcd48c91a1e3f9de1d352a2570f16f3",
};
export default RDContract;