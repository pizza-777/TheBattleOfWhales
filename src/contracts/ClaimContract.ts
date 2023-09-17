const ClaimContract = {
    abi: {
        "ABI version": 2,
        "version": "2.3",
        "header": [
            "time"
        ],
        "functions": [
            {
                "name": "claim1",
                "inputs": [],
                "outputs": []
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
            }
        ]
    },
    tvc: "te6ccgECGQEAA20AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsWBQQYAtztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4UgwjXGCD4KMjOzsn5AFj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAgGAmTtRNDXScMB+GYi0NMD+kAw+GmpOADcIccAIJ8wIdcNH/K8IcAAIJJsId7f4wIB2zzyPBAGAiggghBipt/7u+MCIIIQaLVfP7rjAgkHAiIw+EJu4wD4RvJz0fgA2zzyAAgRAkTtRNDXScIBjpdw7UTQ9AWI+GqAQPQO8r3XC//4YnD4Y+MNGBUEUCCCEAQQh5q64wIgghAFhkF4uuMCIIIQXZuDEbrjAiCCEGKm3/u64wIPDAsKA34w+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tipt/7s7NyXD7AJEw4uMA8gAVExEDJDD4RvLgTPhCbuMA0ds84wDyABUSEQN+MPhG8uBM+EJu4wAhk9TR0N76QNHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkhYZBeLOzclw+wCRMOLjAPIAFQ0RAnLbPCD5AMjPigBAy//J0GbIz4WIzoKAIC+vCAAAAAAAAAAAAAAAAAADzwuOIds8zM+Q0Wq+f8lw+wAUDgA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMDdjD4RvLgTPhCbuMAIZPU0dDe+kDR2zwhjhsj0NMB+kAwMcjPhyDOghCEEIeazwuBzMlw+wCRMOLjAPIAFRQRA2b4RvLgTPhCbuMAggiYloBy+wJopv5gghAF9eEAvo4Q+EnIz4WIzoBvz0DJgwb7AOMN2zwVEhEAIvhK+EP4QsjL/8s/z4PMye1UAS74Sds8yM+FiM6CEFnVUeDPC47Jgwb7ABMBGts8+QDIz4oAQMv/ydAUAET4QsjL/3BtgED0Q3EBgED0Fsj0AMn4SsjPhID0APQAz4HJACTtRNDT/9M/0wAx1NH4avhj+GICEPSkIPS98sBOGBcAFHNvbCAwLjcxLjAAAA==",
    code: "te6ccgECFgEAA0AABCSK7VMg4wMgwP/jAiDA/uMC8gsTAgEVAtztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4UgwjXGCD4KMjOzsn5AFj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B2zzyPAUDAmTtRNDXScMB+GYi0NMD+kAw+GmpOADcIccAIJ8wIdcNH/K8IcAAIJJsId7f4wIB2zzyPA0DAiggghBipt/7u+MCIIIQaLVfP7rjAgYEAiIw+EJu4wD4RvJz0fgA2zzyAAUOAkTtRNDXScIBjpdw7UTQ9AWI+GqAQPQO8r3XC//4YnD4Y+MNFRIEUCCCEAQQh5q64wIgghAFhkF4uuMCIIIQXZuDEbrjAiCCEGKm3/u64wIMCQgHA34w+Eby4Ez4Qm7jACGT1NHQ3vpA0ds8IY4fI9DTAfpAMDHIz4cgznHPC2EByM+Tipt/7s7NyXD7AJEw4uMA8gASEA4DJDD4RvLgTPhCbuMA0ds84wDyABIPDgN+MPhG8uBM+EJu4wAhk9TR0N76QNHbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkhYZBeLOzclw+wCRMOLjAPIAEgoOAnLbPCD5AMjPigBAy//J0GbIz4WIzoKAIC+vCAAAAAAAAAAAAAAAAAADzwuOIds8zM+Q0Wq+f8lw+wARCwA00NIAAZPSBDHe0gABk9IBMd70BPQE9ATRXwMDdjD4RvLgTPhCbuMAIZPU0dDe+kDR2zwhjhsj0NMB+kAwMcjPhyDOghCEEIeazwuBzMlw+wCRMOLjAPIAEhEOA2b4RvLgTPhCbuMAggiYloBy+wJopv5gghAF9eEAvo4Q+EnIz4WIzoBvz0DJgwb7AOMN2zwSDw4AIvhK+EP4QsjL/8s/z4PMye1UAS74Sds8yM+FiM6CEFnVUeDPC47Jgwb7ABABGts8+QDIz4oAQMv/ydARAET4QsjL/3BtgED0Q3EBgED0Fsj0AMn4SsjPhID0APQAz4HJACTtRNDT/9M/0wAx1NH4avhj+GICEPSkIPS98sBOFRQAFHNvbCAwLjcxLjAAAA==",
    codeHash: "c4b0d7b0fae6df6fdcda6cee826e5a695a68b5a2256dd9ca7d740d1152b3a7a5",
};
export default ClaimContract;