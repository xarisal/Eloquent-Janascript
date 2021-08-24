
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

/*
let day1 = {
    squirrel : false,
    events : ["work", "touched tree", "pizza", "running"],
    "i wolf" : "I am wolf"
};

let journal = [];

function addEntry(events, squirrel){
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "TV"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);
*/

// Math function to calculate correlation
function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
      Math.sqrt((table[2] + table[3]) *
                (table[0] + table[1]) *
                (table[1] + table[3]) *
                (table[0] + table[2]));
  }

// Journal entries with addEntry function
  var JOURNAL = [
    {"events":["carrot","exercise","weekend"],"squirrel":false},
    {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
    {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
    {"events":["brushed teeth","computer","work"],"squirrel":false},
    {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["cauliflower","reading","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
    {"events":["spaghetti","nachos","work"],"squirrel":false},
    {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
    {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
    {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
    {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["pizza","ice cream","computer","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work"],"squirrel":false},
    {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
    {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
    {"events":["potatoes","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","work"],"squirrel":false},
    {"events":["pizza","beer","work","dentist"],"squirrel":false},
    {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
    {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
    {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
    {"events":["lasagna","peanuts","work"],"squirrel":true},
    {"events":["pizza","work"],"squirrel":false},
    {"events":["potatoes","exercise","work"],"squirrel":false},
    {"events":["brushed teeth","exercise","work"],"squirrel":false},
    {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
    {"events":["pizza","cycling","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
    {"events":["pizza","peanuts","candy","work"],"squirrel":true},
    {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
    {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
    {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
    {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
    {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","candy","work"],"squirrel":false},
    {"events":["potatoes","nachos","work"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
    {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
    {"events":["brussel sprouts","running","work"],"squirrel":false},
    {"events":["brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
    {"events":["candy","brushed teeth","work"],"squirrel":false},
    {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
    {"events":["bread","brushed teeth","weekend"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
    {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
    {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","work"],"squirrel":false},
    {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
    {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
    {"events":["brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
    {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
    {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
    {"events":["carrot","reading","weekend"],"squirrel":false},
    {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
    {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
    {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
    {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
    {"events":["lettuce","brushed teeth","work"],"squirrel":false},
    {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
    {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
  ];

// Table preparation to feed to phi()
  function tableFor(event, journal){
    let table = [0, 0, 0, 0];
    for (let i =0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index +=1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

// Create array with different event entries
function journalEvents(journal) {
   let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

/*
for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}
*/

let testArray =[];
function testEntry(eventss, wolfy) {
    testArray.push({eventss, wolfy});
}

testEntry(["work", "food", "sleep", "full moon"], true);
testEntry(["day off", "weed","java", "netflix"], false);
testEntry(["work", "food"], false);
testEntry(["day off", "suicide"], false);
testEntry(["full moon"], true);
console.log(testArray);

let eventList =[];
function testEvents(entriez){
    for (let entree of entriez) {
        for (let eVent of entree.eventss) {
            if (!eventList.includes(eVent))
            eventList.push(eVent);
        }
    }
    return eventList;
}

testEvents(testArray);
console.log(eventList);