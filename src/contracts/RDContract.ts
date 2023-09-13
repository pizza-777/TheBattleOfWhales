const RDContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "replenish",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "placeBet",
                "inputs": [],
                "outputs": []
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
                "name": "buildRDContractInitData",
                "inputs": [
                    {
                        "name": "_side",
                        "type": "uint2"
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
    tvc: "te6ccgECIgEABTYAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsfBQQhA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwNDAYCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8FAYCKCCCEEadYym74wIgghB0a6iCu+MCDgcEUCCCEGi1Xz+64wIgghBrkAeCuuMCIIIQbZfYO7rjAiCCEHRrqIK64wILCgkIAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA9GuogoMjOywHJcPsA3vIAHgMkMPhG8uBM+EJu4wDR2zzbPPIAHhYVAmgw+Eby4EzR2zwijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5OuQB4Kyx/LH8lw+wCRW+LjAPIAHRMCIjD4Qm7jAPhG8nPR+ADbPPIADBUEku1E0NdJwgGPvnDtRND0BXEhgED0D46BiN9yIoBA9A+OgYjfcyOAQPQOb5GT1wsB3on4bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0hIQ0eAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBE4ggghEAlK64wIgghASQ+lRuuMCIIIQEz5wh7rjAiCCEEadYym64wISERAPA3Iw+Eby4Ez4Qm7jANMB0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TGnWMps7NyXD7AJEw4uMA8gAeGxMDdjD4RvLgTPhCbuMA0x/TH9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkkz5wh7Ozclw+wCRMOLjAPIAHhkTAyQw+Eby4Ez4Qm7jANHbPNs88gAeIRUDbjD4RvLgTPhCbuMA0x/TH9HbPCGOGyPQ0wH6QDAxyM+HIM6CEIBEAlLPC4HMyXD7AJEw4uMA8gAeGhMAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAxz4RvLgTPhCbuMA2zzbPB4WFQA2+E34TPhL+Er4Q/hCyMv/yz/Pg8zMywHOye1UBIZopv5gghA7msoAuY4WaKb+YPhJyM+FiM4B+gKAa89AyXD7AODbPIgipjy1H/gjufLoZYIQBfXhAHL7AlzbPPhNIccFHRwZFwLQjz1fIts8IPkAyM+KAEDL/8nQZsjPhYjOgoAgL68IAAAAAAAAAAAAAAAAAAPPC44h2zzMz5DRar5/yXD7APht32im/mD4SfhMVQLIz4WIznHPC25VIMjPkNMb2prLAc7Lf83Jgwb7AFsaGAA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMBGts8+QDIz4oAQMv/ydAaApT4QsjL/3BtgED0Q1jIyx9yWIBA9EMByMsfc1iAQPRD+EtxWIBA9Bdx2zx0WIBA9BZy2zx1WIBA9BbI9ADJ+ErIz4SA9AD0AM+ByRsbAIL4QsjL/3BtgED0Q/hKcViAQPQX+EtyWIBA9BcByMsBc1iAQPRDyPQAyfgqyM+EgPQA9ADPgcn5AMjPigBAy//J0AA+UGF1c2Ugb25lIG1pbnV0ZSBiZXR3ZWVuIHJvdW5kcwAigQFo+CMhqQQhqLUfIFigtR8AOu1E0NP/0z/TADHU1NMB+kDR+G34bPhr+Gr4Y/hiAhD0pCD0vfLATiEgABRzb2wgMC43MS4wAAA=",
    code: "te6ccgECHwEABQkABCSK7VMg4wMgwP/jAiDA/uMC8gscAgEeA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwKCQMCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8EQMCKCCCEEadYym74wIgghB0a6iCu+MCCwQEUCCCEGi1Xz+64wIgghBrkAeCuuMCIIIQbZfYO7rjAiCCEHRrqIK64wIIBwYFAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA9GuogoMjOywHJcPsA3vIAGwMkMPhG8uBM+EJu4wDR2zzbPPIAGxMSAmgw+Eby4EzR2zwijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5OuQB4Kyx/LH8lw+wCRW+LjAPIAGhACIjD4Qm7jAPhG8nPR+ADbPPIACRIEku1E0NdJwgGPvnDtRND0BXEhgED0D46BiN9yIoBA9A+OgYjfcyOAQPQOb5GT1wsB3on4bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0eHgobAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBE4ggghEAlK64wIgghASQ+lRuuMCIIIQEz5wh7rjAiCCEEadYym64wIPDg0MA3Iw+Eby4Ez4Qm7jANMB0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TGnWMps7NyXD7AJEw4uMA8gAbGBADdjD4RvLgTPhCbuMA0x/TH9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkkz5wh7Ozclw+wCRMOLjAPIAGxYQAyQw+Eby4Ez4Qm7jANHbPNs88gAbHhIDbjD4RvLgTPhCbuMA0x/TH9HbPCGOGyPQ0wH6QDAxyM+HIM6CEIBEAlLPC4HMyXD7AJEw4uMA8gAbFxAAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAxz4RvLgTPhCbuMA2zzbPBsTEgA2+E34TPhL+Er4Q/hCyMv/yz/Pg8zMywHOye1UBIZopv5gghA7msoAuY4WaKb+YPhJyM+FiM4B+gKAa89AyXD7AODbPIgipjy1H/gjufLoZYIQBfXhAHL7AlzbPPhNIccFGhkWFALQjz1fIts8IPkAyM+KAEDL/8nQZsjPhYjOgoAgL68IAAAAAAAAAAAAAAAAAAPPC44h2zzMz5DRar5/yXD7APht32im/mD4SfhMVQLIz4WIznHPC25VIMjPkNMb2prLAc7Lf83Jgwb7AFsXFQA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMBGts8+QDIz4oAQMv/ydAXApT4QsjL/3BtgED0Q1jIyx9yWIBA9EMByMsfc1iAQPRD+EtxWIBA9Bdx2zx0WIBA9BZy2zx1WIBA9BbI9ADJ+ErIz4SA9AD0AM+ByRgYAIL4QsjL/3BtgED0Q/hKcViAQPQX+EtyWIBA9BcByMsBc1iAQPRDyPQAyfgqyM+EgPQA9ADPgcn5AMjPigBAy//J0AA+UGF1c2Ugb25lIG1pbnV0ZSBiZXR3ZWVuIHJvdW5kcwAigQFo+CMhqQQhqLUfIFigtR8AOu1E0NP/0z/TADHU1NMB+kDR+G34bPhr+Gr4Y/hiAhD0pCD0vfLATh4dABRzb2wgMC43MS4wAAA=",
    codeHash: "343558267e1c86979b38a7a9b4b440655ad185db43d5127a24be87c713ca8576",
};
export default RDContract;