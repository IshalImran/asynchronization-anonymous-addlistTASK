console.log("starting");
function handleBindings(){
    console.log("handle binding");
}
function doBinding(){
    console.log("do binding");
    var btn = document.getElementById("btnAdd")
    btn.onclick = handleBindings;

}
window.onload =  doBinding
console.log("finished");




