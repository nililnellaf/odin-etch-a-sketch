function createBoxes(n) {
    let boxes = [];
    for (let i = 0; i < n * n; ++i) {
        let box = document.createElement("div");
        box.className = "box";
        let hoverFunction = () => {
            box.classList.toggle("box-hover")
        }
        box.addEventListener("mouseenter", hoverFunction);
        box.addEventListener("mouseleave", hoverFunction);
        boxes[i] = box;
    }
    let boxContainer = document.querySelector(".box-container");
    boxContainer.replaceChildren(...boxes);
}

(function () {
    createBoxes(16);
})();