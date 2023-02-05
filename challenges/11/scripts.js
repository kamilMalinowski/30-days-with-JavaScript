const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const fullscreen = player.querySelector(".fullscreen");
const ranges = player.querySelectorAll(".player__slider");
const skipButton = player.querySelectorAll("[data-skip]");

let mousedown = false;
const togglePlay = () => (video.paused ? video.play() : video.pause());
const updateButton = () => video.paused ? (toggle.innerHTML = "⏸️") : (toggle.innerHTML = "▶️");

function skip() {video.currentTime += parseFloat(this.dataset.skip)}
function handleRangeUpdate() {video[this.name] = this.value}
function handleProgress() {progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`}
function scrub(e) {video.currentTime = e.offsetX /progress.offsetWidth * video.duration}
function toggleFullScreen(){video.requestFullscreen()}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
progressBar.addEventListener("change", handleProgress);
progress.addEventListener("click", scrub);
fullscreen.addEventListener("click", toggleFullScreen);

progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => mousedown = true);
progress.addEventListener("mouseup", () => mousedown = false);

skipButton.forEach((btn) => btn.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) => range.addEventListener("mousemove", handleRangeUpdate));
