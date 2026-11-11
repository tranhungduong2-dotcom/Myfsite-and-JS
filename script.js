
function upDate(previewPic) {

    console.log("[EVENT TRIGGERED] upDate() activated on image:", previewPic.src);
    console.log("Alt text retrieved:", previewPic.alt);

    const displayDiv = document.getElementById('image-display');

    displayDiv.style.backgroundImage = `url('${previewPic.src}')`;
    displayDiv.innerHTML = `<span>${previewPic.alt}</span>`;
    displayDiv.style.borderColor = "#e60023";
}


function unDo() {
    console.log("[EVENT TRIGGERED] unDo() activated: resetting gallery display stage.");

    const displayDiv = document.getElementById('image-display');
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "<span>Hover or focus on a thumbnail below to display full cover.</span>";
    displayDiv.style.borderColor = "rgba(255, 255, 255, 0.15)";
}


 
function addTabFocusAttributes() {
    console.log("[PAGE LOAD] onload event triggered: addTabFocusAttributes() starting...");

    const images = document.querySelectorAll('.preview');
    console.log(`[PAGE LOAD] Total thumbnails identified: ${images.length}`);

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log(`[TABINDEX ADDED] Applied tabindex='0' to thumbnail #${i + 1} (${images[i].alt})`);
    }

    console.log("[PAGE LOAD] Initialization complete. Gallery is fully focusable.");
}

window.onload = addTabFocusAttributes;
