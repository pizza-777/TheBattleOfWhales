const WhalePoolContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "store",
                "inputs": [
                    {
                        "name": "betAmount",
                        "type": "uint128"
                    },
                    {
                        "name": "whaleAddr",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "claim3",
                "inputs": [
                    {
                        "name": "wallet",
                        "type": "address"
                    },
                    {
                        "name": "whaleTotal",
                        "type": "uint128"
                    },
                    {
                        "name": "claimed",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "calcReward",
                "inputs": [
                    {
                        "name": "whaleTotal",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "getTotal",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "deployWhaleAddrContract",
                "inputs": [
                    {
                        "name": "_addr",
                        "type": "address"
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
                "name": "caclWhaleAddrContract",
                "inputs": [
                    {
                        "name": "_addr",
                        "type": "address"
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
                "name": "whaleContractStateInit",
                "inputs": [
                    {
                        "name": "_addr",
                        "type": "address"
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
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "total",
                "inputs": [],
                "outputs": [
                    {
                        "name": "total",
                        "type": "uint128"
                    }
                ]
            }
        ],
        "data": [],
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
                "name": "whaleCode",
                "type": "cell"
            },
            {
                "name": "total",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECIwEABQwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsgBQQiAtztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4UgwjXGCD4KMjOzsn5AFj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAgGA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPB8fBgM8IIIQI4/rjrvjAiCCEGKm3/u74wIgghBotV8/uuMCFAkHAiIw+EJu4wD4RvJz0fgA2zzyAAgMAlDtRNDXScIBjp1w7UTQ9AWIcPhr+GqAQPQO8r3XC//4YnD4Y3D4a+MNIh4EUCCCEE1GW6664wIgghBN1jg9uuMCIIIQVGgonLrjAiCCEGKm3/u64wISDgsKA34w+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tipt/7s7NyXD7AJEw4uMA8gAeERwDPjD4RvLgTPhCbuMAIZXTf9TR0JLTf+L6QNHbPNs88gAeDQwAKvhL+Er4Q/hCyMv/yz/Pg8zLf8ntVAFe+EsioLV/+GvbPMjPhYjOgpgcxLQAAAAAAAAAAAAAAAAAAEWhAL7PC6bLf8lw+wAZAzww+Eby4Ez4Qm7jACGT1NHQ3vpA03/Tf9HbPOMA8gAeDxwC0iLbPIgh+EnHBfLoZvhLVQKotX/4S6kEWKG1fyCCEDuaygC5kl8D4CCCEAvrwgChtX9VAsjPhYjOAfoCgGvPQMlx+wAByM+FiM6CmBzEtAAAAAAAAAAAAAAAAAAAT7uB8c8Lpst/yXD7ABEQABpXcm9uZyBhZGRyZXNzARrbPPkAyM+KAEDL/8nQHQNsMPhG8uBM+EJu4wDTf9HbPCGOHCPQ0wH6QDAxyM+HIM6CEM1GW67PC4HLf8lw+wCRMOLjAPIAHhMcACT4S6i1f/hLqQSCEAvrwgChtX8EUCCCEAQQh5q64wIgghAFhkF4uuMCIIIQFo0EN7rjAiCCECOP64664wIbGBYVAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAAo4/rjoMjOy3/JcPsA3vIAHgNoMPhG8uBM+EJu4wDR2zwhjhwj0NMB+kAwMcjPhyDOghCWjQQ3zwuBy3/JcPsAkTDi4wDyAB4XHAAE+EsDfjD4RvLgTPhCbuMAIZPU0dDe+kDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IWGQXizs3JcPsAkTDi4wDyAB4ZHAJy2zwg+QDIz4oAQMv/ydBmyM+FiM6CgCAvrwgAAAAAAAAAAAAAAAAAA88LjiHbPMzPkNFqvn/JcPsAHRoANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DA3Yw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8IY4bI9DTAfpAMDHIz4cgzoIQhBCHms8LgczJcPsAkTDi4wDyAB4dHAAo7UTQ0//TPzH4Q1jIy//LP87J7VQARPhCyMv/cG2AQPRDcQGAQPQWyPQAyfhKyM+EgPQA9ADPgckALO1E0NP/0z/TADHU03/R+Gv4avhj+GIACvhG8uBMAhD0pCD0vfLATiIhABRzb2wgMC43MS4wAAA=",
    code: "te6ccgECIAEABN8ABCSK7VMg4wMgwP/jAiDA/uMC8gsdAgEfAtztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4UgwjXGCD4KMjOzsn5AFj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAUDA1LtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zzyPBwcAwM8IIIQI4/rjrvjAiCCEGKm3/u74wIgghBotV8/uuMCEQYEAiIw+EJu4wD4RvJz0fgA2zzyAAUJAlDtRNDXScIBjp1w7UTQ9AWIcPhr+GqAQPQO8r3XC//4YnD4Y3D4a+MNHxsEUCCCEE1GW6664wIgghBN1jg9uuMCIIIQVGgonLrjAiCCEGKm3/u64wIPCwgHA34w+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tipt/7s7NyXD7AJEw4uMA8gAbDhkDPjD4RvLgTPhCbuMAIZXTf9TR0JLTf+L6QNHbPNs88gAbCgkAKvhL+Er4Q/hCyMv/yz/Pg8zLf8ntVAFe+EsioLV/+GvbPMjPhYjOgpgcxLQAAAAAAAAAAAAAAAAAAEWhAL7PC6bLf8lw+wAWAzww+Eby4Ez4Qm7jACGT1NHQ3vpA03/Tf9HbPOMA8gAbDBkC0iLbPIgh+EnHBfLoZvhLVQKotX/4S6kEWKG1fyCCEDuaygC5kl8D4CCCEAvrwgChtX9VAsjPhYjOAfoCgGvPQMlx+wAByM+FiM6CmBzEtAAAAAAAAAAAAAAAAAAAT7uB8c8Lpst/yXD7AA4NABpXcm9uZyBhZGRyZXNzARrbPPkAyM+KAEDL/8nQGgNsMPhG8uBM+EJu4wDTf9HbPCGOHCPQ0wH6QDAxyM+HIM6CEM1GW67PC4HLf8lw+wCRMOLjAPIAGxAZACT4S6i1f/hLqQSCEAvrwgChtX8EUCCCEAQQh5q64wIgghAFhkF4uuMCIIIQFo0EN7rjAiCCECOP64664wIYFRMSAVAw0ds8+EshjhyNBHAAAAAAAAAAAAAAAAAo4/rjoMjOy3/JcPsA3vIAGwNoMPhG8uBM+EJu4wDR2zwhjhwj0NMB+kAwMcjPhyDOghCWjQQ3zwuBy3/JcPsAkTDi4wDyABsUGQAE+EsDfjD4RvLgTPhCbuMAIZPU0dDe+kDR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5IWGQXizs3JcPsAkTDi4wDyABsWGQJy2zwg+QDIz4oAQMv/ydBmyM+FiM6CgCAvrwgAAAAAAAAAAAAAAAAAA88LjiHbPMzPkNFqvn/JcPsAGhcANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DA3Yw+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8IY4bI9DTAfpAMDHIz4cgzoIQhBCHms8LgczJcPsAkTDi4wDyABsaGQAo7UTQ0//TPzH4Q1jIy//LP87J7VQARPhCyMv/cG2AQPRDcQGAQPQWyPQAyfhKyM+EgPQA9ADPgckALO1E0NP/0z/TADHU03/R+Gv4avhj+GIACvhG8uBMAhD0pCD0vfLATh8eABRzb2wgMC43MS4wAAA=",
    codeHash: "fd1f175800d2a243c0d04b10d1d275943577c6ac397bfe9616ad7c9e49b9f9e7",
};
export default WhalePoolContract;