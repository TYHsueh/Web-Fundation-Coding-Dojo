var countelement=document.querySelector("#count")
console.log(countelement);

var count=1
function add(){
    count=count+1;
    console.log(count)
    countelement.innerText='The count is '+count;
}

function minus(){
    count=count-1;
    console.log(count);
    countelement.innerText='The count is '+count;
}