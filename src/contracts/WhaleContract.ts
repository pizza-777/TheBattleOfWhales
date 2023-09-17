const WhaleContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "updTotal",
                "inputs": [
                    {
                        "name": "_total",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "updClaimed",
                "inputs": [
                    {
                        "name": "_claimed",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "claim2",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "addr",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addr",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "whalePoolAddr",
                "inputs": [],
                "outputs": [
                    {
                        "name": "whalePoolAddr",
                        "type": "address"
                    }
                ]
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
            },
            {
                "name": "claimed",
                "inputs": [],
                "outputs": [
                    {
                        "name": "claimed",
                        "type": "uint128"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "addr",
                "type": "address"
            },
            {
                "key": 2,
                "name": "whalePoolAddr",
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
                "name": "addr",
                "type": "address"
            },
            {
                "name": "whalePoolAddr",
                "type": "address"
            },
            {
                "name": "total",
                "type": "uint128"
            },
            {
                "name": "claimed",
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECHQEAA2EAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsaBQQcApDtRNDXScMB+GYh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwKBgNK7UTQ10nDAfhmItDXCwOpOADcIccA4wIh1w0f8rwh4wMB2zzyPBkZBgIoIIIQTcrPa7vjAiCCEGw8OZS74wIRBwRQIIIQT7uB8brjAiCCEFnVUeC64wIgghBotV8/uuMCIIIQbDw5lLrjAg8MCQgBUDDR2zz4TSGOHI0EcAAAAAAAAAAAAAAAADsPDmUgyM7Lf8lw+wDe8gAYAiIw+EJu4wD4RvJz0fgA2zzyAAoUA4btRNDXScIBjzhw7UTQ9AVxIYBA9A6OgYnfciKAQPQOjoGJ33Ag+G34bPhr+GqAQPQO8r3XC//4YnD4Y3D4bHD4beMNCwsYAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAyQw+Eby4Ez4Qm7jANHbPOMA8gAYDg0AKO1E0NP/0z8x+ENYyMv/yz/Oye1UAFqCCJiWgHL7AvhN+Ez4SvhLyM+FiM5xzwtuVSDIz5E3WOD2zst/y3/NyYMG+wADKDD4RvLgTPhCbuMA03/R2zzbPPIAGBAUAA74TaC1f/htBFAgghAjj+uOuuMCIIIQPiSfDrrjAiCCEEWhAL664wIgghBNys9ruuMCFxYTEgFOMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAM3Kz2uDIzs7JcPsA3vIAGAMoMPhG8uBM+EJu4wDTf9HbPNs88gAYFRQAQPhN+Ez4S/hK+EP4QsjL/8s/z4POVSDIzst/y3/Nye1UAA74TKC1f/hsAU4w0ds8+EohjhuNBHAAAAAAAAAAAAAAAAAviSfDoMjOzslw+wDe8gAYAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAAo4/rjoMjOy3/JcPsA3vIAGABE7UTQ0//TP9MAMfpA1NHQ+kDTf9N/0fht+Gz4a/hq+GP4YgAK+Eby4EwCEPSkIPS98sBOHBsAFHNvbCAwLjcxLjAAAA==",
    code: "te6ccgECGgEAAzQABCSK7VMg4wMgwP/jAiDA/uMC8gsXAgEZApDtRNDXScMB+GYh2zzTAAGOFIMI1xgg+CjIzs7J+QBY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAds88jwHAwNK7UTQ10nDAfhmItDXCwOpOADcIccA4wIh1w0f8rwh4wMB2zzyPBYWAwIoIIIQTcrPa7vjAiCCEGw8OZS74wIOBARQIIIQT7uB8brjAiCCEFnVUeC64wIgghBotV8/uuMCIIIQbDw5lLrjAgwJBgUBUDDR2zz4TSGOHI0EcAAAAAAAAAAAAAAAADsPDmUgyM7Lf8lw+wDe8gAVAiIw+EJu4wD4RvJz0fgA2zzyAAcRA4btRNDXScIBjzhw7UTQ9AVxIYBA9A6OgYnfciKAQPQOjoGJ33Ag+G34bPhr+GqAQPQO8r3XC//4YnD4Y3D4bHD4beMNCAgVAEOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAyQw+Eby4Ez4Qm7jANHbPOMA8gAVCwoAKO1E0NP/0z8x+ENYyMv/yz/Oye1UAFqCCJiWgHL7AvhN+Ez4SvhLyM+FiM5xzwtuVSDIz5E3WOD2zst/y3/NyYMG+wADKDD4RvLgTPhCbuMA03/R2zzbPPIAFQ0RAA74TaC1f/htBFAgghAjj+uOuuMCIIIQPiSfDrrjAiCCEEWhAL664wIgghBNys9ruuMCFBMQDwFOMNHbPPhLIY4bjQRwAAAAAAAAAAAAAAAAM3Kz2uDIzs7JcPsA3vIAFQMoMPhG8uBM+EJu4wDTf9HbPNs88gAVEhEAQPhN+Ez4S/hK+EP4QsjL/8s/z4POVSDIzst/y3/Nye1UAA74TKC1f/hsAU4w0ds8+EohjhuNBHAAAAAAAAAAAAAAAAAviSfDoMjOzslw+wDe8gAVAVAw0ds8+EwhjhyNBHAAAAAAAAAAAAAAAAAo4/rjoMjOy3/JcPsA3vIAFQBE7UTQ0//TP9MAMfpA1NHQ+kDTf9N/0fht+Gz4a/hq+GP4YgAK+Eby4EwCEPSkIPS98sBOGRgAFHNvbCAwLjcxLjAAAA==",
    codeHash: "e1cc0dc0900bdc498b608068023196d38a58b873009d3af12f4f457ae708fccf",
};
export default WhaleContract;