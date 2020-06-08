console.log("hello")

function getCatImage() {
    //location.reload();
    var catImage = document.getElementById("first-cat-image");
    //var source = document.getElementById("image-div");
    catImage.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small"+new Date().getTime();
    

    
}