
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

//numPower(2,9);


const minNum = function (a,b) {
    if (a < b){
        return a;
    }
    else {
        return b;
    }
}

// console.log(minNum(1,-10));

function isEven(a){
    if (a === 0) {
        return true;
    }
    else if (a === 1){
        return false;
    }
    else {
        if (a % 2 === 0){
            return true;
        }
        else {
            return false;
        }
    }
}

// console.log(isEven(-1));

function countBs(string){
    string = String(string);
    let counter = 0;
    let position = 0;

    while (position < string.length) {
        if (string[position] === "B") {
            counter++;
            position++;
        }
        else {
            position++;
        }
    }
    return counter;
}

// console.log(countBs("BBB"));

function countChar(string, check){
    string = String(string);
    check = String(check);
    let position = 0;
    let counter = 0;

    while (position < string.length) {
        if (string[position] === check) {
            counter++;
            position++;
        }
        else {
            position++;
        }
    }
    return counter;
}

// console.log(countChar("alex charisis", "i"));