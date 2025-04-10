const back = document.getElementById("backCanvas").getContext("2d");
back.fillStyle = "lightyellow";
back.fillRect(0, 0, 400, 300); // Background canvas
const ctx = back
const front = document.getElementById("frontCanvas").getContext("2d");
front.fillStyle = "blue";
front.fillRect(100, 100, 100, 100); // Front canvas shape
ctx.beginPath();
ctx.arc(150, 150, 40, 0, Math.PI * 2); // x, y, radius, start angle, end angle
ctx.fillStyle = "red";
ctx.fill();
