console.log("hello")

function getCatImage() {
    var catImage = document.createElement("img");
    var source = document.getElementById("image-div");
    catImage.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    source.appendChild(catImage);
    
}