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

let image = document.querySelector(".banner-img");
let indice = 0;
let text = document.getElementById("text");
let dots =document.getElementsByClassName("dot");
console.log(dots);

// flèche gauche
let left = document.querySelector(".arrow_left")
left.addEventListener("click", function() {
	console.log("Vous avez cliqué sur la flèche gauche")
	dots[indice].className="dot"
	indice = indice -1
	if (indice <0) indice = 3
	console.log(indice)
	image.src = "assets/images/slideshow/"+slides[indice].image
	text.innerHTML=slides[indice].tagLine
	dots[indice].className="dot dot_selected"
});

// flèche droite
let right = document.querySelector(".arrow_right")
right.addEventListener("click", function() {
	console.log("Vous avez cliqué sur la flèche droite")
	dots[indice].className="dot"
	indice = indice +1
	if ( indice > 3) indice = 0
	console.log(indice)
	image.src = "assets/images/slideshow/"+slides[indice].image
	text.innerHTML=slides[indice].tagLine
	dots[indice].className="dot dot_selected"
});