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
        const fingerBases = [3, 6, 10, 14, 18];
        let raisedFingers = 0;
        for (let i = 1; i < fingerBases.length; i++) {
            if (this.landmarks && this.landmarks[fingerTips[i]] && this.landmarks[fingerBases[i]]){
                if (this.landmarks[fingerTips[i]].y  < this.landmarks[fingerBases[i]].y){
                    raisedFingers++;
                }
            }
        }
        if (this.landmarks && this.landmarks[fingerTips[0]] && this.landmarks[fingerBases[0]]){
            if (this.landmarks[fingerTips[0]].x  < this.landmarks[fingerBases[0]].x){
                raisedFingers++;
            }
        }
        return raisedFingers;
    }

}