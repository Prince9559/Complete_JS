
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, radius = 30, color = "blue") {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
}

canvas.addEventListener("click", function(event) {
  const rect = canvas.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  drawCircle(mouseX, mouseY);
});