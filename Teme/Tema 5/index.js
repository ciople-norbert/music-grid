//There is only one question, hardcoded, like a professional ¯\_(ツ)_/¯

function removeClickListeners() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`answer-${i}`).classList.add('disabled');
    }
}

function playTone(toneNumber) {
    const tones = [350, 440, 350];
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease(tones[toneNumber - 1], 1, now);
}

function setListenerForAnswer(i) {
    const backgroundColors = ['red', 'green', 'red'];
    document.getElementById(`answer-${i}`).style.backgroundColor = backgroundColors[i - 1];
    playTone(i);
    removeClickListeners();
}

function addClickListeners() {
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`answer-${i}`).addEventListener('click', () => setListenerForAnswer(i));
    }
}

addClickListeners();