import HandDetection from './hand_detection.js';
import Calculator from './calculator.js';

export default class App {
    init() {
        this.initializeCalculator();
        this.initializeMediaPipe();
    }


    initializeMediaPipe() {
        const handDetection = new HandDetection(this.calculator);
        handDetection.init();
    }

    initializeCalculator() {
        this.calculator = new Calculator();
        this.calculator.init();
    }
}
