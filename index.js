var randomNumber1 = Math.floor((Math.random()*6)+1);

if(randomNumber1 === 1){
	document.getElementsByClassName("img1")[0].src="images/dice1.png";
}else if(randomNumber1 === 2){
	document.getElementsByClassName("img1")[0].src="images/dice2.png";
}else if(randomNumber1 === 3){
	document.getElementsByClassName("img1")[0].src="images/dice3.png";
}else if(randomNumber1 === 4){
	document.getElementsByClassName("img1")[0].src="images/dice4.png";
}else if(randomNumber1 === 5){
	document.getElementsByClassName("img1")[0].src="images/dice5.png";
}else{
	document.getElementsByClassName("img1")[0].src="images/dice6.png";
}


var randomNumber2 = Math.floor((Math.random()*6)+1);

if(randomNumber2 === 1){
	document.getElementsByClassName("img2")[0].src="images/dice1.png";
}else if(randomNumber2 === 2){
	document.getElementsByClassName("img2")[0].src="images/dice2.png";
}else if(randomNumber2 === 3){
	document.getElementsByClassName("img2")[0].src="images/dice3.png";
}else if(randomNumber2 === 4){
	document.getElementsByClassName("img2")[0].src="images/dice4.png";
}else if(randomNumber2 === 5){
	document.getElementsByClassName("img2")[0].src="images/dice5.png";
}else{
	document.getElementsByClassName("img2")[0].src="images/dice6.png";
}


if(randomNumber1>randomNumber2){
	document.getElementsByTagName("h1")[0].innerHTML = "Player 1 wins";
}else if(randomNumber2>randomNumber1){
	document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins";
}else if(randomNumber1 == randomNumber2){
	document.getElementsByTagName("h1")[0].innerHTML = "Its a Draw!";
}



// another way of solving this problem 
/* 
var randomNumber1 = Math.floor((Math.random()*6)+1);

var randomImage = "images/dice" + randomNumber1 + ".png";

document.querrySelectorAll('img')[0].setAttribute("src", randomImage);


*/