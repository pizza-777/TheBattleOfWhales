import { TonClient } from '@eversdk/core'
import { libWeb } from '@eversdk/lib-web'
import RoundContract from './contracts/RoundContract'

// Application initialization
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
TonClient.useBinaryLibrary(libWeb)

const client = new TonClient({
  network: {
    endpoints: ['http://127.0.0.1/graphql'],
  },
})

export async function checkAccTypeName(addr: string) {
  try {
    const response = (
      await client.net.query({
        query: `{
        accounts(
          filter: {
            id: {
              eq: ${addr}
            } 
          }
        ) {
            acc_type_name
        }
      }`,
      })
    ).result.data.accounts   
    if (response.length == 0) {
      return 'NonExist'
    }
    return response[0].acc_type_name
  } catch (e) {
    console.log(e)
  }
}

export async function getRounds() {  
  try {
    const query = `{
      accounts(
        filter: {
          code_hash: {
            eq: "${RoundContract.codeHash}"
          }       
        }  
        orderBy:{path:"last_trans_lt", direction:DESC}
      ) {          
          id           
        }
    }`
    const response: Array<{      
        id: string      
    }> = (
      await client.net.query({
        query,
      })
      ).result.data.accounts
    return response
  } catch (e) {
    console.log(e)
  }
}

