const fs = require("fs");

const lines = fs
    .readFileSync("copy3.txt", { encoding: "utf-8" })
    .split("\n")
    .filter((x) => Boolean(x));
const length = lines[0].length; //length is the # of digits

function getCount(lines) {
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

 return { zeros, ones };
}

function partone() {
    const {zeros, ones } = getCount(lines);
    let gammaRate = ""; // Most common bit
    let epsilonRate = ""; // Least common bit




    for (let i = 0; i < length; i++) {
        let bit = 0;
        if(ones[i] > zeros[i]){
            bit = 1;
        }
        if (ones[i] == zeros[i]) {
            gammaRate +=1;
            epsilonRate += 0;
        } else {
            gammaRate += bit;
            epsilonRate += bit == 1 ? 0 : 1;
        }
    }

    // console.log(zeros, ones);
    // console.log(parseInt(gammaRate, 2));

    console.log(parseInt(gammaRate, 2) * parseInt(epsilonRate, 2));
}
partone();
//life support rating = oxygen generator rating 8 co2 scrubber rating
//  oxygen generator rating => most common value
// CO2 scrubber rating => least common

function getOxygenRating(lines, index = 0) {
    const {zeros, ones } = getCount(lines);
    console.log("getOxygenRating", lines, index, gammaRate[index]);
    const filtered = lines.filter((line) => line[index] == gammaRate[index]);
    if(filtered.length == 1) {
        return filtered[0];
    }
    return getOxygenRating(filtered, index + 1);
  
}

function getCO2Rating(lines, index = 0) {
    const {zeros, ones } = getCount(lines);
    console.log("getCO2Rating", lines, index, epsilonRate[index]);
    const filtered = lines.filter((line) => line[index] == epsilonRate[index]);
    if(filtered.length == 1) {
        return filtered[0];
    }
    return getCO2Rating(filtered, index + 1);
  
}

function parttwo() {

    const oxygenRating = getOxygenRating(lines);
    const CO2Rating = getCO2Rating(lines);

    // console.log(oxygenRating);
    // console.log(CO2Rating);

    console.log(parseInt(oxygenRating, 2) * parseInt(CO2Rating, 2));
} 

//parttwo();