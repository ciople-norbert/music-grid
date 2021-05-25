export default class RightHand {
    constructor(calculator) {
        this.calculator = calculator;
    }

    isButtonPressed(button) {
        const clientRect = button.getBoundingClientRect();
        const indexFingerX = this.indexFingerTip.x * 780 + 20;
        const indexFingerY = this.indexFingerTip.y * 439 + 20;
        const buttonX = clientRect.x;
        const buttonY = clientRect.y;
        if (button.classList.contains('recently-activated-by-touch')) return;
        return (
            indexFingerX > buttonX && indexFingerX < clientRect.right &&
            indexFingerY > buttonY && indexFingerY < clientRect.bottom
        )
    }

    updateLandmarks(landmarks) {
        this.landmarks = landmarks;
    }

    draw(ctx) {
        this.indexFingerTip = this.landmarks && this.landmarks[8];
        if (this.indexFingerTip) {
            const isPressed = this.indexFingerTip.z < -0.1;
            ctx.beginPath();
            ctx.arc(
                this.indexFingerTip.x * 780,
                this.indexFingerTip.y * 439,
                10,
                0,
                2 * Math.PI
            )
            ctx.fillStyle = isPressed ? 'green' : 'orange';
            ctx.fill();
            ctx.stroke();

            if (isPressed) {
                this.calculator.buttons.forEach((button) => {
                    if (this.isButtonPressed(button)) {
                        this.calculator.toggleButtonState(button);
                        button.classList.add('recently-activated-by-touch');
                        setTimeout(() => {
                            button.classList.remove('recently-activated-by-touch');
                            this.calculator.toggleButtonState(button);
                            this.calculator.handleButtonPressed(button);
                        }, 400);
                    }
                })
            }
        }
    }
}