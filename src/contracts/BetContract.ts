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
    tvc: "te6ccgECJQEABTwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsiBQQkA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwODQYDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8ISEGAzwgghAyP8hdu+MCIIIQaLVfP7vjAiCCEHs7Jiq74wIZCwcDPCCCEG9lO8e64wIgghB6MIwluuMCIIIQezsmKrrjAgoJCAFQMNHbPPhMIY4cjQRwAAAAAAAAAAAAAAAAPs7JiqDIzssfyXD7AN7yACABUDDR2zz4SiGOHI0EcAAAAAAAAAAAAAAAAD6MIwlgyM7Lf8lw+wDe8gAgAU4w0ds8+E8hjhuNBHAAAAAAAAAAAAAAAAA72U7x4MjOzslw+wDe8gAgBFAgghAztwKruuMCIIIQQsUwcLrjAiCCEFq+2am64wIgghBotV8/uuMCFRAPDAIiMPhCbuMA+Ebyc9H4ANs88gANFgPO7UTQ10nCAY9ccO1E0PQFcCBxI4BA9A5vkZPXCx/eciSAQPQOb5GT1wsf3nMlgED0Do6Bid90JoBA9A6OgYnfcPhw+G/4bvht+Gz4a/hqgED0DvK91wv/+GJw+GNw+Gpw+Gtw+HDjDQ4OIABDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAFQMNHbPPhLIY4cjQRwAAAAAAAAAAAAAAAANq+2amDIzst/yXD7AN7yACADJDD4RvLgTPhCbuMA0ds82zzyACARFgPAiGim/mCCEAX14QC+8uhliPgj+E288uhmiPhQcLry6Gd/+HD4S/hK+E74T3/Iz4WAygDPhEDOgoAgL68IAAAAAAAAAAAAAAAAAAHPC45VIMjPkKO9+tLOy3/Lf83Jc/sAFBMSAD5SZXdhcmQgaGFzIGJlZW4gYWxyZWFkeSBjbGFpbWVkACJUb28gZWFybHkgcmVxdWVzdAAqU21hbGwgYXR0YWNoZWQgYW1vdW50Ayww+Eby4Ez4Qm7jANN/0wHR2zzbPPIAIBcWAF74UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dy3/Lf8sfyx9VIMjOWcjOygDNzcntVAFMiPhJ+E/HBfLoZPgAIMABmPhKIqC1f/hq3sACmPhLIaC1f/hr3jAYABhXcm9uZyBzZW5kZXIEUCCCEBUCLEG64wIgghAjUXC3uuMCIIIQMZDNzLrjAiCCEDI/yF264wIdHBsaAVAw0ds8+E0hjhyNBHAAAAAAAAAAAAAAAAAsj/IXYMjOyx/JcPsA3vIAIAFQMNHbPPhQIY4cjQRwAAAAAAAAAAAAAAAALGQzcyDIzsoAyXD7AN7yACABTjDR2zz4TiGOG40EcAAAAAAAAAAAAAAAACjUXC3gyM7OyXD7AN7yACADhDD4RvLgTPhCbuMA0ds8JY4pJ9DTAfpAMDHIz4cgznHPC2FeQMjPklQIsQbLf8t/ygDLH8sfzclw+wCSXwXi4wDyACAfHgAo7UTQ0//TPzH4Q1jIy//LP87J7VQAFPhK+Ev4UPhM+E0AYu1E0NP/0z/TADHTf9N/0x/TH9TR0PpA1NHQ+kDSANH4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAhD0pCD0vfLATiQjABRzb2wgMC43MS4wAAA=",
    code: "te6ccgECIgEABQ8ABCSK7VMg4wMgwP/jAiDA/uMC8gsfAgEhA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwLCgMDUu1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPI8Hh4DAzwgghAyP8hdu+MCIIIQaLVfP7vjAiCCEHs7Jiq74wIWCAQDPCCCEG9lO8e64wIgghB6MIwluuMCIIIQezsmKrrjAgcGBQFQMNHbPPhMIY4cjQRwAAAAAAAAAAAAAAAAPs7JiqDIzssfyXD7AN7yAB0BUDDR2zz4SiGOHI0EcAAAAAAAAAAAAAAAAD6MIwlgyM7Lf8lw+wDe8gAdAU4w0ds8+E8hjhuNBHAAAAAAAAAAAAAAAAA72U7x4MjOzslw+wDe8gAdBFAgghAztwKruuMCIIIQQsUwcLrjAiCCEFq+2am64wIgghBotV8/uuMCEg0MCQIiMPhCbuMA+Ebyc9H4ANs88gAKEwPO7UTQ10nCAY9ccO1E0PQFcCBxI4BA9A5vkZPXCx/eciSAQPQOb5GT1wsf3nMlgED0Do6Bid90JoBA9A6OgYnfcPhw+G/4bvht+Gz4a/hqgED0DvK91wv/+GJw+GNw+Gpw+Gtw+HDjDQsLHQBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAFQMNHbPPhLIY4cjQRwAAAAAAAAAAAAAAAANq+2amDIzst/yXD7AN7yAB0DJDD4RvLgTPhCbuMA0ds82zzyAB0OEwPAiGim/mCCEAX14QC+8uhliPgj+E288uhmiPhQcLry6Gd/+HD4S/hK+E74T3/Iz4WAygDPhEDOgoAgL68IAAAAAAAAAAAAAAAAAAHPC45VIMjPkKO9+tLOy3/Lf83Jc/sAERAPAD5SZXdhcmQgaGFzIGJlZW4gYWxyZWFkeSBjbGFpbWVkACJUb28gZWFybHkgcmVxdWVzdAAqU21hbGwgYXR0YWNoZWQgYW1vdW50Ayww+Eby4Ez4Qm7jANN/0wHR2zzbPPIAHRQTAF74UPhP+E74TfhM+Ev4SvhD+ELIy//LP8+Dy3/Lf8sfyx9VIMjOWcjOygDNzcntVAFMiPhJ+E/HBfLoZPgAIMABmPhKIqC1f/hq3sACmPhLIaC1f/hr3jAVABhXcm9uZyBzZW5kZXIEUCCCEBUCLEG64wIgghAjUXC3uuMCIIIQMZDNzLrjAiCCEDI/yF264wIaGRgXAVAw0ds8+E0hjhyNBHAAAAAAAAAAAAAAAAAsj/IXYMjOyx/JcPsA3vIAHQFQMNHbPPhQIY4cjQRwAAAAAAAAAAAAAAAALGQzcyDIzsoAyXD7AN7yAB0BTjDR2zz4TiGOG40EcAAAAAAAAAAAAAAAACjUXC3gyM7OyXD7AN7yAB0DhDD4RvLgTPhCbuMA0ds8JY4pJ9DTAfpAMDHIz4cgznHPC2FeQMjPklQIsQbLf8t/ygDLH8sfzclw+wCSXwXi4wDyAB0cGwAo7UTQ0//TPzH4Q1jIy//LP87J7VQAFPhK+Ev4UPhM+E0AYu1E0NP/0z/TADHTf9N/0x/TH9TR0PpA1NHQ+kDSANH4cPhv+G74bfhs+Gv4avhj+GIACvhG8uBMAhD0pCD0vfLATiEgABRzb2wgMC43MS4wAAA=",
    codeHash: "6f077088978e7b8ca29e09b0e7d2dd740bddcede6f20d0f21a53062de4a28313",
};
export default BetContract;