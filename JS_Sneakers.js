var img = document.getElementById("img-slide");
var imgurl=["images/bestseller1.jpg","images/bestseller2.jpg","images/bestseller3.jpg"];   
var i=0;
var navbr =document.getElementById('navbar');
       
function imgchanger(){
    if(i==3){
        i=0;
    }
    img.src=imgurl[i];
    i++;
}  
       
function imagechange(){
    setInterval(imgchanger,3000);
} 


window.onscroll=function(){
    if (window.pageYOffset>60) {
            navbr.style.background="#365C9A";
            }
    else{
            navbr.style.background="transparent";
            }
}