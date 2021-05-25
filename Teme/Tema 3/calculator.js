export default class Calculator {
    constructor() {
        this.calculatorContainer = document.getElementById('calculator-container');
        this.buttons = [];
        this.operation = null;
        this.currentValue = null;
        this.operations = ['.', '+', '-', 'x', '/', '=', 'C'];
    }

    init() {
        this.draw();
    }

    draw() {
        this.drawNumericalButons();
        this.drawOperationalButtons();
        this.drawScreen();
    }

    drawNumericalButons() {
        let currNumber = 0;
        while (currNumber <= 9) {
            const button = this.createButton(currNumber)
            this.calculatorContainer.append(button);
            this.buttons.push(button);
            currNumber++;
        }
    }

    drawOperationalButtons() {
        this.operations.forEach((operation) => {
            const button = this.createButton(operation)
            this.calculatorContainer.append(button);
            this.buttons.push(button);
        });
    }

    createButton(text) {
        const button = document.createElement('div');
        button.classList.add('calculator-button');
        button.innerText = text;
        button.addEventListener('click', () => {
            this.handleButtonPressed(button);
        });
        return button
    }

    drawScreen() {
        this.screen = document.createElement('div');
        this.screen.classList.add('calculator-screen');
        this.screen.innerText = '';
        this.calculatorContainer.append(this.screen);
    }

    toggleButtonState(button) {
        button.classList.toggle('active');
    }

    handleButtonPressed(button) {
        const buttonValue = button.innerText;
        if (this.operations.includes(buttonValue)) {
            if (buttonValue != '=') {
                this.operation = buttonValue;
                this.handleOperation();
            } else {
                this.handleOperationEquals();
            }
        } else {
            this.handleNumberPressed(buttonValue);
        }
    }

    handleOperation() {
        console.log('handle');
        switch (this.operation) {
            case 'C':
                this.handleOperationClear();
                return;
            case '.':
                this.handleOperationDecimal();
                return;
            case '+':
            case '-':
            case 'x':
            case '/':
                this.handleOperationAlgebric();
                return;
            default:
                'Not supported';
        }
    }

    handleOperationClear() {
        this.operation = null;
        this.screen.innerText = '';
        this.currentValue = null;
    }

    handleOperationDecimal() {
        this.operation = null;
        let screenText = this.screen.innerText;
        if (screenText.includes('.')) return;
        if (screenText == '') {
            screenText = '0.';
        } else {
            screenText = screenText.concat('.');
        }
        this.screen.innerText = screenText;
    }

    handleOperationAlgebric() {
        const screenValue = parseFloat(this.screen.innerText);
        console.log(screenValue);
        switch (this.operation) {
            case '+':
                if (this.currentValue) {
                    this.currentValue += screenValue;
                } else {
                    this.currentValue = screenValue;
                }
                break
            case '-':
                if (this.currentValue) {
                    this.currentValue -= screenValue;
                } else {
                    this.currentValue = screenValue;
                }
                break
            case 'x':
                if (this.currentValue) {
                    this.currentValue *= screenValue;
                } else {
                    this.currentValue = screenValue;
                }
                break
            case '/':
                if (this.currentValue) {
                    this.currentValue /= screenValue;
                } else {
                    this.currentValue = screenValue;
                }

        }
        this.screen.innerText = '';
    }

    handleOperationEquals() {
        const screenValue = this.screen.innerText;
        if (!this.currentValue) {
            this.currentValue = screenValue;
            return;
        }
        this.handleOperation();
        this.screen.innerText = this.currentValue;
        this.currentValue = null;
    }

    handleNumberPressed(buttonValue) {
        let screenText = this.screen.innerText;
        this.screen.innerText = screenText.concat(buttonValue);
    }
}