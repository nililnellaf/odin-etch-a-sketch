function createSquares(n) {
    const squares = [];
    const squareContainer = document.querySelector(".square-container");
    const width = squareContainer.offsetWidth / n;
    for (let i = 0; i < n * n; ++i) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.width = width + "px";
        square.style.height = width + "px";
        const hoverFunction = () => {
            square.style.backgroundColor = "black";
        }
        square.addEventListener("mouseenter", hoverFunction);
        squares[i] = square;
    }
    squareContainer.replaceChildren(...squares);
}

function reset() {
    const squareContainer = document.querySelector(".square-container");
    for (const square of squareContainer.children) {
        square.style.backgroundColor = null;
    }
}

(function () {
    createSquares(16);
    document.querySelector(".reset-button")
        .addEventListener("click", () => {
            reset();
        })
    document.querySelector(".regenerate-button")
        .addEventListener("click", () => {
            const n = prompt("Input number of squares per side for the new grid (>=1 and <=100)");
            if (n < 1 || n > 100) {
                alert("Invalid input");
            } else {
                createSquares(n);
            }
        })
})();