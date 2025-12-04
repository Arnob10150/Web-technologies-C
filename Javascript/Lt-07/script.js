
const paragraph=document.getElementById("paragraph");
let currentFontSize = 16;


function changeBackground() {
   paragraph.style.backgroundColor = "beige";
}


function increaseFont() {
    currentFontSize += 2;
    paragraph.style.fontSize = currentFontSize + "px";
}


function centerText() {
    paragraph.style.textAlign = "center";
}


function resetStyle() {
    paragraph.style.backgroundColor = "white";
    paragraph.style.fontSize = "16px";
    paragraph.style.textAlign = "left";
    currentFontSize = 16; 
}
