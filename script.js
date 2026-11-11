
function upDate(previewPic) {
    console.log("[EVENT TRIGGERED] upDate() activated on image:", previewPic.src);
    console.log("Alt text retrieved:", previewPic.alt);

    const displayDiv = document.getElementById('image-display');
    const captionDiv = document.getElementById('image-caption');

    displayDiv.style.backgroundImage = `url('${previewPic.src}')`;
    displayDiv.style.borderColor = "#e60023";

    captionDiv.textContent = previewPic.alt;
    captionDiv.style.borderColor = "#e60023";
    captionDiv.style.backgroundColor = "rgba(230, 0, 35, 0.15)";
}

function unDo() {
    console.log("[EVENT TRIGGERED] unDo() activated: resetting gallery display stage.");

    const displayDiv = document.getElementById('image-display');
    const captionDiv = document.getElementById('image-caption');

    // Khôi phục lại trạng thái ban đầu của khung ảnh và thanh chú thích
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.style.borderColor = "rgba(255, 255, 255, 0.15)";

    captionDiv.textContent = "Hover or focus on a thumbnail below to display full cover.";
    captionDiv.style.borderColor = "rgba(255, 255, 255, 0.15)";
    captionDiv.style.backgroundColor = "rgba(255, 255, 255, 0.07)";
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
