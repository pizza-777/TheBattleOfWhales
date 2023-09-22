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
    tvc: "te6ccgECIQEABSMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gseBQQgA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwNDAYCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8FAYCKCCCEEadYym74wIgghB0a6iCu+MCDgcEUCCCEGi1Xz+64wIgghBrkAeCuuMCIIIQbZfYO7rjAiCCEHRrqIK64wILCgkIAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA9GuogoMjOywHJcPsA3vIAHQMkMPhG8uBM+EJu4wDR2zzbPPIAHRYVAmgw+Eby4EzR2zwijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5OuQB4Kyx/LH8lw+wCRW+LjAPIAHBMCIjD4Qm7jAPhG8nPR+ADbPPIADBUEku1E0NdJwgGPvnDtRND0BXEhgED0D46BiN9yIoBA9A+OgYjfcyOAQPQOb5GT1wsB3on4bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0gIA0dAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBE4ggghEAlK64wIgghASQ+lRuuMCIIIQEz5wh7rjAiCCEEadYym64wISERAPA3Iw+Eby4Ez4Qm7jANMB0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TGnWMps7NyXD7AJEw4uMA8gAdGxMDdjD4RvLgTPhCbuMA0x/TH9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkkz5wh7Ozclw+wCRMOLjAPIAHRkTAyQw+Eby4Ez4Qm7jANHbPNs88gAdIBUDbjD4RvLgTPhCbuMA0x/TH9HbPCGOGyPQ0wH6QDAxyM+HIM6CEIBEAlLPC4HMyXD7AJEw4uMA8gAdGhMAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAxz4RvLgTPhCbuMA2zzbPB0WFQA2+E34TPhL+Er4Q/hCyMv/yz/Pg8zMywHOye1UA6Ropv5gghA7msoAuY4Q+EnIz4WIzoBvz0DJgED7AODbPCGmPLUf+CO8IfgjubGOEfhJyM+FiM6Ab89AyYBA+wBb4IIQBfXhAHL7AlzbPPhNIccFHBkXAtCPPV8i2zwg+QDIz4oAQMv/ydBmyM+FiM6CgCAvrwgAAAAAAAAAAAAAAAAAA88LjiHbPMzPkNFqvn/JcPsA+G3faKb+YPhJ+ExVAsjPhYjOcc8LblUgyM+Q0xvamssBzst/zcmDBvsAWxoYADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwEa2zz5AMjPigBAy//J0BoClPhCyMv/cG2AQPRDWMjLH3JYgED0QwHIyx9zWIBA9EP4S3FYgED0F3HbPHRYgED0FnLbPHVYgED0Fsj0AMn4SsjPhID0APQAz4HJGxsAgvhCyMv/cG2AQPRD+EpxWIBA9Bf4S3JYgED0FwHIywFzWIBA9EPI9ADJ+CrIz4SA9AD0AM+ByfkAyM+KAEDL/8nQACKBAWj4IyGpBCGotR8gWKC1HwA67UTQ0//TP9MAMdTU0wH6QNH4bfhs+Gv4avhj+GICEPSkIPS98sBOIB8AFHNvbCAwLjcxLjAAAA==",
    code: "te6ccgECHgEABPYABCSK7VMg4wMgwP/jAiDA/uMC8gsbAgEdA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwKCQMCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8EQMCKCCCEEadYym74wIgghB0a6iCu+MCCwQEUCCCEGi1Xz+64wIgghBrkAeCuuMCIIIQbZfYO7rjAiCCEHRrqIK64wIIBwYFAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAA9GuogoMjOywHJcPsA3vIAGgMkMPhG8uBM+EJu4wDR2zzbPPIAGhMSAmgw+Eby4EzR2zwijiEk0NMB+kAwMcjPhyDOgGLPQF4Bz5OuQB4Kyx/LH8lw+wCRW+LjAPIAGRACIjD4Qm7jAPhG8nPR+ADbPPIACRIEku1E0NdJwgGPvnDtRND0BXEhgED0D46BiN9yIoBA9A+OgYjfcyOAQPQOb5GT1wsB3on4bfhs+Gv4aoBA9A7yvdcL//hicPhj4w0dHQoaAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBE4ggghEAlK64wIgghASQ+lRuuMCIIIQEz5wh7rjAiCCEEadYym64wIPDg0MA3Iw+Eby4Ez4Qm7jANMB0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TGnWMps7NyXD7AJEw4uMA8gAaGBADdjD4RvLgTPhCbuMA0x/TH9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkkz5wh7Ozclw+wCRMOLjAPIAGhYQAyQw+Eby4Ez4Qm7jANHbPNs88gAaHRIDbjD4RvLgTPhCbuMA0x/TH9HbPCGOGyPQ0wH6QDAxyM+HIM6CEIBEAlLPC4HMyXD7AJEw4uMA8gAaFxAAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAxz4RvLgTPhCbuMA2zzbPBoTEgA2+E34TPhL+Er4Q/hCyMv/yz/Pg8zMywHOye1UA6Ropv5gghA7msoAuY4Q+EnIz4WIzoBvz0DJgED7AODbPCGmPLUf+CO8IfgjubGOEfhJyM+FiM6Ab89AyYBA+wBb4IIQBfXhAHL7AlzbPPhNIccFGRYUAtCPPV8i2zwg+QDIz4oAQMv/ydBmyM+FiM6CgCAvrwgAAAAAAAAAAAAAAAAAA88LjiHbPMzPkNFqvn/JcPsA+G3faKb+YPhJ+ExVAsjPhYjOcc8LblUgyM+Q0xvamssBzst/zcmDBvsAWxcVADTQ0gABk9IEMd7SAAGT0gEx3vQE9AT0BNFfAwEa2zz5AMjPigBAy//J0BcClPhCyMv/cG2AQPRDWMjLH3JYgED0QwHIyx9zWIBA9EP4S3FYgED0F3HbPHRYgED0FnLbPHVYgED0Fsj0AMn4SsjPhID0APQAz4HJGBgAgvhCyMv/cG2AQPRD+EpxWIBA9Bf4S3JYgED0FwHIywFzWIBA9EPI9ADJ+CrIz4SA9AD0AM+ByfkAyM+KAEDL/8nQACKBAWj4IyGpBCGotR8gWKC1HwA67UTQ0//TP9MAMdTU0wH6QNH4bfhs+Gv4avhj+GICEPSkIPS98sBOHRwAFHNvbCAwLjcxLjAAAA==",
    codeHash: "99d6179715b432b759f4af23b9c9e5ae958e665148a1cb61b7d300e5acf69614",
};
export default RDContract;