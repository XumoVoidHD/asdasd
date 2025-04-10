const canvas = document.getElementById("smiley")
const ctx = canvas.getContext("2d")

ctx.beginPath()
ctx.arc(100,100,60,0,2*Math.PI);
ctx.fillStyle = "yellow"
ctx.fill()
ctx.stroke();

ctx.beginPath()
ctx.arc(120, 80, 10,0,2*Math.PI)
ctx.fillStyle = "black"
ctx.fill()
ctx.stroke()

ctx.beginPath()
ctx.arc(80, 80, 10,0,2*Math.PI)
ctx.fillStyle = "black"
ctx.fill()
ctx.stroke()

ctx.beginPath()
ctx.arc(100, 140, 10,0,Math.PI)
ctx.fillStyle = "black"
ctx.stroke()

