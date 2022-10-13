var count=3;
var showinglikes=document.querySelector("h3")

function add1(){
    count++;
    console.log(count);
    console.log(showinglikes)
    showinglikes.innerText=count+" like(s)"
}
