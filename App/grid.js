export class Grid {
    constructor(options) {
        this.rootId = options.rootId;
        this.noOfRows = options.noOfRows;
        this.noOfCells = options.noOfCells;
        this.rowClass = options.rowClass;
        this.cellClass = options.cellClass;
        this.currentPlayedRow = 0;
        this.gridContainer = document.getElementById(this.rootId);
        this.isPlaying = false;
        this.cells = [];
    }

    init() {
        this.addDocumentMouseListeners();
        this.draw();
    }

    addPlayButton() {
        const playButton = document.createElement('div');
        playButton.classList.add('grid-play-button');
        playButton.innerText = 'Play';
        playButton.addEventListener('click', () => {
            if (!this.isPlaying) {
                this.isPlaying = true;
                playButton.innerText = 'Stop';
                this.play();
            } else {
                playButton.innerText = 'Play';
                this.isPlaying = false;
            }
        })
        this.gridContainer.append(playButton);
    }

    addResetButton() {
        const resetButton = document.createElement('div');
        resetButton.classList.add('grid-reset-button');
        resetButton.innerText = 'Reset';
        resetButton.addEventListener('click', () => {
            const cells = this.gridContainer.getElementsByClassName('grid-cell active');
            [...cells].forEach((cell) => {
                cell.classList.remove('active');
                this.currentPlayedRow = 0;
            })
        })
        this.gridContainer.append(resetButton);
    }

    draw () {
        for (let i = 0; i < this.noOfRows; i++) {
            const row = document.createElement('div');
            row.classList.add(this.rowClass);
            this.addCellsToRow(row);
            this.gridContainer.append(row);
        }
        this.addPlayButton();
        this.addResetButton();
    }

    toggleCellState(cell) {
        cell.classList.toggle('active');
    }

    addCellsToRow(row){
        for (let j = 0; j < this.noOfCells; j++) {
            const cell = document.createElement('div');
            cell.classList.add(this.cellClass);

            cell.addEventListener('click', () => {
                this.toggleCellState(cell);
            })
            cell.addEventListener('mouseenter', () => {
                if (this.isMouseDown) this.toggleCellState(cell);
            })
            this.cells.push(cell);
            row.append(cell);
        }
    }

    addDocumentMouseListeners() {
        document.addEventListener('mousedown', () => {
            this.isMouseDown = true;
        })
        document.addEventListener('mouseup', () => {
            this.isMouseDown = false;
        })
    }

    play() {
        if (!this.isPlaying) return;
        const row = this.gridContainer.getElementsByClassName(this.rowClass)[this.currentPlayedRow];
        const cells = row.getElementsByClassName('grid-cell active');
        [...cells].forEach((cell) => {
            cell.classList.add('animate');
            setTimeout(
                () => cell.classList.remove('animate'),
                400
            );
        })

        if (this.currentPlayedRow === this.noOfRows - 1) {
            this.currentPlayedRow = 0;
        } else {
            this.currentPlayedRow++;
        }
        setTimeout(() => this.play(), 400);
    }
}
