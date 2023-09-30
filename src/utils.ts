export function calcUserReward(userSide1: number, userSide2: number, totalSide1: number, totalSide2: number) {   
    if (totalSide1 > totalSide2) {
        return userSide1 + (userSide1 / totalSide1) * totalSide2;
    }

    if (totalSide2 > totalSide1) {
        return userSide2 + (userSide2 / totalSide2) * totalSide1;
    }
    return userSide1 + userSide2;
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

export function isMobile() {
    if (screen.width <= 760) {
        return true
    } else {
        return false
    }
}
// console.log(calcUserReward(1,1, 100,50)) //1.5
// console.log(calcUserReward(1,2, 100,50)) //1.5
// console.log(calcUserReward(2,1, 100,50)) //3
// console.log(calcUserReward(2,1, 100,100)) //3
 //console.log(calcUserReward(0,10, 101,100)) //0