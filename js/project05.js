const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");
const brushSizeInput = document.getElementById("brush-size");
const brushColorInput = document.getElementById("brush-color");
const bgColorInput = document.getElementById("bg-color");
const undoButton = document.getElementById("undo");
const clearButton = document.getElementById("clear");
const saveButton = document.getElementById("save");

canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 100;

let isDrawing = false;
let brushSize = 5;
let brushColor = "#000000";
let bgColor = "#ffffff";
let strokes = [];
let currentStroke = [];

ctx.fillStyle = bgColor;
ctx.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    currentStroke = [];
});

canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    const x = e.offsetX;
    const y = e.offsetY;

    ctx.lineWidth = brushSize;
    ctx.strokeStyle = brushColor;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (currentStroke.length === 0) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    currentStroke.push({ x, y, color: brushColor, size: brushSize });
});

canvas.addEventListener("mouseup", () => {
    if (isDrawing) {
        strokes.push([...currentStroke]);
    }
    isDrawing = false;
});

canvas.addEventListener("mouseout", () => {
    isDrawing = false;
});

brushSizeInput.addEventListener("input", (e) => {
    brushSize = e.target.value;
});

brushColorInput.addEventListener("input", (e) => {
    brushColor = e.target.value;
});

bgColorInput.addEventListener("input", (e) => {
    bgColor = e.target.value;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    strokes.forEach((stroke) => {
        ctx.beginPath();
        stroke.forEach((point, index) => {
            ctx.lineWidth = point.size;
            ctx.strokeStyle = point.color;
            if (index === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
                ctx.stroke();
            }
        });
    });
});

undoButton.addEventListener("click", () => {
    strokes.pop();
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    strokes.forEach((stroke) => {
        ctx.beginPath();
        stroke.forEach((point, index) => {
            ctx.lineWidth = point.size;
            ctx.strokeStyle = point.color;
            if (index === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
                ctx.stroke();
            }
        });
    });
});

clearButton.addEventListener("click", () => {
    strokes = [];
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

saveButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
});
