document.addEventListener("DOMContentLoaded", () => {
    let line = document.getElementById("line");
    let angle = 0;

    setInterval(() => {
        angle += 2; // Increase angle by 2 degrees
        line.style.transform = `rotate(${angle}deg)`;
    }, 20); // Update every 20 milliseconds
});