function over(element){
    alert("mouseover");
}
function out(element){
    alert('mouseout');
}
function addshadow(element){
    element.classList.add("addshadow");
}
function noshadow(element){
    element.classList.remove("addshadow");
}
    
function colorpink(element){
    element.style.backgroundColor="pink";
}
function coloryellow(element){
    element.style.backgroundColor="yellow"
}
function chooselunch(element){
    alert("You picked "+ element.value);
}

var nametag=document.querySelector("#name-tag");

function setName(element){
    console.log(element.value);
    nametag.innerText=(element.value);
}