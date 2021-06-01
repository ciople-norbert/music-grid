import RightHand from "./right_hand.js";
import LeftHand from "./left_hand.js"
import GestureClassifier from "./gesture_classifier.js";

export default class HandDetection {
    init() {
        this.initializeElements();
        this.initializeHolistic();
        this.initializeCamera();
        this.rightHand = new RightHand();
        this.leftHand = new LeftHand();
        this.gestureClassifier = new GestureClassifier();
        this.gestureClassifier.init();
    }

    initializeHolistic() {
        this.holistic = new Holistic({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`;
            }
        });

        this.holistic.setOptions({
            modelComplexity: 1,
            smoothLandmarks: true,
            minDetectionConfidence: 0.5,
            minTrackingConfidence: 0.5
        });
        this.holistic.onResults(this.onResults.bind(this));
    }

    initializeElements() {
        this.videoElement = document.getElementById('video-input');
        this.canvasElement = document.getElementById('canvas-output');
        this.canvasCtx = this.canvasElement.getContext('2d');
    }

    initializeCamera() {
        const camera = new Camera(
            this.videoElement, {
            onFrame: async () => {
                await this.holistic.send({ image: this.videoElement });
            },
            width: 780,
            height: 439
        }
        );
        camera.start();
    }

    onResults(results) {
        this.canvasCtx.save();
        this.canvasCtx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        this.canvasCtx.drawImage(
            results.image, 0, 0, this.canvasElement.width, this.canvasElement.height);
        this.rightHand.updateLandmarks(results.rightHandLandmarks);
        this.rightHand.draw(this.canvasCtx);
        this.leftHand.updateLandmarks(results.leftHandLandmarks);
        this.leftHand.draw(this.canvasCtx);
        this.updateRaisedFingers();
        if (results.leftHandLandmarks) {
            this.gestureClassifier.addExample(results.image);
            this.gestureClassifier.predict(results.image, this.grid);
        }
        if (results.rightHandLandmarks) {
            this.gestureClassifier.addExample(results.image);
            this.gestureClassifier.predict(results.image, this.grid);
        }
        this.canvasCtx.restore();
    }

    updateRaisedFingers() {
        const raisedFingers = this.leftHand.getNumFingers() + this.rightHand.getNumFingers();
        document.getElementById('num-fingers').innerText = `Fingers raised: ${raisedFingers}`;
    }
}