//await $`cp ../../config.ts ./config.js`
const RD1Address = '7b0f215daae4b78b9a53dc87231a35c793401ed1e9bbcf7d87795154421ed818'
const RD2Address = '2f3e00e18572d57700e42a5b2f8f80ed4a1d894630ef78c2a4e89af2740ffa7e'
const round = 'd2ae7ddcc5e5a5de510d4b13edad07061e7d4259e35bfe3d5cb78e0190b7855b'

const log = [];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

await $`everdev network default se`

await $`everdev sol compile simpleSender.sol`

for (let i = 0; i < 15; i++) {
    const simpleSender = (await $`everdev c d simpleSender.sol -d nonce:${Math.round(Math.random() * 1e10)} -v 1e12`).stdout
    const addr = simpleSender.match(/(-1|0):[0-9a-f]{64}/)[0]
    const side = Math.floor(Math.random() * 2)+1
    const betValue = Math.round(Math.random() * 100) * 1e9;
    //const betValue = 1e9;
    const sideAddr = side == 1 ? RD1Address : RD2Address
    await $`everdev c r simpleSender.abi.json send -i amount:${betValue},addr:${sideAddr}  -a ${addr}`
    
    log.push({
        value: betValue,
        side: side,
        addr: addr
    })
    await sleep(Math.round(Math.random() * 2000));
}

await sleep(60 * 6 * 1000);
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





