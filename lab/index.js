document.getElementById("btn1").addEventListener("click", function on() {
    document.getElementById("modal1").style.display = "block";
});

document.getElementById("btn2").addEventListener("click", function on() {
    document.getElementById("modal2").style.display = "block";
});

document.getElementById("btn3").addEventListener("click", function on() {
    document.getElementById("modal3").style.display = "block";
});


document.getElementById("close1").addEventListener("click", function off() {
    document.getElementById("modal1").style.display = "none";
});

document.getElementById("close2").addEventListener("click", function off() {
    document.getElementById("modal2").style.display = "none";
});

document.getElementById("close3").addEventListener("click", function off() {
    document.getElementById("modal3").style.display = "none";
});