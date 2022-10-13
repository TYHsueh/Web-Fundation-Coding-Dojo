var like=[12, 9, 12]
var likecount=[
    document.querySelector("#count-1"),
    document.querySelector("#count-2"),
    document.querySelector("#count-3")
]

function addneil(element){
    like[0]=like[0]+1;
    console.log(like[0]);
    likecount[0].innerText=like[0]+" like(s)";
    console.log(likecount[0]);
}

function addnichole(){
    like[1]=like[1]+1;
    likecount[1].innerText=like[1]+" like(s)";
}

function addjam(){
    like[2]=like[2]+1;
    likecount[2].innerText=like[2]+ " like(s)";
}