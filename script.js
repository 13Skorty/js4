function arithmeticMean(number){
let n = [4, 9, 16, 23, 8]
let sum = 0;
for (let i = 0; i < n.length; i++){
    sum+=n[i]
}
let averge = sum / n.length;
console.log(averge)
}    
function MaxNumbers(number){
let max = n[0]
for(let i = 1; i < n.length; i++){
    if(n[i] > max){
        max = n[i]
    }
}
console.log(max)
}

const Mi = 100
const Km = convertMiToKm(Mi);
function convertMiToKm(Mi){
    const Km = Mi * 1.61;
    return Km;
}
console.log(Km)

/*const minute = 60
const second = convertMinuteToSecond(minute);
function convertMinuteToSecond(minute){
    const second = minute * 60;
    return second;
}
console.log(second)
*/