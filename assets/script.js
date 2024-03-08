const slides = [
	{
		
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//récupérer l'image modififier l'image au click 
let left = document.querySelector(".arrow_left")
		left.addEventListener("click", function(){
			console.log("Vous avez cliqué sur la flèche gauche")
		})
let right = document.querySelector(".arrow_right")
		right.addEventListener("click", function(){
			console.log("Vous avez cliqué sur la flèche droite")
		})

console.log(slides[0].image)
console.log(slides[2].tagLine)
document.getElementById("banner-img").innerHTML="test text"