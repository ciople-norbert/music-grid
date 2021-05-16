class Timer {
    constructor() {
        this.isRunning = false;
        this.elapsedTime = 0;
        this.startTime = 0;
        this.leftoverTime = 0;
    }

    init() {
        document.getElementById('timer-start').addEventListener('click', () => this.start());
        document.getElementById('timer-stop').addEventListener('click', () => this.stop());
        document.getElementById('timer-reset').addEventListener('click', () => this.reset());
    }

    start() {
        if (!this.isRunning) {
            this.startTime = new Date().getTime();
            this.isRunning = true;
        }
    }

    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            this.leftoverTime = this.elapsedTime;
        }
    }

    reset() {
        this.isRunning = false;
        this.elapsedTime = 0;
        this.leftoverTime = 0;
        document.getElementById('timer').innerText = this.msToHMS(this.elapsedTime);
    }

    display() {
        if (this.isRunning) {
            this.elapsedTime = new Date().getTime() - this.startTime + this.leftoverTime;
            document.getElementById('timer').innerText = this.msToHMS(this.elapsedTime);
        }
    }

    msToHMS(millis) {
        let seconds = Math.floor((millis / 1000) % 60);
        let minutes = Math.floor((millis / (1000 * 60)) % 60);
        let hours = Math.floor((millis / (1000 * 60 * 60)) % 24);

        if (seconds < 10) seconds = '0' + seconds.toString();
        if (minutes < 10) minutes = '0' + minutes.toString();
        if (hours < 10) hours = '0' + hours.toString();

        return `${hours}:${minutes}:${seconds}`;
    }
}

let timer = new Timer();
timer.init();
const interval = setInterval(() => { timer.display(); }, 100);
