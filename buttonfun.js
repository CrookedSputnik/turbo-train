// JavaScript Document

var resultImage=document.getElementById("resultImage")

var button1= document.getElementById("b1")

var button2=document.getElementById("b2")

var buttons=document.querySelector("button")

var correctChoice=document.getElementById ("correct")
var incorrectChoice=document.getElementById ("incorrect")

var correctButtonSelected=false;

var correctButton= button2

var incorrectButton=button1


//button1.addEventListener ("click", function (){
	//correctButton:false;
//})

//button2.addEventListener ("click", function () {
	//correctButton:true;
//})


//buttons.addEventListener ("click", function () {
	//if(correctButtonSelected){
	//correctChoice.style.color="green";
	//correctButtonSelected=true
    //;
	//}
	
//else {incorrectChoice.style.color="red";
//correctButtonSelected=false
//};
//}
//)

button1.addEventListener ("click", function () {
	correctButtonSelected=false;
	//incorrectChoice.setsrc="src", "https://assets.parents.com/s3fs-public/styles/nfp_1080_portrait/public/101892132.jpg?AcbYuVwjibVEAacPo5LcOJf90Z7AK_WU";
	alert("Try Again?");
	resultImage.setAttribute("src", "https://png2.kisspng.com/sh/679a33beb49572025310ed57b735eb0a/L0KzQYm3UsAzN6ZBfZH0aYP2gLBuTflvbpJzjJ9sconsfri0hPlieJZ3Rdt1bIX2hMPolPlwdl5nedRELXP1ibr1h702aWg5e9MAN0O4SbK6Wb42QWI2SKY7NkG4QYi9UMM1OWY3SasBLoDxd1==/kisspng-infant-crying-diaper-illustration-baby-crying-5a74ca57359a39.5911042615176034152196.png");
	resultImage.style.opacity=100;
}
)

button2.addEventListener ("click", function () {
	correctButtonSelected=true;
	//correctChoice.setsrc="https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/22537/580/386/m1/fpnw/wm0/party-balloon-3d-.jpg?1371369929&s=f866be4ddd3ce996692400557606fd63";
	alert("Well done!");
	
	resultImage.setAttribute("src", "https://www.clipartmax.com/png/full/1-10416_balloon-png-image-free-download-balloons-birthday-with-balloons-and-cake.png");
	resultImage.style.opacity=100;
	
})




	

	