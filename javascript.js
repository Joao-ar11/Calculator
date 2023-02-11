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