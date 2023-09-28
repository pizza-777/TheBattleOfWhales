
import { network } from './config'

const walletConnectionList = {
        local: 'local',       
        testnet: {
            id: 1,
            type: 'graphql',
            data: {
                endpoints: ['https://devnet.evercloud.dev/89dc20fb2e0946498a28eb021db8c861/graphql'],
            }
        },
        mainnet: {
            id: 1,
            type: 'graphql',
            data: {
                endpoints: ['https://mainnet.evercloud.dev/89dc20fb2e0946498a28eb021db8c861/graphql'],
            }
        }
}
export const walletConnection = () => {
    switch (network) {
        case ('testnet'): {
            return walletConnectionList.testnet
        }
        case ('mainnet'): {
            return walletConnectionList.mainnet
        }
        default: return 'local'
    }
}

export const explorer = () =>{
    switch(network){        
        case('testnet'): 
            return 'https://net.ever.live'        
        case('mainnet'):
            return 'https://ever.live'
     
        default:
            return 'http://localhost'
      
    }
}

export const sdk = ()=> {
    switch(network){        
        case('testnet'):{
            return 'https://devnet.evercloud.dev/89dc20fb2e0946498a28eb021db8c861/graphql'
        }
        case('mainnet'):{
            return 'https://mainnet.evercloud.dev/89dc20fb2e0946498a28eb021db8c861/graphql'
        }
        default: {
           return 'http://127.0.0.1/graphql'
        }
    }
}

