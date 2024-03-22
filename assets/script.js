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
let indiceRight = 0;
let indiceLeft = 3;
let text = document.getElementById("text");
let dots =document.getElementsByClassName("dot");
console.log(dots);

// flèche gauche
let left = document.querySelector(".arrow_left")
left.addEventListener("click", function() {
	console.log("Vous avez cliqué sur la flèche gauche")
	dots[indiceLeft].className="dot"
	indiceLeft = indiceLeft -1
	if (indiceLeft <0) indiceLeft = 3
	console.log(indiceLeft)
	image.src = "assets/images/slideshow/"+slides[indiceLeft].image
	text.innerHTML=slides[indiceLeft].tagLine
	dots[indiceLeft].className="dot dot_selected"
});

// flèche droite
let right = document.querySelector(".arrow_right")
right.addEventListener("click", function() {
	console.log("Vous avez cliqué sur la flèche droite")
	dots[indiceRight].className="dot"
	indiceRight = indiceRight +1
	if ( indiceRight > 3) indiceRight = 0
	console.log(indiceRight)
	image.src = "assets/images/slideshow/"+slides[indiceRight].image
	text.innerHTML=slides[indiceRight].tagLine
	dots[indiceRight].className="dot dot_selected"
});

console.log(slides[0].image)
console.log(slides[2].tagLine)