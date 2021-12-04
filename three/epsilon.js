const fs = require("fs");

const lines = fs
    .readFileSync("copy3.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => Boolean(x));
const length = lines[0].length; //length is the # of digits


const zeros = Array(length).fill(0);
const ones = Array(length).fill(0);


for (const line of lines) {
    const bits = [...line];
    bits.forEach((bit, index) => {
        if (bit == "0") {
            zeros[index]++;
        } else {
            ones[index]++;
        }
    });
}

let gammaRate = "";

for (let i = 0; i < length; i++) {
    let bit = 0;
    if(ones[i] > zeros[i]){
        bit = 1;
    }
    gammaRate += bit;
}

// console.log(zeros, ones);
// console.log(parseInt(gammaRate, 2));

let epsilonRate = "";

for (let i = 0; i < length; i++) {
    let bit = 0;
    if(zeros[i] > ones[i]){
        bit = 1;
    }
    epsilonRate += bit;
}

console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));
