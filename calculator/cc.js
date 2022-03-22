var i=0
var images=['alex4.jpg', 'alex3.PNG', 'alex2.PNG', 'alex6.jpg', 'alex5.jpg']
function changing(){
    document.querySelector('#john').src=images[i]
    if(i<images.length -1){
        i++
    }else{
        i=0
    }
    setTimeout('changing()', 1000)
}
window.onload = changing
 