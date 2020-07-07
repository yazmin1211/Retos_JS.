var currentDiv = document.getElementById("div1");
var h1 = document.createElement("h1");
h1.innerText = "Lorem ipsum";
document.body.insertBefore(h1,currentDiv);

var image = document.createElement("img");
image.src = "http://via.placeholder.com/350x150";
document.body.insertBefore(image,currentDiv);

var parrafo = document.createElement("p");
parrafo.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
document.body.insertBefore(parrafo,currentDiv);