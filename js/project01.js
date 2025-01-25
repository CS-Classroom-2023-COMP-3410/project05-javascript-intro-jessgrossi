// Select elements
const clock = document.getElementById("clock");
const toggleFormatBtn = document.getElementById("toggle-format");
const colorPicker = document.getElementById("color-picker");
const fontSizeInput = document.getElementById("font-size");
const alarmTimeInput = document.getElementById("alarm-time");
const setAlarmBtn = document.getElementById("set-alarm");
const alarmStatus = document.getElementById("alarm-status");

// Variables
let is24HourFormat = false;
let alarmTime = null;

// Load preferences
document.addEventListener("DOMContentLoaded", () => {
    const savedColor = localStorage.getItem("clockColor");
    const savedFontSize = localStorage.getItem("fontSize");
    const savedFormat = localStorage.getItem("is24HourFormat");

    if (savedColor) clock.style.color = savedColor;
    if (savedFontSize) clock.style.fontSize = `${savedFontSize}px`;
    if (savedFormat === "true") is24HourFormat = true;

    colorPicker.value = savedColor || "#000000";
    fontSizeInput.value = savedFontSize || 48;
    toggleFormatBtn.textContent = is24HourFormat ? "Switch to 12-Hour" : "Switch to 24-Hour";

    updateClock();
});

// Update clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (!is24HourFormat) {
        hours = hours % 12 || 12;
    }

    const formattedTime = [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0"),
    ].join(":");

    clock.textContent = formattedTime;

    checkAlarm(hours, minutes, seconds);

    setTimeout(updateClock, 1000);
}

// Toggle format
toggleFormatBtn.addEventListener("click", () => {
    is24HourFormat = !is24HourFormat;
    localStorage.setItem("is24HourFormat", is24HourFormat);
    toggleFormatBtn.textContent = is24HourFormat ? "Switch to 12-Hour" : "Switch to 24-Hour";
    updateClock();
});

// Change color
colorPicker.addEventListener("input", () => {
    const color = colorPicker.value;
    clock.style.color = color;
    localStorage.setItem("clockColor", color);
});

// Change font size
fontSizeInput.addEventListener("input", () => {
    const fontSize = fontSizeInput.value;
    clock.style.fontSize = `${fontSize}px`;
    localStorage.setItem("fontSize", fontSize);
});

// Set alarm
setAlarmBtn.addEventListener("click", () => {
    alarmTime = alarmTimeInput.value;
    if (alarmTime) {
        alarmStatus.textContent = `Alarm set for ${alarmTime}`;
        localStorage.setItem("alarmTime", alarmTime);
    } else {
        alarmStatus.textContent = "Please set a valid time.";
    }
});

// Check alarm
function checkAlarm(hours, minutes, seconds) {
    if (!alarmTime) return;

    const [alarmHours, alarmMinutes] = alarmTime.split(":").map(Number);
    if (
        alarmHours === hours &&
        alarmMinutes === minutes &&
        seconds === 0
    ) {
        alert("Alarm ringing!");
        alarmTime = null; // Clear the alarm
        alarmStatus.textContent = "";
    }
}
