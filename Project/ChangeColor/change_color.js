document.querySelector(".btn").addEventListener("click", changeColor);

function changeColor() {
    const box = document.querySelector(".box2");
    box.style.backgroundColor = generateRandomColor();
}

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}