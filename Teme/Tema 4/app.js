import HandDetection from './hand_detection.js';

export default class App {
    init() {
        this.initializeMediaPipe();
        document.getElementById('colored-div').classList.add('no-gesture');
    }


    initializeMediaPipe() {
        const handDetection = new HandDetection();
        handDetection.init();
    }
}
