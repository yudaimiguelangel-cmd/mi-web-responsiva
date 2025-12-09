const widthSlider = document.getElementById("widthSlider");
const paddingSlider = document.getElementById("paddingSlider");
const borderSlider = document.getElementById("borderSlider");

const widthValue = document.getElementById("widthValue");
const paddingValue = document.getElementById("paddingValue");
const borderValue = document.getElementById("borderValue");

const demoContentBox = document.getElementById("demoContentBox");
const demoBorderBox = document.getElementById("demoBorderBox");

const totalContentBox = document.getElementById("totalContentBox");
const totalBorderBox = document.getElementById("totalBorderBox");

function updateValues() {
    const width = parseInt(widthSlider.value);
    const padding = parseInt(paddingSlider.value);
    const border = parseInt(borderSlider.value);

    widthValue.textContent = width + "px";
    paddingValue.textContent = padding + "px";
    borderValue.textContent = border + "px";

    /* CONTENT-BOX: width + padding*2 + border*2 */
    const total1 = width + padding * 2 + border * 2;
    demoContentBox.style.width = width + "px";
    demoContentBox.style.padding = padding + "px";
    demoContentBox.style.borderWidth = border + "px";
    totalContentBox.textContent = `Total: ${total1}px`;

    /* BORDER-BOX */
    const total2 = width; 
    demoBorderBox.style.width = width + "px";
    demoBorderBox.style.padding = padding + "px";
    demoBorderBox.style.borderWidth = border + "px";
    totalBorderBox.textContent = `Total: ${total2}px`;

    /* Resaltado estético al cambiar */
    demoContentBox.classList.add("highlight");
    demoBorderBox.classList.add("highlight");

    setTimeout(() => {
        demoContentBox.classList.remove("highlight");
        demoBorderBox.classList.remove("highlight");
    }, 600);
}

/* Escuchar sliders */
widthSlider.addEventListener("input", updateValues);
paddingSlider.addEventListener("input", updateValues);
borderSlider.addEventListener("input", updateValues);

/* Inicial */
updateValues();
