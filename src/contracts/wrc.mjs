const path = require('path')

//const dir = path.resolve(__dirname)
const dir = '.'

//cleanup
// await $`rm -r ${dir}/RoundContract.ts`
// await $`rm -r ${dir}/BetContract.ts`
// await $`rm -r ${dir}/RDContract.ts`

// await $`rm -r ${dir}/RoundContract.js`
// await $`rm -r ${dir}/BetContract.js`
// await $`rm -r ${dir}/RDContract.js`

// await $`rm -r ${dir}*.json`
// await $`rm -r ${dir}*.tvc`

await $`everdev sol compile ${dir}/Bet.sol`
await $`everdev sol compile ${dir}/Round.sol`
await $`everdev sol compile ${dir}/RD.sol`

await $`everdev js wrap ${dir}/Bet.sol`
await $`everdev js wrap ${dir}/Round.sol`
await $`everdev js wrap ${dir}/RD.sol`

await $`everdev js wrap ${dir}/Bet.sol -e es6-default -o BetContract.ts`
await $`everdev js wrap ${dir}/Round.sol -e es6-default -o RoundContract.ts`
await $`everdev js wrap ${dir}/RD.sol -e es6-default -o RDContract.ts`