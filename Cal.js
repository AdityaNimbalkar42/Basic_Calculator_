document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const display = document.getElementById("res");

    let currentInput = "";
    let previousInput = "";
    let operator = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (!isNaN(value) || value === ".") {
                currentInput += value;
                display.value = currentInput;
            }

            else if (button.classList.contains("clear")) {
                currentInput = "";
                previousInput = "";
                operator = "";
                display.value = "0";
            }

            else if (value === "=") {
                if (currentInput && previousInput && operator) {
                    const result = operate(
                        parseFloat(previousInput),
                        parseFloat(currentInput),
                        operator
                    );
                    display.value = result;
                    currentInput = result.toString();
                    previousInput = "";
                    operator = "";
                }
            }

            else {
                if (currentInput) {
                    previousInput = currentInput;
                    currentInput = "";
                    operator = value;
                }
            }
        });
    });

    function operate(a, b, op) {
        switch (op) {
            case "+": return a + b;
            case "-": return a - b;
            case "*": return a * b;
            case "/": return b !== 0 ? a / b : "Error";
            default: return 0;
        }
    }
});
