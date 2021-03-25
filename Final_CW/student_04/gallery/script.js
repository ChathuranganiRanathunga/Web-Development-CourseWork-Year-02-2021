function changeImages(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

function backgroundColour() {
    var selectedColor = document.getElementById("selectId");
    var text = document.getElementById("paraText");
    var paraText = document.getElementById("choseColor");
    var bgColor = selectedColor.options[selectedColor.selectedIndex].value;
    document.body.style.backgroundColor = bgColor;
    if (bgColor == "black" || bgColor == "DarkSlateGrey") {
        text.style.color = "white";
        paraText.style.color = "white";
    }
    if (bgColor == "Bisque" || bgColor == "white") {
        text.style.color = "black";
        paraText.style.color = "black";
    }
    if (bgColor == "Default") {
        document.body.style.backgroundColor = "rgb(251, 243, 222)";
        text.style.color = "black";
        paraText.style.color = "black";
    }
}