var firstnum;
var secondnum;
var operator;

var showresult=document.querySelector("#display");
//console.log(showresult.innerText);

function press(num) {
    //alert("pressed");
    if (operator){
        showresult.innerText=num;
        console.log(operator);
    }
    if (showresult.innerText==0){
        showresult.innerText = num;
    }
    else{
        showresult.innerText= showresult.innerText+""+num;
    }
    }
function clr(){
    if (showresult.innerText !=0){
        showresult.innerText=0;
    }
}

function setOP(op){
    firstnum =showresult.innerText;
    operator = op;
    console.log(op);
}