console.log("hello")


function randomNumber() {
    return Math.floor(Math.random() * 11);
}

//console.log(randomNumber());


function getCatImage() {
    //location.reload();
    var catImage = document.getElementById("first-cat-image");
    //var source = document.getElementById("image-div");
    switch(randomNumber()) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            catImage.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small"+new Date().getTime();
            break;
        case 8:
            catImage.src="https://i.imgur.com/bNdJEmN.jpg";//+new Date().getTime();
            break;
        case 9:
            catImage.src="https://i.imgur.com/NLnj9B3.jpg";
            break;
        case 10:
            catImage.src="https://i.imgur.com/aeuk3zy.jpg";//+new Date().getTime();
            break;
    }
    //catImage.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small"+new Date().getTime();
    

    
}
