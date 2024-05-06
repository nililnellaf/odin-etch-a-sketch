function createBoxes(n) {
    const boxes = [];
    const boxContainer = document.querySelector(".box-container");
    const width = boxContainer.offsetWidth / n;
    for (let i = 0; i < n * n; ++i) {
        const box = document.createElement("div");
        box.className = "box";
        box.style.width = width + "px";
        box.style.height = width + "px";
        const hoverFunction = () => {
            box.classList.toggle("box-hover")
        }
        box.addEventListener("mouseenter", hoverFunction);
        box.addEventListener("mouseleave", hoverFunction);
        boxes[i] = box;
    }
    boxContainer.replaceChildren(...boxes);
}

(function () {
    createBoxes(16);
    document.querySelector(".regenerate-button")
        .addEventListener("click", () => {
            const n = prompt("Input number of squares per side for the new grid (>=1 and <=100)");
            if (n < 1 || n > 100) {
                alert("Invalid input");
            } else {
                createBoxes(n);
            }
        })
})();