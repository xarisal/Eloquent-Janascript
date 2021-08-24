
function rangeSum(range1, range2) {
    let rangeFinal = 0;
    console.log("Adding all the numbers between",range1,"and",range2);
    while (range1<=range2){
        rangeFinal += range1;
        range1++;
    }
   return rangeFinal;
}

// console.log(`Sum is: ${rangeSum(1,10)}`);

function printOdds(endNum) {
    finalNum = 0;
    while (finalNum<endNum) {
        if (finalNum > 0 && finalNum < 46) {
            console.log(finalNum);
            finalNum += 2;
        }
        else{
            finalNum += 2;
        }
    }
}

//printOdds(100);

function canBeDivided(div1, div2){
    if (div1 % div2 === 0){
    console.log("Can be divided!");
    }
    else {
        console.log("Cannot be divided...");
    }
}

// canBeDivided(384,2);

function triangle(inputNumber){
    let number = 1;
    let outDash = "#"
    while (number && outDash.length <= inputNumber){
       console.log(outDash);
        number++;
        outDash = outDash + "#";
    }
}
//triangle(7);

function lateNightCode(){
    let check = 1;
while (check <= 100) {
    if (check % 3 == 0) {
        if (check %5 == 0) {
            console.log("FizzBuzz");
        }
        else {
        console.log("Fizz");
        }
    }
    else if (check % 4 == 0) {
        console.log("Buzz");
    }
    else {
    console.log(check);
    }
    check++;
}  
}

//lateNightCode();

function numPower(base, exponent){
    let result = 1;
    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    console.log(result);
}

numPower(2,9);