console.log("still loading...");

var request=[
    document.querySelector("#todd"),
    document.querySelector("#phil")
];
var requestnum=2
var connectionnum=418

function reject0(){
    request[0].remove();
    requestnum--;
    console.log(requestnum);
    document.querySelector("#request").innerText=requestnum;
}

function reject1(){
    request[1].remove();
    requestnum--;
    console.log(requestnum);
    document.querySelector("#request").innerText=requestnum;
}

function accept0(){
    request[0].remove();
    requestnum--;
    document.querySelector("#request").innerText=requestnum;
    connectionnum++;
    console.log(connectionnum);
    document.querySelector("#connection").innerText=connectionnum;
}

function accept1(){
    request[1].remove();
    requestnum--;
    document.querySelector("#request").innerText=requestnum;
    connectionnum++;
    document.querySelector("#connection").innerText=connectionnum;
}

function changename(){
    document.querySelector("#janedoe").innerText="Ninja Doe"
}