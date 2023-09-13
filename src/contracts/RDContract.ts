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
    tvc: "te6ccgECIgEABMMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsfBQQhA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwdCwYCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8EgYCKCCCEFOdGDa74wIgghB0a6iCu+MCDAcDPCCCEGi1Xz+64wIgghBrkAeCuuMCIIIQdGuogrrjAgoJCAFQMNHbPPhMIY4cjQRwAAAAAAAAAAAAAAAAPRrqIKDIzssByXD7AN7yAB4CaDD4RvLgTNHbPCKOISTQ0wH6QDAxyM+HIM6AYs9AXgHPk65AHgrLH8sfyXD7AJFb4uMA8gAbEQIiMPhCbuMA+Ebyc9H4ANs88gALEwSS7UTQ10nCAY++cO1E0PQFcSGAQPQPjoGI33IigED0D46BiN9zI4BA9A5vkZPXCwHeifht+Gz4a/hqgED0DvK91wv/+GJw+GPjDSEhHR4ETiCCCEQCUrrjAiCCEBJD6VG64wIgghATPnCHuuMCIIIQU50YNrrjAhAPDg0DbjD4RvLgTPhCbuMA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TTnRg2s7NyXD7AJEw4ts88gAeFBMDdjD4RvLgTPhCbuMA0x/TH9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkkz5wh7Ozclw+wCRMOLjAPIAHhgRAyQw+Eby4Ez4Qm7jANHbPNs88gAeIRMDbjD4RvLgTPhCbuMA0x/TH9HbPCGOGyPQ0wH6QDAxyM+HIM6CEIBEAlLPC4HMyXD7AJEw4uMA8gAeGREAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAx74RvLgTPhCbuMA2zww2zweFBMANvhN+Ez4S/hK+EP4QsjL/8s/z4PMzMsBzsntVAQkiYhopv5gghA7msoAvvLoZNs8HRwbFQM6iCKmPLUf+CO58uhlghAF9eEAcvsCXNs8+E0hxwUaGBYC0I89XyLbPCD5AMjPigBAy//J0GbIz4WIzoKAIC+vCAAAAAAAAAAAAAAAAAADzwuOIds8zM+Q0Wq+f8lw+wD4bd9opv5g+En4TFUCyM+FiM5xzwtuVSDIz5DTG9qaywHOy3/NyYMG+wBbGRcANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DARrbPPkAyM+KAEDL/8nQGQBw+ELIy/9wbYBA9ENYyMsfcliAQPRDAcjLH3NYgED0Q/hLcViAQPQXyPQAyfhKyM+EgPQA9ADPgckAPlBhdXNlIG9uZSBtaW51dGUgYmV0d2VlbiByb3VuZHMAIoEBaPgjIakEIai1HyBYoLUfAChNaW4gYmV0IHZhbHVlIDEgZXZlcgBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAA67UTQ0//TP9MAMdTU0wH6QNH4bfhs+Gv4avhj+GICEPSkIPS98sBOISAAFHNvbCAwLjcxLjAAAA==",
    code: "te6ccgECHwEABJYABCSK7VMg4wMgwP/jAiDA/uMC8gscAgEeA5btRNDXScMB+GaJ+Gkh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwaCAMCZO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwAgnzAh1w0f8rwhwAAgkmwh3t/jAgHbPPI8DwMCKCCCEFOdGDa74wIgghB0a6iCu+MCCQQDPCCCEGi1Xz+64wIgghBrkAeCuuMCIIIQdGuogrrjAgcGBQFQMNHbPPhMIY4cjQRwAAAAAAAAAAAAAAAAPRrqIKDIzssByXD7AN7yABsCaDD4RvLgTNHbPCKOISTQ0wH6QDAxyM+HIM6AYs9AXgHPk65AHgrLH8sfyXD7AJFb4uMA8gAYDgIiMPhCbuMA+Ebyc9H4ANs88gAIEASS7UTQ10nCAY++cO1E0PQFcSGAQPQPjoGI33IigED0D46BiN9zI4BA9A5vkZPXCwHeifht+Gz4a/hqgED0DvK91wv/+GJw+GPjDR4eGhsETiCCCEQCUrrjAiCCEBJD6VG64wIgghATPnCHuuMCIIIQU50YNrrjAg0MCwoDbjD4RvLgTPhCbuMA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+TTnRg2s7NyXD7AJEw4ts88gAbERADdjD4RvLgTPhCbuMA0x/TH9HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkkz5wh7Ozclw+wCRMOLjAPIAGxUOAyQw+Eby4Ez4Qm7jANHbPNs88gAbHhADbjD4RvLgTPhCbuMA0x/TH9HbPCGOGyPQ0wH6QDAxyM+HIM6CEIBEAlLPC4HMyXD7AJEw4uMA8gAbFg4AKO1E0NP/0z8x+ENYyMv/yz/Oye1UAx74RvLgTPhCbuMA2zww2zwbERAANvhN+Ez4S/hK+EP4QsjL/8s/z4PMzMsBzsntVAQkiYhopv5gghA7msoAvvLoZNs8GhkYEgM6iCKmPLUf+CO58uhlghAF9eEAcvsCXNs8+E0hxwUXFRMC0I89XyLbPCD5AMjPigBAy//J0GbIz4WIzoKAIC+vCAAAAAAAAAAAAAAAAAADzwuOIds8zM+Q0Wq+f8lw+wD4bd9opv5g+En4TFUCyM+FiM5xzwtuVSDIz5DTG9qaywHOy3/NyYMG+wBbFhQANNDSAAGT0gQx3tIAAZPSATHe9AT0BPQE0V8DARrbPPkAyM+KAEDL/8nQFgBw+ELIy/9wbYBA9ENYyMsfcliAQPRDAcjLH3NYgED0Q/hLcViAQPQXyPQAyfhKyM+EgPQA9ADPgckAPlBhdXNlIG9uZSBtaW51dGUgYmV0d2VlbiByb3VuZHMAIoEBaPgjIakEIai1HyBYoLUfAChNaW4gYmV0IHZhbHVlIDEgZXZlcgBDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAA67UTQ0//TP9MAMdTU0wH6QNH4bfhs+Gv4avhj+GICEPSkIPS98sBOHh0AFHNvbCAwLjcxLjAAAA==",
    codeHash: "ed4aea4fc114279e1bdb2c63ba18612d614c49828f2e3598acc44ac906dc47de",
};
export default RDContract;