function rangeSum(range1, range2) {
    let rangeFinal = 0;
    console.log("Adding all the numbers between",range1,"and",range2);
    while (range1<=range2){
        rangeFinal += range1;
        range1++;
    }
   return rangeFinal;
}

console.log(`Sum is: ${rangeSum(1,10)}`);

