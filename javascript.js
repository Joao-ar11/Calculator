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
const numberButtons = document.querySelectorAll(".number");
const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
for (let i in numbers) {
    numberButtons[i].addEventListener("click", () => {
        displayContent += `${numbers[i]}`;
        display.textContent = displayContent;
    });
}
const operationButtons = document.querySelectorAll(".operation");
const characters = [" ÷ ", " x ", " - ", "", " + "];
for (let i in characters) {
    operationButtons[i].addEventListener("click", () => {
        if (displayContent.split(" ").length >= 3) {
            displayContent = operation(displayContent) + `${characters[i]}`;
            display.textContent = displayContent;
        } else if (displayContent.split(" ").length === 1 && displayContent !== "") {
            displayContent += `${characters[i]}`;
            display.textContent = displayContent;
        }
    })
}
const dotButton = document.querySelector(".dot");
dotButton.addEventListener("click", () => {
    if ((displayContent.split(" ").length === 1 && displayContent !== "" &&
        displayContent.split(" ")[0].indexOf(".") === -1) || 
        (displayContent.split(" ").length === 3 && displayContent.split(" ")[2] !== "" &&
        displayContent.split(" ")[2].indexOf(".") === -1)) {
        displayContent += ".";
        display.textContent = displayContent;
    }
});