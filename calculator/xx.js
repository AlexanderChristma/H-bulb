var i=0
var box = document.getElementById('box')
function show(src){
    box.innerHTML= `<img src='${src}' style='height:450px;  width:100%;'>`
 

}
function changing(){
box.src=$src
if(i<src.length -1){
    i++
}else{

}
setTimeout('changing()', 900)
}
window.onload=changing
