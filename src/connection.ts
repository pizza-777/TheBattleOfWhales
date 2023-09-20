import { ConnectionProperties } from "everscale-standalone-client";

export const connection = {
    local: 'local' as ConnectionProperties,
    mainnet: 'mainnetJrpc' as ConnectionProperties,
    testnet: {
        id: 1,
        type: 'graphql',
        data: {
            endpoints: ['https://devnet.evercloud.dev/89dc20fb2e0946498a28eb021db8c861/graphql'],
        }
    } as ConnectionProperties
}