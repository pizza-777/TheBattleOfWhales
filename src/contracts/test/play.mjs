await $`cp ../../config.ts ./config.js`
const RD1Address = '8509b39729ddb327775c8f69232cb67a28e9f93cacc9fe70d3a0a9f11614f44c'
const RD2Address = '7401fae0e6662cb38309704e517a0b029eee9ef7b6e5a0afb8d302aa7449f17a'
const round = '612e40ac191ff4d19379aabebb8e8470cbfb27593571f273a10ddd87151112b0'

const log = [];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

await $`everdev network default se`

await $`everdev sol compile simpleSender.sol`

for (let i = 0; i < 5; i++) {
    const simpleSender = (await $`everdev c d simpleSender.sol -d nonce:${Math.round(Math.random() * 1e10)} -v 1e12`).stdout
    const addr = simpleSender.match(/(-1|0):[0-9a-f]{64}/)[0]
    const betValue = Math.round(Math.random() * 100) * 1e9;
    const side = Math.floor(Math.random() * 2)+1
    const sideAddr = side == 1 ? RD1Address : RD2Address
    await $`everdev c r simpleSender.abi.json send -i amount:${betValue},addr:${sideAddr}  -a ${addr}`
    
    log.push({
        value: betValue,
        side: side,
        addr: addr
    })
    await sleep(Math.round(Math.random() * 10000));
}

//await sleep(60 * 6 * 1000);
let side1Value = 0;
let side2Value = 0;
log.map(e => {
    if (e.side == 1) side1Value += e.value;
     else side2Value += e.value;
})
const win = side1Value > side2Value ? 1 : 2
for (let i = 0; i < log.length; i++){
    let e = log[i]
    if (e.side == win) {
        await $`everdev c r simpleSender.abi.json send -i amount:100000000,addr:${round} -a ${e.addr}`
    }
}

//console.log(log)





