//anonymous
window.onload = function(){
    var btn = document.getElementById("btnAdd");
    btn.onclick = AddToDo;

    };
    
function AddToDo(){
    var myinput = document.getElementById("myinput").value;
    var tdos = document.getElementById("tdos");
    var newtextnode = document.createTextNode(myinput);
    var newLi = document.createElement("li");
    newLi.appendChild(newtextnode);
    tdos.appendChild(newLi);
}
 function handledelete(e){
    var tag=e.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);
 
 }