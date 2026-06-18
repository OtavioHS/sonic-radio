// ================================
// ELEMENTOS
// ================================
const playerColumn =
  document.querySelector(".player-column");

const radioLayout =
  document.querySelector(".radio-layout");
const audio = document.getElementById("audioPlayer");

const playBtn = document.getElementById("playBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const infoBox =
  document.querySelector(".info-box");

const infoHeader =
  document.getElementById("infoHeader");

const infoText =
  document.getElementById("infoText");

const cover = document.getElementById("cover");
const screenshotLayer =
  document.createElement("img");

screenshotLayer.className =
  "screenshot-layer";

document
  .querySelector(".player")
  .appendChild(screenshotLayer);

const screenshotMap = {
  "Angel Island Zone Act 1": {
    folder: "sonic3/angelisland1",
    prefix: "angelisland",
    total: 4
  }
};

const triviaMap = {
  //SONIC 1//
  "Sonic the Hedgehog (1991)|Green Hill Zone": `
    Masato Nakamura approached the
    <br>
    original project as if scoring
    <br>
    for a film!
    <br>
    <br>
    Drawing inspiration from soundtracks
    <br>
    of late 1980s films like Top Gun,
    <br>
    Flashdance and Dirty Dancing!
  `,
  "Sonic the Hedgehog (1991)|Marble Zone": `
    Originally, Marble Zone had UFOs
    <br>
    casually floating in the sky, but
    <br>
    were ultimately dropped in the final
    <br>
    game.
    <br>
    <br>
    However, accessing the Debug Mode in
    <br>
    the 2013 / Origins remaster allow them
    <br>
    to be reactivated!
  `,

  //SONIC 2//

  //SONIC 3//
  "Sonic 3 & Knuckles|Angel Island Zone Act 1": `
    Angel Island was the first stage
    where Knuckles appeared.
  `,

  "Escape from the City": `
    City Escape was inspired by San
    Francisco and features one of
    Sonic's most iconic levels.
  `

};

const lyricsMap = {
  "Sonic CD (JP)|Sonic - You Can Do Anything": [
    {
      time: 11,
      text: "10, 10: Here we go again!"
    },
    {
      time: 12,
      text: "9, 9: Don't fall behind!"
    },
    {
      time: 14,
      text: "8, 8: Say, don't be late!"
    },
    {
      time: 15.5,
      text: "7, 7: Destination heaven!"
    },
    {
      time: 17,
      text: "6, 5: Stay alive!"
    },
    {
      time: 19,
      text: "4, 3: Now it's you and me!"
    },
    {
      time: 20,
      text: "2, 1: We're gonna have fun"
    },
    {
      time: 21.8,
      text: "Say, blast off! Hey!"
    },
    {
      time: 23.7,
      text: "Excalibur. It's not that far"
    },
    {
      time: 25,
      text: "What do you make? Give and take"
    },
    {
      time: 26.7,
      text: "Going home. Time Zone"
    },
    {
      time: 28.2,
      text: "Check out Egg. He's never alone"
    },
    {
      time: 29.5,
      text: "Leather & Lace. Gettin' in place"
    },
    {
      time: 31,
      text: "What do you get? — Say, fast jet!"
    },
    {
      time: 32.8,
      text: "Doom Room — Cosmic Zoom"
    },
    {
      time: 34,
      text: "Heads up, Jake — It's Sonic Boom!"
    },
    {
      time: 36.2,
      text: "Toot-Toot Sonic Warrior (x2)"
    },
    {
      time: 39,
      text: "Your hour is near at hand"
    },
    {
      time: 41,
      text: "You've got the power to save the land"
    },
    {
      time: 44.8,
      text: "Take a little chance — Slip on through"
    },
    {
      time: 46,
      text: "You gotta survive no matter what you do"
    },
    {
      time: 47.5,
      text: "You gotta do for you"
    },
    {
      time: 48.1,
      text: "Toot-Toot Sonic Warrior (x2)"
    },
    {
      time: 51.2,
      text: "The power is in your mind"
    },
    {
      time: 53.5,
      text: "To save the planet and conquer time!"
    },
    {
      time: 61,
      text: "Toot-Toot Sonic Warrior"
    },
    {
      time: 62.2,
      text: "deep in space and time"
    },
    {
      time: 64.2,
      text: "Toot-Toot Sonic Warrior"
    },
    {
      time: 65.5,
      text: "forever in your mind"
    },
    {
      time: 67.2,
      text: "Nothing can survive the will to stay alive"
    },
    {
      time: 70,
      text: "'Cause if you try, you can do anything!"
    },
    {
      time: 73.8,
      text: "Toot-Toot Sonic Warrior"
    },
    {
      time: 75.2,
      text: "always takes a chance"
    },
    {
      time: 76.8,
      text: "Toot-Toot Sonic Warrior"
    },
    {
      time: 78.5,
      text: "never says 'he can't!'"
    },
    {
      time: 80,
      text: "Nothing can survive the will to stay alive"
    },
    {
      time: 82.5,
      text: "'Cause if you try, you can do anything!"
    },
  ],
  "Sonic CD (JP)|Cosmic Eternity - Believe in Yourself": [
  ],
  "Sonic CD (US)|Sonic Boom (Intro)": [
  ],
  "Sonic CD (US)|Sonic Boom (Ending)": [
  ],
  "Sonic 3D Blast (Saturn)|You're My Hero": [
  ],
  "Sonic R|Can You Feel the Sunshine?": [
  ],
  "Sonic R|Living in the City": [
  ],
  "Sonic R|Back in Time": [
  ],
  "Sonic R|Work It Out": [
  ],
  "Sonic R|Diamond in the Sky": [
  ],
  "Sonic R|Super Sonic Racing": [
  ],
  "Sonic R|You're My Number One": [
  ],
  "Sonic the Hedgehog: The Movie|Look-a-Like": [
  ],
  "Sonic Adventure|Open Your Heart": [
  ]
};

const trackTitle = document.getElementById("trackTitle");
const trackGame = document.getElementById("trackGame");
const trackComposer = document.getElementById("trackComposer");

const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");

const volumeSlider = document.getElementById("volumeSlider");

const autoplayToggle = document.getElementById("autoplayToggle");
const loopToggle = document.getElementById("loopToggle");
const randomToggle = document.getElementById("randomToggle");

const settingsToggle = document.getElementById("settingsToggle");
const settingsPanel = document.getElementById("settingsPanel");

const darkModeToggle = document.getElementById("darkModeToggle");
const layoutToggle = document.getElementById("layoutToggle");

const player = document.querySelector(".player");

const timeDisplay = document.getElementById("timeDisplay");
const defaultTitle = document.title;

// ================================
// FADE SYSTEM
// ================================

let isTransitioning = false;

const FADE_DURATION = 1200;
const FADE_INTERVAL = 50;

// ================================
// ESTADO
// ================================
let isLoop = false;
let endFadeTriggered = false;
let trackHistory = [];
let isGoingBack = false;
let screenshotInterval = null;
let screenshotIndex = 0;
let screenshotTimeout = null;
let screenshotFadeTimeout = null;
let useFadeTransitions = true;
let triviaAnimation;

let tracks = Array.from(document.querySelectorAll(".track"));

let currentIndex = 0;

let isAutoplay = true;
let isRandom = true;

// SWITCH TRACK (COM FADE)

function switchTrack(newIndex) {

  if (
    !isGoingBack &&
    currentIndex !== undefined &&
    currentIndex !== null &&
    currentIndex !== newIndex
  ) {

    trackHistory.push(currentIndex);

    if (trackHistory.length > 100) {
      trackHistory.shift();
    }

  }

  isGoingBack = false;

  currentIndex = newIndex;

  loadTrack(currentIndex);

  playTrack();

}

// ================================
// LOCAL STORAGE
// ================================

function saveSettings() {
  localStorage.setItem("sonicRadioSettings", JSON.stringify({
    autoplay: isAutoplay,
    random: isRandom,
    loop: isLoop,
    volume: audio.volume,
    darkMode: document.body.classList.contains("dark-mode"),
    horizontalLayout: player.classList.contains("horizontal")
  }));
}

// Info scroll
function startInfoScroll() {

  cancelAnimationFrame(
    triviaAnimation
  );

  const container =
    infoText;

  const maxScroll =
    container.scrollHeight -
    container.clientHeight;

  if (maxScroll <= 0) return;

  container.scrollTop = 0;

  function animate() {

    container.scrollTop += 0.08;

    if (
      container.scrollTop >= maxScroll
    ) {

      setTimeout(() => {

        container.scrollTop = 0;

        animate();

      }, 4000);

      return;
    }

    triviaAnimation =
      requestAnimationFrame(
        animate
      );

  }

  animate();

}

function loadSettings() {
  const saved = localStorage.getItem("sonicRadioSettings");
  if (!saved) return;

  let settings;

  try {
    settings = JSON.parse(saved);
  } catch {
    return;
  }

  if (typeof settings.autoplay === "boolean") {
    isAutoplay = settings.autoplay;
    if (autoplayToggle) autoplayToggle.checked = settings.autoplay;
  }

  if (typeof settings.random === "boolean") {
    isRandom = settings.random;
    if (randomToggle) randomToggle.checked = settings.random;
  }

  if (typeof settings.loop === "boolean") {
    isLoop = settings.loop;
    if (loopToggle) loopToggle.checked = settings.loop;
  }

  if (typeof settings.volume === "number") {
    audio.volume = settings.volume;
    if (volumeSlider) volumeSlider.value = settings.volume;
  }

  if (settings.darkMode) {
    document.body.classList.add("dark-mode");
    if (darkModeToggle) darkModeToggle.checked = true;
  }

  if (settings.horizontalLayout) {

    player.classList.add("horizontal");

    infoBox.classList.add(
      "hidden-horizontal"
    );

    playerColumn.classList.add(
      "horizontal-layout"
    );

    radioLayout.classList.add(
      "horizontal-layout"
    );

    settingsPanel.classList.add(
      "horizontal-mode"
    );

    if (layoutToggle) {
      layoutToggle.checked = true;
    }
  }
}

// Drag progress
let isDraggingProgress = false;
let dragPercent = 0;

// requestAnimationFrame
let rafId = null;

function startScreenshots(title) {

  clearInterval(screenshotInterval);
  clearTimeout(screenshotTimeout);
  clearTimeout(screenshotFadeTimeout);

  screenshotLayer.classList.remove(
    "visible"
  );

  const data = screenshotMap[title];

  if (!data) {
    return;
  }

  const shots = [];

  for (let i = 1; i <= data.total; i++) {

    shots.push(
      `assets/screenshots/${data.folder}/${data.prefix}${i}.webp`
    );

  }

  screenshotIndex = 0;

  // espera 15s antes da primeira screenshot
  screenshotTimeout = screenshotFadeTimeout = setTimeout(() => {

    // primeira screenshot
    screenshotLayer.src =
      shots[screenshotIndex];

    requestAnimationFrame(() => {
      screenshotLayer.classList.add(
        "visible"
      );
    });

    screenshotIndex++;

    // slideshow
    screenshotInterval = setInterval(() => {

      // fade out
      screenshotLayer.classList.remove(
        "visible"
      );

      screenshotFadeTimeout = setTimeout(() => {

        if (
          screenshotIndex >=
          shots.length
        ) {
          screenshotIndex = 0;
        }

        screenshotLayer.src =
          shots[screenshotIndex];

        screenshotIndex++;

        // fade in
        requestAnimationFrame(() => {

          screenshotLayer.classList.add(
            "visible"
          );

        });

      }, 1200);

    }, 15000);

  }, 15000);
}

function fitComposerText() {

  const composer = document.getElementById("trackComposer");

  composer.style.fontSize = "14px";

  while (
    composer.scrollWidth > composer.clientWidth &&
    parseFloat(
      getComputedStyle(composer).fontSize
    ) > 10
  ) {

    const currentSize =
      parseFloat(
        getComputedStyle(composer).fontSize
      );

    composer.style.fontSize =
      `${currentSize - 0.5}px`;
  }
}

function fitComposerText() {

  trackComposer.style.fontSize = "10px";

  while (
    trackComposer.scrollWidth >
    trackComposer.clientWidth &&
    parseFloat(
      getComputedStyle(trackComposer).fontSize
    ) > 10
  ) {

    const currentSize =
      parseFloat(
        getComputedStyle(trackComposer).fontSize
      );

    trackComposer.style.fontSize =
      `${currentSize - 0.5}px`;
  }

}

// ================================
// FUNÇÃO CARREGAR MÚSICA
// ================================


function loadTrack(index) {
  const selected = tracks[index];

  if (!selected) return;
  endFadeTriggered = false;

  audio.src = selected.dataset.src;

  clearInterval(screenshotInterval);
  clearTimeout(screenshotTimeout);
  clearTimeout(screenshotFadeTimeout);

  screenshotLayer.classList.remove(
    "visible"
  );

  cover.classList.add("changing");

  screenshotFadeTimeout = setTimeout(() => {

    cover.src =
      selected.dataset.cover;

    cover.onload = () => {

      cover.classList.remove(
        "changing"
      );

      startScreenshots(
        selected.dataset.title
      );

    };

  }, 180);

  trackGame.textContent =
    selected.dataset.game;

  trackComposer.textContent =
    selected.dataset.composer || "";

  fitComposerText();

  document.title =
    "🎵 " +
    selected.dataset.title +
    " | " +
    selected.dataset.game;

  const infoKey =
    `${selected.dataset.game}|${selected.dataset.title}`;

  const trivia =
    triviaMap[infoKey];

  const lyrics =
    lyricsMap[infoKey];


  // ================================
  // PRIORIDADE: LYRICS
  // ================================
  const isHorizontal =
    player.classList.contains("horizontal");
  if (lyrics) {

    infoHeader.textContent =
      "LYRICS";

    infoText.innerHTML =
      lyrics.map((line, index) => `
      <div
        class="lyric-line"
        data-index="${index}"
        data-time="${line.time}"
      >
        ${line.text}
      </div>
    `).join("");

    infoBox.classList.add(
      "visible"
    );

  }


  // ================================
  // SENÃO: TRIVIA
  // ================================

  else if (trivia) {

    infoHeader.textContent =
      "DID YOU KNOW?";

    infoText.innerHTML =
      trivia;

    infoBox.classList.add(
      "visible"
    );

    setTimeout(() => {
      startInfoScroll();
    }, 500);

  }


  // ================================
  // NADA
  // ================================

  else {

    infoBox.classList.remove(
      "visible"
    );

    cancelAnimationFrame(
      triviaAnimation
    );

  }

  // reset progress visual
  progress.style.width = "0%";

  if (timeDisplay) {
    timeDisplay.textContent =
      "0:00 / 0:00";
  }

  function fitComposerText() {

    const composer =
      document.getElementById(
        "trackComposer"
      );

    let size = 10;

    composer.style.fontSize =
      size + "px";

    while (

      composer.scrollWidth >
      composer.clientWidth

      &&

      size > 6

    ) {

      size--;

      composer.style.fontSize =
        size + "px";

    }

  }

  // ================================
  // CORES DA PROGRESS BAR
  // ================================

  progress.classList.remove(
    "good-future",
    "bad-future",
    "past",
    "new-moon",
    "awakened",
    "super-sonic",
    "diamond-sky",

    "world-morning",
    "world-day",
    "world-sunset",
    "world-night",

    "crisis-flames",
    "crisis-skyscraper",
    "crisis-whirlwind",
    "crisis-tornado",

    "shadow-theme"
  );

  if (
    selected.dataset.title.includes(
      "(Good Future)"
    )
  ) {
    progress.classList.add(
      "good-future"
    );
  }

  if (
    selected.dataset.title.includes(
      "(Bad Future)"
    )
  ) {
    progress.classList.add(
      "bad-future"
    );
  }

  if (
    selected.dataset.title.includes(
      "(Past)"
    )
  ) {
    progress.classList.add("past");
  }
  if (
    selected.dataset.src.includes(
      "amazingarena.flac"
    )
  ) {
    progress.classList.add("new-moon");
  }
  if (
    selected.dataset.src.includes(
      "supersonicracing"
    )
  ) {
    progress.classList.add(
      "super-sonic"
    );
  }
  if (
    selected.dataset.src.includes(
      "diamondinthesky"
    )
  ) {
    progress.classList.add(
      "diamond-sky"
    );
  }

  // ================================
  // THEMES
  // ================================

  const zoneThemes = [
    {
      src: "greenhill",
      games: [
        "Sonic the Hedgehog (1991)",
        "Sonic the Hedgehog (8-bit)",
        "Sonic Adventure 2",
        "Sonic Battle",
        "Sonic Mania"
      ],
      className: "greenhill-mode"
    },
    {
      src: "marblezone",
      games: [
        "Sonic the Hedgehog (1991)"
      ],
      className: "marble-mode"
    },

    {
      src: "springyard",
      className: "springyard-mode"
    },

    // ================================
    // LABYRINTH (16-BIT)
    // ================================

    {
      src: "labyrinth",
      games: [
        "Sonic the Hedgehog (1991)"
      ],
      className: "labyrinth-mode"
    },

    {
      src: "starlight",
      games: [
        "Sonic the Hedgehog (1991)"
      ],
      className: "starlight-mode"
    },

    {
      src: "scrapbrain",
      games: [
        "Sonic the Hedgehog (1991)"
      ],
      className: "scrapbrain-mode"
    },

    {
      src: "specialstage",
      games: [
        "Sonic the Hedgehog (1991)"
      ],
      className: "specialstage-mode"
    },

    {
      src: "boss",
      games: [
        "Sonic the Hedgehog (1991)"
      ],
      className: "boss-mode"
    },

    {
      src: "finalzone",
      games: [
        "Sonic the Hedgehog (1991)"
      ],
      className: "finalzone-mode"
    },
    // ================================
    // BRIDGE ZONE
    // ================================

    {
      src: "bridge",
      games: [
        "Sonic the Hedgehog (8-bit)"
      ],
      className: "bridge-mode"
    },

    // ================================
    // JUNGLE ZONE
    // ================================

    {
      src: "jungle",
      games: [
        "Sonic the Hedgehog (8-bit)"
      ],
      className: "jungle-mode"
    },

    // ================================
    // LABYRINTH (8-BIT)
    // ================================

    {
      src: "labyrinth",
      games: [
        "Sonic the Hedgehog (8-bit)"
      ],
      className: "labyrinth-8bit-mode"
    },

    // ================================
    // SCRAP BRAIN (8-BIT)
    // ================================

    {
      src: "scrapbrain",
      games: [
        "Sonic the Hedgehog (8-bit)"
      ],
      className: "scrapbrain-8bit-mode"
    },

    // ================================
    // SKY BASE
    // ================================

    {
      src: "skybase",
      games: [
        "Sonic the Hedgehog (8-bit)"
      ],
      className: "skybase-mode"
    },

    // ================================
    // SONIC 2
    // ================================

    {
      src: "emeraldhill",
      games: [
        "Sonic the Hedgehog 2"
      ],
      className: "emeraldhill-mode"
    },

    {
      src: "chemicalplant",
      games: [
        "Sonic the Hedgehog 2"
      ],
      className: "chemicalplant-mode"
    },

    {
      src: "aquaticruin",
      games: [
        "Sonic the Hedgehog 2"
      ],
      className: "aquaticruin-mode"
    },

    {
      src: "casinonight",
      games: [
        "Sonic the Hedgehog 2"
      ],
      className: "casinonight-mode"
    },

    {
      src: "hilltop",
      games: [
        "Sonic the Hedgehog 2"
      ],
      className: "hilltop-mode"
    },

    {
      src: "mysticcave",
      games: [
        "Sonic the Hedgehog 2"
      ],
      className: "mysticcave-mode"
    },

    {
      src: "hiddenpalace",
      games: [
        "Sonic the Hedgehog 2"
      ],
      className: "hiddenpalace-mode"
    },

    {
      src: "oilocean",
      games: [
        "Sonic the Hedgehog 2"
      ],
      className: "oilocean-mode"
    },

    {
      src: "metropolis",
      games: [
        "Sonic the Hedgehog 2"
      ],
      className: "metropolis-mode"
    },

    {
      src: "protopalace",
      games: [
        "Sonic the Hedgehog 2"
      ],
      className: "protopalace-mode"
    },



    // ================================
    // SONIC GENERATIONS
    // ================================

    {
      src: "greenhill1",
      games: [
        "Sonic Generations"
      ],
      className: "greenhillgens1-mode"
    },

    {
      src: "greenhill2",
      games: [
        "Sonic Generations"
      ],
      className: "greenhillgens2-mode"
    }
  ];


  // ================================
  // REMOVE MODES
  // ================================

  player.classList.remove(
    "shadow-mode",
    "super-sonic-mode",
    ...zoneThemes.map(
      theme => theme.className
    )
  );

  // ================================
  // APPLY THEMES
  // ================================

  zoneThemes.forEach(theme => {

    const srcMatch =
      selected.dataset.src.includes(
        theme.src
      );

    const gameMatch =

      // sem games = aceita tudo
      !theme.games ||

      // procura algum jogo compatível
      theme.games.some(game =>
        selected.dataset.game.includes(
          game
        )
      );

    if (srcMatch && gameMatch) {

      player.classList.add(
        theme.className
      );

    }

  });

  // ================================
  // SUPER SONIC RACING
  // ================================

  if (
    selected.dataset.src.includes(
      "supersonicracing"
    )
  ) {

    player.classList.add(
      "super-sonic-mode"
    );

  }

  // ================================
  // SHADOW THE HEDGEHOG
  // ================================

  if (
    selected.dataset.game.includes(
      "Shadow the Hedgehog"
    )
  ) {

    player.classList.add(
      "shadow-mode"
    );

    progress.classList.add(
      "shadow-theme"
    );

  }

  // ================================
  // TEXTO SCROLL
  // ================================

  trackTitle.textContent = selected.dataset.title;
  trackTitle.setAttribute("data-title", selected.dataset.title);

  setTimeout(checkTitleOverflow, 100);

  // ================================
  // TRACK ATIVA
  // ================================

  document
    .querySelector(".track.active")
    ?.classList.remove("active");

  selected.classList.add("active");
}

// ================================
// PLAY / PAUSE
// ================================

function playTrack() {
  audio.play().catch(() => { });

  playBtn.innerHTML =
    '<i class="fa-solid fa-pause"></i>';

  document.title =
    "🎵 " +
    trackTitle.textContent +
    " | " +
    trackGame.textContent;
}

function pauseTrack() {
  audio.pause();

  playBtn.innerHTML =
    '<i class="fa-solid fa-play"></i>';

  document.title = defaultTitle;
}

playBtn.addEventListener(
  "click",
  () => {
    audio.paused
      ? playTrack()
      : pauseTrack();
  }
);

// ================================
// FADE TROCA DE MÚSICA
// ================================

function fadeToTrack(newIndex) {

  if (isTransitioning) return;

  const wasPlaying =
    !audio.paused;

  isTransitioning = true;

  const originalVolume =
    volumeSlider
      ? parseFloat(volumeSlider.value)
      : audio.volume;

  let currentVolume =
    audio.volume;

  const fadeOut =
    setInterval(() => {

      currentVolume -=
        originalVolume /
        (
          FADE_DURATION /
          FADE_INTERVAL
        );

      if (
        currentVolume <= 0
      ) {

        clearInterval(
          fadeOut
        );

        audio.volume = 0;

        currentIndex =
          newIndex;

        loadTrack(
          currentIndex
        );

        if (wasPlaying) {

          audio.play()
            .then(() => {
              isTransitioning = false;
            })
            .catch(error => {

              console.error(error);

              playBtn.innerHTML =
                '<i class="fa-solid fa-play"></i>';

              isTransitioning = false;
            });

        } else {

          isTransitioning = false;

        }

        let fadeInVolume = 0;

        audio.volume = 0;

        const fadeIn =
          setInterval(() => {

            fadeInVolume +=
              originalVolume /
              (
                FADE_DURATION /
                FADE_INTERVAL
              );

            if (
              fadeInVolume >=
              originalVolume
            ) {

              fadeInVolume =
                originalVolume;

              clearInterval(
                fadeIn
              );

              isTransitioning =
                false;

            }

            audio.volume =
              fadeInVolume;

          }, FADE_INTERVAL);

      } else {

        audio.volume =
          currentVolume;

      }

    }, FADE_INTERVAL);

}

function getActiveTracks() {
  return tracks.filter(track =>
    !track.classList.contains("excluded")
  );
}

// ================================
// NEXT / PREV
// ================================

function nextTrack() {
  const activeTracks = getActiveTracks();

  if (activeTracks.length === 0) return;

  let targetIndex;

  if (isRandom) {

    let randomIndex;

    do {
      randomIndex = Math.floor(
        Math.random() * activeTracks.length
      );
    } while (
      activeTracks[randomIndex] === tracks[currentIndex] &&
      activeTracks.length > 1
    );

    targetIndex =
      tracks.indexOf(
        activeTracks[randomIndex]
      );

  } else {

    targetIndex = currentIndex;

    do {
      targetIndex++;

      if (targetIndex >= tracks.length) {
        targetIndex = 0;
      }

    } while (
      tracks[targetIndex].classList.contains("excluded")
    );

  }

  switchTrack(targetIndex);
}

function prevTrack() {

  if (audio.currentTime > 1) {
    audio.currentTime = 0;
    return;
  }

  if (trackHistory.length > 0) {

    isGoingBack = true;

    const previousIndex =
      trackHistory.pop();

    switchTrack(previousIndex);

    return;
  }

  audio.currentTime = 0;
}

nextBtn.addEventListener(
  "click",
  nextTrack
);

prevBtn.addEventListener(
  "click",
  prevTrack
);

document.querySelectorAll(".track").forEach(track => {
  const btn = document.createElement("span");
  btn.classList.add("toggle-btn");
  btn.textContent = "−";

  btn.addEventListener("click", (e) => {
    e.stopPropagation();

    track.classList.toggle("excluded");

    if (track.classList.contains("excluded")) {
      btn.textContent = "+";

      if (tracks[currentIndex] === track) {
        nextTrack();
      }

    } else {
      btn.textContent = "−";
    }
  });

  track.appendChild(btn);
});

document.querySelectorAll(".game").forEach(game => {

  const gameTitle =
    game.querySelector(".game-title");

  const gameTracks =
    game.querySelectorAll(".track");

  const gameBtn =
    document.createElement("span");

  gameBtn.classList.add(
    "game-toggle-btn"
  );

  gameBtn.textContent = "−";

  gameBtn.addEventListener(
    "click",
    (e) => {

      e.stopPropagation();

      const excludeAll =
        !Array.from(gameTracks).every(
          track =>
            track.classList.contains(
              "excluded"
            )
        );

      gameTracks.forEach(track => {

        const trackBtn =
          track.querySelector(
            ".toggle-btn"
          );

        if (excludeAll) {

          track.classList.add(
            "excluded"
          );

          if (trackBtn) {
            trackBtn.textContent = "+";
          }

        } else {

          track.classList.remove(
            "excluded"
          );

          if (trackBtn) {
            trackBtn.textContent = "−";
          }

        }

      });

      gameBtn.textContent =
        excludeAll ? "+" : "−";

      // se a track atual foi excluída
      if (
        tracks[currentIndex]
          ?.classList.contains(
            "excluded"
          )
      ) {
        nextTrack();
      }

    }
  );

  gameTitle.appendChild(
    gameBtn
  );

});

// ================================
// CLIQUE NAS MÚSICAS
// ================================

document.querySelector(".playlist")
  .addEventListener("click", (e) => {

    const track = e.target.closest(".track");

    if (!track) return;

    if (track.classList.contains("excluded")) return;

    const clickedIndex =
      tracks.indexOf(track);

    if (clickedIndex === currentIndex) {
      return;
    }

    switchTrack(clickedIndex);

  });

// ================================
// AUTOPLAY / LOOP / RANDOM
// ================================

audio.addEventListener("ended", () => {

  if (isLoop) return;

  if (!isAutoplay) return;

  if (useFadeTransitions) {

    fadeToNextTrack();

  } else {

    nextTrack();

  }

});

// LOOP COM FADE
audio.addEventListener("timeupdate", () => {

  if (!isLoop) return;

  if (isTransitioning) return;

  if (isNaN(audio.duration)) return;

  const remaining =
    audio.duration -
    audio.currentTime;

  if (
    remaining <= 1.5 &&
    !isTransitioning
  ) {

    fadeLoopTrack();

  }

});

if (autoplayToggle) {
  autoplayToggle.addEventListener(
    "change",
    () => {

      isAutoplay =
        autoplayToggle.checked;

      if (isAutoplay && isLoop) {

        isLoop = false;
        loopToggle.checked = false;

      }

      saveSettings();
    }
  );
}

if (loopToggle) {
  loopToggle.addEventListener(
    "change",
    () => {

      isLoop =
        loopToggle.checked;

      if (isLoop) {

        isAutoplay = false;
        isRandom = false;

        autoplayToggle.checked = false;
        randomToggle.checked = false;

      }

      saveSettings();

    }
  );
}

if (randomToggle) {
  randomToggle.addEventListener(
    "change",
    () => {

      isRandom =
        randomToggle.checked;

      if (isRandom && isLoop) {

        isLoop = false;
        loopToggle.checked = false;

      }

      saveSettings();

    }
  );
}

function fadeToNextTrack() {

  if (isTransitioning) return;

  isTransitioning = true;

  const targetVolume =
    parseFloat(volumeSlider.value);

  let currentVolume =
    audio.volume;

  const fadeOut =
    setInterval(() => {

      currentVolume -= 0.03;

      if (currentVolume <= 0) {

        clearInterval(fadeOut);

        const activeTracks =
          getActiveTracks();

        let targetIndex;

        if (isRandom) {

          let randomIndex;

          do {

            randomIndex =
              Math.floor(
                Math.random() *
                activeTracks.length
              );

          } while (

            activeTracks[randomIndex] ===
            tracks[currentIndex]

            &&

            activeTracks.length > 1

          );

          targetIndex =
            tracks.indexOf(
              activeTracks[randomIndex]
            );

        } else {

          targetIndex =
            currentIndex + 1;

          if (
            targetIndex >=
            tracks.length
          ) {
            targetIndex = 0;
          }

        }

        currentIndex =
          targetIndex;

        loadTrack(currentIndex);

        audio.volume = 0;

        audio.play().then(() => {

          let fadeInVolume = 0;

          const fadeIn =
            setInterval(() => {

              fadeInVolume += 0.03;

              if (
                fadeInVolume >=
                targetVolume
              ) {

                audio.volume =
                  targetVolume;

                clearInterval(fadeIn);

                isTransitioning = false;

                return;
              }

              audio.volume =
                fadeInVolume;

            }, 50);

        });

      } else {

        audio.volume =
          currentVolume;

      }

    }, 50);

}

function fadeLoopTrack() {

  if (isTransitioning) return;

  isTransitioning = true;

  const targetVolume =
    parseFloat(volumeSlider.value);

  let currentVolume =
    audio.volume;

  const fadeOut =
    setInterval(() => {

      currentVolume -= 0.03;

      if (currentVolume <= 0) {

        clearInterval(fadeOut);

        audio.volume = 0;

        audio.currentTime = 0;

        audio.play().then(() => {

          let fadeInVolume = 0;

          const fadeIn =
            setInterval(() => {

              fadeInVolume += 0.03;

              if (
                fadeInVolume >= targetVolume
              ) {

                audio.volume =
                  targetVolume;

                clearInterval(fadeIn);

                isTransitioning = false;

                return;

              }

              audio.volume =
                fadeInVolume;

            }, 50);

        });

      } else {

        audio.volume =
          currentVolume;

      }

    }, 50);

}

function updateLyricsHighlight() {

  const selected =
    tracks[currentIndex];

  const lyricsKey =
    `${selected.dataset.game}|${selected.dataset.title}`;

  const lyrics =
    lyricsMap[lyricsKey];

  if (!lyrics) return;

  const currentTime =
    audio.currentTime;

  let activeIndex = -1;

  lyrics.forEach((line, index) => {

    if (currentTime >= line.time) {
      activeIndex = index;
    }

  });

  document
    .querySelectorAll(".lyric-line")
    .forEach((line, index) => {

      line.classList.toggle(
        "active",
        index === activeIndex
      );

      if (index === activeIndex) {

        line.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }

    });

}

// ================================
// PROGRESS BAR
// ================================

audio.addEventListener(
  "timeupdate",
  () => {

    const {
      duration,
      currentTime,
    } = audio;

    if (!duration) return;

    updateLyricsHighlight();

    // ================================
    // AUTO FADE BEFORE END
    // ================================

    if (
      useFadeTransitions &&
      !isTransitioning &&
      duration - currentTime <= 3
    ) {

      if (isLoop) {

        fadeLoopTrack();

      } else {

        fadeToNextTrack();

      }

    }

    // ================================
    // PROGRESS WIDTH
    // ================================

    const percent =
      isDraggingProgress
        ? dragPercent
        : (currentTime / duration) * 100;

    progress.style.width =
      `${percent}%`;

    // ================================
    // TIME DISPLAY
    // ================================

    const shownTime =
      isDraggingProgress
        ? (dragPercent / 100) *
        duration
        : currentTime;

    if (timeDisplay) {

      timeDisplay.textContent =
        formatTime(shownTime) +
        " / " +
        formatTime(duration);

    }

    // ================================
    // AMAZING ARENA TRANSITION
    // ================================

    if (
      audio.src.includes(
        "amazingarena.flac"
      )
    ) {

      if (currentTime >= 30) {

        progress.classList.add(
          "awakened"
        );

      } else {

        progress.classList.remove(
          "awakened"
        );

      }

    }

    // ================================
    // WORLD ENTRANCE TRANSITIONS
    // ================================

    if (
      audio.src.includes(
        "worldentrance"
      )
    ) {

      // remove fases anteriores
      progress.classList.remove(
        "world-morning",
        "world-day",
        "world-sunset",
        "world-night"
      );

      // ================================
      // MORNING
      // 0:00 → 0:49
      // ================================

      if (currentTime < 50) {

        progress.classList.add(
          "world-morning"
        );

      }

      // ================================
      // DAY
      // 0:50 → 2:16
      // ================================

      else if (currentTime < 137) {

        progress.classList.add(
          "world-day"
        );

      }

      // ================================
      // SUNSET
      // 2:17 → 3:53
      // ================================

      else if (currentTime < 234) {

        progress.classList.add(
          "world-sunset"
        );

      }

      // ================================
      // NIGHT
      // 3:54 → END
      // ================================

      else {

        progress.classList.add(
          "world-night"
        );

      }

    }

    // ================================
    // CRISIS CITY TRANSITIONS
    // ================================

    if (
      audio.src.includes(
        "crisiscity"
      )
    ) {

      progress.classList.remove(
        "crisis-flames",
        "crisis-skyscraper",
        "crisis-whirlwind",
        "crisis-tornado"
      );

      // THE FLAMES
      if (currentTime < 86) {

        progress.classList.add(
          "crisis-flames"
        );

      }

      // SKYSCRAPER
      else if (currentTime < 204) {

        progress.classList.add(
          "crisis-skyscraper"
        );

      }

      // WHIRLWIND
      else if (currentTime < 300) {

        progress.classList.add(
          "crisis-whirlwind"
        );

      }

      // THE TORNADO
      else {

        progress.classList.add(
          "crisis-tornado"
        );

      }

    }

  }
);

// ================================
// SET PROGRESS
// ================================

function setProgressPosition(
  clientX,
  updateAudio = true
) {
  const rect =
    progressContainer.getBoundingClientRect();

  let offsetX =
    clientX - rect.left;

  offsetX = Math.max(
    0,
    Math.min(offsetX, rect.width)
  );

  const percent =
    (offsetX / rect.width) * 100;

  dragPercent = percent;

  progress.style.width =
    `${percent}%`;

  if (
    audio.duration &&
    updateAudio
  ) {
    audio.currentTime =
      (percent / 100) *
      audio.duration;
  }
}

function checkTitleOverflow() {
  trackTitle.classList.remove("scrolling");
  void trackTitle.offsetWidth;

  const wrapper = trackTitle.parentElement;
  if (!wrapper) return;

  const availableWidth = wrapper.clientWidth;
  const textWidth = trackTitle.scrollWidth;

  if (textWidth > availableWidth) {
    trackTitle.classList.add("scrolling");
  }
}

// ================================
// DESKTOP DRAG
// ================================

progressContainer.addEventListener(
  "mousedown",
  (e) => {
    isDraggingProgress = true;

    setProgressPosition(
      e.clientX,
      false
    );
  }
);

document.addEventListener(
  "mousemove",
  (e) => {
    if (!isDraggingProgress)
      return;

    if (rafId) return;

    rafId =
      requestAnimationFrame(() => {
        setProgressPosition(
          e.clientX,
          false
        );

        rafId = null;
      });
  }
);

document.addEventListener(
  "mouseup",
  (e) => {
    if (!isDraggingProgress)
      return;

    setProgressPosition(
      e.clientX,
      true
    );

    isDraggingProgress = false;
  }
);

// ================================
// MOBILE DRAG
// ================================

progressContainer.addEventListener(
  "touchstart",
  (e) => {
    isDraggingProgress = true;

    setProgressPosition(
      e.touches[0].clientX,
      false
    );
  }
);

document.addEventListener(
  "touchmove",
  (e) => {
    if (!isDraggingProgress)
      return;

    if (rafId) return;

    rafId =
      requestAnimationFrame(() => {
        setProgressPosition(
          e.touches[0].clientX,
          false
        );

        rafId = null;
      });
  }
);

document.addEventListener(
  "touchend",
  (e) => {
    if (!isDraggingProgress)
      return;

    const touch =
      e.changedTouches[0];

    setProgressPosition(
      touch.clientX,
      true
    );

    isDraggingProgress = false;
  }
);

// ================================
// VOLUME
// ================================

if (volumeSlider) {
  volumeSlider.addEventListener(
    "input",
    () => {
      audio.volume =
        volumeSlider.value;

      saveSettings();
    }
  );
}

// ================================
// TECLADO
// ================================

document.addEventListener(
  "keydown",
  (e) => {
    // evita conflito em inputs
    const tag =
      document.activeElement.tagName;

    if (
      tag === "INPUT" ||
      tag === "TEXTAREA"
    ) {
      return;
    }

    if (e.code === "ArrowRight") {
      audio.currentTime += 5;
    }

    if (e.code === "ArrowLeft") {
      audio.currentTime -= 5;
    }

    if (e.code === "Space") {
      e.preventDefault();

      audio.paused
        ? playTrack()
        : pauseTrack();
    }
  }
);

// ================================
// FORMATAR TEMPO
// ================================

function formatTime(time) {
  const minutes = Math.floor(
    time / 60
  );

  const seconds = Math.floor(
    time % 60
  );

  return (
    minutes +
    ":" +
    (seconds < 10
      ? "0" + seconds
      : seconds)
  );
}

// ================================
// ACCORDION MULTI-NÍVEL
// ================================

document
  .querySelectorAll(
    ".collection-title"
  )
  .forEach((title) => {
    title.addEventListener(
      "click",
      () => {
        document
          .querySelectorAll(
            ".collection-content"
          )
          .forEach((content) => {
            if (
              content !==
              title.nextElementSibling
            ) {
              content.classList.remove(
                "open"
              );
            }
          });

        title.nextElementSibling.classList.toggle(
          "open"
        );
      }
    );
  });

document
  .querySelectorAll(".disc-title")
  .forEach((title) => {
    title.addEventListener(
      "click",
      () => {
        const parent =
          title.closest(
            ".collection-content"
          );

        parent
          .querySelectorAll(
            ".disc-content"
          )
          .forEach((content) => {
            if (
              content !==
              title.nextElementSibling
            ) {
              content.classList.remove(
                "open"
              );
            }
          });

        title.nextElementSibling.classList.toggle(
          "open"
        );
      }
    );
  });

document
  .querySelectorAll(".game-title")
  .forEach((title) => {
    title.addEventListener("click", () => {

      const tracksEl = title.nextElementSibling;
      const parent = title.closest(".disc-content");

      // fecha outros
      parent.querySelectorAll(".tracks").forEach((el) => {
        if (el !== tracksEl) {
          el.style.maxHeight = "0px";
          el.classList.remove("open");
        }
      });

      // se já estiver aberto → fechar
      if (tracksEl.classList.contains("open")) {

        tracksEl.style.maxHeight = tracksEl.scrollHeight + "px";

        requestAnimationFrame(() => {
          tracksEl.style.maxHeight = "0px";
        });

        tracksEl.classList.remove("open");

      } else {

        tracksEl.classList.add("open");

        // força cálculo antes de animar
        tracksEl.style.maxHeight = tracksEl.scrollHeight + "px";

      }

    });
  });

document
  .querySelectorAll(
    ".subgame-title"
  )
  .forEach((title) => {
    title.addEventListener(
      "click",
      () => {
        const parent =
          title.closest(".tracks");

        parent
          .querySelectorAll(
            ".subtracks"
          )
          .forEach((subtracks) => {
            if (
              subtracks !==
              title.nextElementSibling
            ) {
              subtracks.classList.remove(
                "open"
              );
            }
          });

        title.nextElementSibling.classList.toggle(
          "open"
        );
      }
    );
  });

// ================================
// SETTINGS
// ================================

if (
  settingsToggle &&
  settingsPanel
) {
  settingsToggle.addEventListener(
    "click",
    () => {
      settingsPanel.classList.toggle(
        "open"
      );
    }
  );
}

if (darkModeToggle) {
  darkModeToggle.addEventListener(
    "change",
    () => {
      document.body.classList.toggle(
        "dark-mode",
        darkModeToggle.checked
      );

      saveSettings();
    }
  );
}

if (layoutToggle) {
  layoutToggle.addEventListener("change", () => {

    player.classList.toggle(
      "horizontal",
      layoutToggle.checked
    );

    playerColumn.classList.toggle(
      "horizontal-layout",
      layoutToggle.checked
    );

    radioLayout.classList.toggle(
      "horizontal-layout",
      layoutToggle.checked
    );

    settingsPanel.classList.toggle(
      "horizontal-mode",
      layoutToggle.checked
    );

    // NOVO
    if (layoutToggle.checked) {

      infoBox.classList.add(
        "hidden-horizontal"
      );

    } else {

      infoBox.classList.remove(
        "hidden-horizontal"
      );

    }

    setTimeout(checkTitleOverflow, 350);

    saveSettings();

  });
}
// ================================
// RESIZE CHECK (overflow)
// ================================

window.addEventListener("resize", () => {
  checkTitleOverflow();
});

// ================================
// INICIAR
// ================================

audio.volume = 0.5;

if (volumeSlider) {
  volumeSlider.value = 0.5;
}

loadSettings();

if (isRandom) {

  const activeTracks = getActiveTracks();

  if (activeTracks.length > 0) {

    const randomTrack =
      activeTracks[
      Math.floor(
        Math.random() *
        activeTracks.length
      )
      ];

    currentIndex =
      tracks.indexOf(randomTrack);

  }

}

loadTrack(currentIndex);

setTimeout(
  checkTitleOverflow,
  200
);
