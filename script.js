
function upDate(previewPic) {
    console.log("Event triggered: upDate() on " + previewPic.alt);

    let displayDiv = document.getElementById('image-display');
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    displayDiv.innerHTML = previewPic.alt;
}

function unDo() {
    console.log("Event triggered: unDo()");

    let displayDiv = document.getElementById('image-display');
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}

function initializeGallery() {
    console.log("Page load event triggered: initializeGallery()");
  
    let images = document.querySelectorAll('.preview');

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Added tabindex='0' to image " + (i + 1));
    }
}

window.onload = initializeGallery;
