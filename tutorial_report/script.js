function FullView(ImagLink) {
    document.getElementById("FullImage").src = ImagLink;
    document.getElementById("FullImageView").style.display = "inline-block";
}

function CloseFullView() {
    document.getElementById("FullImageView").style.display = "none";
}