const music = [
  {
    name: "Lost in the City Lights",
    author: "Cosmo Sheldrake",
    img: "cover-1",
    src: "forest-lullaby-110624.mp3",
  },
  {
    name: "Forest Lullaby",
    author: "Lesfm",
    img: "cover-2",
    src: "lost-in-city-lights-145038.mp3",
  },
];

const time = document.querySelector(".time");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const musicImage = document.querySelector(".image");
const audio = document.querySelector("#main-audio");
const playPauseBtn = document.querySelector(".play-pause");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const progressArea = document.querySelector(".progress-area");
const progressBar = document.querySelector(".progress-bar");

function minutes(duration) {
  let min = Math.floor(duration / 60);
  let seg = Math.floor(duration % 60);
  seg = seg < 10 ? "0" + seg : seg;
  return min + ":" + seg;
}

let indexSong = 0;

function loadSong() {
  title.textContent = music[indexSong].name;
  author.textContent = music[indexSong].author;
  musicImage.src = `./src/assets/${music[indexSong].img}.png`;
  musicImage.alt = music[indexSong].img;
  audio.src = `./src/songs/${music[indexSong].src}`;
  audio.addEventListener("loadedmetadata", function () {
    time.lastElementChild.textContent = minutes(audio.duration);
  });
}

function play() {
  const icon = document.querySelector(".play-pause img");
  if (audio.paused) {
    audio.play();
    icon.src = "./src/assets/Pause_fill.svg";
  } else {
    audio.pause();
    icon.src = "./src/assets/play_fill.svg";
  }
}

function next() {
  if (music.length - 1 > indexSong) {
    indexSong++;
    loadSong();
    play();
  }
}

function prev() {
  if (indexSong > 0) {
    indexSong--;
    loadSong();
    play();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadSong();
  playPauseBtn.addEventListener("click", play);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
});

audio.addEventListener("timeupdate", function () {
  time.firstElementChild.textContent = minutes(audio.currentTime);
  let progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + "%";

  if (audio.currentTime === audio.duration) {
    next();
  }
});

progressArea.addEventListener("click", function (event) {
  let progress = (event.offsetX / progressArea.offsetWidth) * 100;
  progressBar.style.width = progress + "%";

  let currentTime = audio.duration * (progress / 100);
  audio.currentTime = currentTime;
});
