function alwaysHungry(arr) {
    //add new var to access next one
    var foodcount=0;
    for (i=0; i<=arr.length; i++){
        if (arr[i]=="food"){
            console.log("yummy");
            foodcount++;
        }    
    }
    if (foodcount==0){
        console.log('I am hungry')
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for(i=0; i<=arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


function betterThanAverage(arr) {
    var sum = 0;
    for (i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    var avg=sum/arr.length;
    var count=0;
    console.log(avg);
    for (i=0; i<arr.length; i++){
        if (arr[i]>avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function reverse(arr) {
    var newarr=[];
    for (i=0; i<arr.length; i++){
        var temp=arr[arr.length-(i+1)];
        //console.log(temp);
        newarr.push(temp);
    }   
    //console.log(newarr);
    return newarr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(i=2; i<n; i++){
        var temp=fibArr[i-2]+fibArr[i-1];
        console.log(temp);
        fibArr.push(temp);
    }
    // your code here
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


