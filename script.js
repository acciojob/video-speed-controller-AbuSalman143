const inputs = document.querySelectorAll('.controls input');
const video = document.querySelector('video');
const speedBar = document.querySelector('.speed-bar');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    if (this.name === 'video-speed') {
        video.playbackRate = this.value;
        speedBar.style.width = `${(this.value - 0.5) * 100 / 1.5}%`;  // Adjusts the width according to speed range
        speedBar.textContent = `${this.value}×`;
    }
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
