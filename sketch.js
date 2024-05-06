function createSquares(n) {
    const squares = [];
    const squareContainer = document.querySelector(".square-container");
    const width = squareContainer.offsetWidth / n;
    for (let i = 0; i < n * n; ++i) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.width = width + "px";
        square.style.height = width + "px";
        square.addEventListener("mouseenter", handleHover);
        squares[i] = square;
    }
    squareContainer.replaceChildren(...squares);
}

function handleHover(event) {
    let mode = document.querySelector('input[name="mode"]:checked').value;
    switch (mode) {
        case "black":
            event.target.style.backgroundColor = "black";
            event.target.style.opacity = 1;
            break;
        case "color":
            event.target.style.backgroundColor = getRandomColor();
            break;
        case "grey":
            let opacity = parseFloat(event.target.style.opacity) || 0;
            opacity += 0.1;
            event.target.style.backgroundColor = "black";
            event.target.style.opacity = opacity;
            break;
    }
}

function reset() {
    const squareContainer = document.querySelector(".square-container");
    for (const square of squareContainer.children) {
        square.style.backgroundColor = null;
        square.style.opacity = null;
    }
}

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
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
    document.querySelectorAll('input[name="mode"]')
        .forEach(input => {
            input.addEventListener("change", () => {
                console.log("mode changed: " + input.value);
                reset();
            })
        });
})();