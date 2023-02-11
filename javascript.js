function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operation(string) {
    const elements = string.split(" ");
    switch (elements[1]) {
        case "+":
            return add(+elements[0], +elements[2]);
            break;
        case "-":
            return subtract(+elements[0], +elements[2]);
            break;
        case "x":
            return multiply(+elements[0], +elements[2]);
            break;
        case "÷":
            return divide(+elements[0], +elements[2]);
            break;
    }
}

let displayContent = "";
const display = document.querySelector("#display");
const inputButtons = document.querySelectorAll(".input");
const characters = ["7", "8", "9", " ÷ ", "4", "5", "6", " x ", "1", "2", "3", " - ", ".", "0", "", " + "];
for (let i in characters) {
    if (characters[i] === " ÷ " || characters[i] === " x " || characters[i] === " - " ||
    characters[i] === " + ") {
        inputButtons[i].addEventListener("click", () => {
            if (displayContent.split(" ").length === 3) {
                displayContent = operation(displayContent);
                display.textContent = displayContent;
            }
            displayContent += `${characters[i]}`;
            display.textContent = displayContent;
        });
    } else {
        inputButtons[i].addEventListener("click", () => {
            displayContent += `${characters[i]}`;
            display.textContent = displayContent;
        });
    }
}