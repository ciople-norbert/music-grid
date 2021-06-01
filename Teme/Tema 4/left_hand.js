export default class LeftHand {
    updateLandmarks(landmarks) {
        this.landmarks = landmarks;
        this.indexFinger = landmarks && landmarks[8];
        this.thumbFinger = landmarks && landmarks[4];
    }

    draw(ctx) {
        drawLandmarks(ctx, this.landmarks, {
            color: 'lightblue',
            linewidth: 1
        });
    }

    getNumFingers() {
        const fingerTips = [4, 8, 12, 16, 20];
        const fingerBases = [5, 5, 9, 13, 17];
        let raisedFingers = 0;
        for (let i = 0; i < fingerBases.length; i++) {
            if (this.landmarks && this.landmarks[fingerTips[i]] && this.landmarks[fingerBases[i]]){
                if (this.dist(this.landmarks[fingerTips[i]], this.landmarks[fingerBases[i]]) > 0.1){
                    raisedFingers++;
                }
            }
        }
        return raisedFingers;
    }

    dist(tip, base) {
        const { x: x1, y: y1 } = tip;
        const { x: x2, y: y2 } = base;
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
}