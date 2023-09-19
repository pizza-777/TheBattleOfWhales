//await $`cp ../../config.ts ./config.js`
const RD1Address = '68886891c24507429049591b9c5704bc0387835fa10afa664dbc9ce136f83ec3'
const RD2Address = 'bb703cc161520f9c2e3378f44c47a5a5061e8e20bd1d71621c92719c1685b7cd'
const round = 'fed3b7a5869c51cc62db8e861b58b9a53dbba0b83b289add52be9b91ffb240ae'

const log = [];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

await $`everdev network default se`

await $`everdev sol compile simpleSender.sol`

for (let i = 0; i < 7; i++) {
    const simpleSender = (await $`everdev c d simpleSender.sol -d nonce:${Math.round(Math.random() * 1e10)} -v 1e12`).stdout
    const addr = simpleSender.match(/(-1|0):[0-9a-f]{64}/)[0]
    const side = Math.floor(Math.random() * 2)+1
    //const betValue = side == 1 ? Math.round(Math.random() * 100) * 1e9 : 1e9;
    const betValue = 1e9;
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





