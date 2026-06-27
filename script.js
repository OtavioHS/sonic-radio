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
  the 2013 / Origins remaster allows
  <br>
  them to be reactivated!

  <div class="marble-ufos">
    <img src="assets/background/marble-ufo.gif">
    <img src="assets/background/marble-ufo.gif">
    <img src="assets/background/marble-ufo.gif">
  </div>
`,
  "Sonic the Hedgehog (2013)|Marble Zone (Remastered)": `
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
    the 2013 / Origins remaster allows
    <br>
    them to be reactivated!

  <div class="marble-ufos">
    <img src="assets/background/marble-ufo.gif">
    <img src="assets/background/marble-ufo.gif">
    <img src="assets/background/marble-ufo.gif">
  </div>
  `,
  "Sonic the Hedgehog (1991)|Spring Yard Zone": `
    The zone was originally called
    <br>
    Sparkling Zone!
    <br>
    <br>
    Rather than an urban city with
    <br>
    mountains in the back, it was
    <br>
    supposed to be luminous Las Vegas
    <br>
    like casino with neon signs and
    <br>
    a star-lit sky!
    <br>
    <br>
    Including an unused sign that read
    <br>
    "Let's Go" in cursive, never to be
    <br>
    properly implemented.

    <div class="springyard-letsgo">
      <img src="assets/background/springyard-letsgo.gif">
    </div>
  `,
  "Sonic the Hedgehog (1991)|Labyrinth Zone": `
    The zone was originally supposed
    <br>
    to have an unique item: Goggles!
    <br>
    <br>
    So, rather than catching bubbles
    <br>
    to survive the mortal labyrinth
    <br>
    Sonic would breath underwater
    <br>
    with one of these!
    <br>
    <br>
    The item is available inside the
    <br>
    Debug Mode of 2013 version as well
    <br>
    and acts like a Shield with a special
    <br>
    property.

    <div class="goggles-sonic">
      <img src="assets/background/goggles-sonic.gif">
    </div>
  `,
  "Sonic the Hedgehog (1991)|Star Light Zone": `
    This is the only Zone in Sonic 1
    <br>
    to feature elements not only in
    <br>
    the background, but also at the
    <br>
    foreground!

    <div class="starlight-tile">
      <img src="assets/background/starlight-tile.gif">
    </div>
  `,
  "Sonic the Hedgehog (1991)|Scrap Brain Zone": `
    The Act 2 of this Zone contains
    <br>
    a secret path only accessible if
    <br>
    the player collects & manages to
    <br>
    keep 50 rings!
    <br>
    <br>
    Said secret path is located at a
    <br>
    very specific Warp Tube! Look out!

    <div class="scrapbrain-teleporter">
      <img src="assets/background/scrapbrain-teleporter.gif">
    </div>
  `,
  "Sonic the Hedgehog (1991)|Special Stage": `
    These stages were mechanically
    <br>
    inspired by the game Cameltry on
    <br>
    the NES!
    <br>
    <br>
    Though, unlike Cameltry you don't
    <br>
    rotate the stage, but rather have
    <br>
    full control of Sonic!

    <div class="specialstage-items">
      <img src="assets/background/specialstage-items.gif">
    </div>
  `,

  //SONIC 2//
  "Sonic the Hedgehog 2|Emerald Hill Zone": `
    Emerald Hill's name is actually
    <br>
    taken from a neighborhood south
    <br>
    of San Francisco which is called
    <br>
    Emerald Hills!
    <br>
    <br>
    Upon noticing the name during a
    <br>
    location test, the team decided
    <br>
    to use it in the final game.
  `,
  "Sonic the Hedgehog 2|Chemical Plant Zone": `
    There is actually a way to avoid
    <br>
    the infamous underwater sequence
    <br>
    in this Zone's Act 2!
    <br>
    <br>
    All the player has to do is keep
    <br>
    an eye out once they're launched
    <br>
    upwards midway through the level.
    <br>
    <br>
    After passing by the moving blocks
    <br>
    instead of rolling right into the
    <br>
    Dash Pad, the player must either
    <br>
    jump over it or brake once triggering
    <br>
    it.
    <br>
    <br>
    Then go left and they'll find a well
    <br>
    hidden passage all the way to the boss!
    <div class="bubble-timer">
      <img src="assets/background/bubble-timer.gif">
    </div>
  `,
  "Sonic the Hedgehog 2|Aquatic Ruin Zone": `
    In the Simon Wai Prototype, this
    <br>
    Zone had an entire different name:
    <br>
    Neo Green Hill Zone!
    <br>
    <br>
    A name later used to designate
    <br>
    Sonic Advance's first Zone!
    <br>
    <br>
    Coincidentally this Zone was also
    <br>
    the very first in the Simon Wai
    <br>
    Prototype!
  `,
  "Sonic the Hedgehog 2|Casino Night Zone": `
    Early in development, this Zone
    <br>
    actually had a completely different
    <br>
    color palette!
    <br>
    <br>
    A palette more focused on pinks and
    <br>
    sky blues and card symbols rather
    <br>
    than the usual casino-theming.

    <div class="casino-tile">
      <img src="assets/background/casino-tile.gif">
    </div>
  `,
  "Sonic the Hedgehog 2|Hill Top Zone": `
    Originally in development, when the
    <br>
    game still took into account a time
    <br>
    travel mechanic, Hill Top Zone was
    <br>
    supposed to be a past version of
    <br>
    Emerald Hill Zone!
    <br>
    <br>
    Noticeable in the final game by
    <br>
    the proximity of their tileset.

    <div class="emeraldhilltop-tileset">
      <img src="assets/background/emeraldhilltop-tileset.gif">
    </div>
  `,
  "Sonic the Hedgehog 2|Mystic Cave Zone": `
    This Zone's Act 2 has one of the
    <br>
    most infamous places in gaming:
    <br>
    an inescapable pit of spikes!
    <br>
    <br>
    At least, that was the case in the
    <br>
    original 1992 version of the game.
    <br>
    <br>
    Since then, in the 2013 version,
    <br>
    the pit has been replaced with a
    <br>
    secret entrance to the mysterious
    <br>
    Hidden Palace Zone!

    <div class="mysticcave-pit">
      <img src="assets/background/mysticcave-pit.png">
    </div>
  `,
  "Sonic the Hedgehog 2|Hidden Palace Zone": `
    While this Zone is exclusive to
    <br>
    the 2013 / Origins re-release of
    <br>
    Sonic 1, the music used here comes
    <br>
    from the 2P version of Mystic Cave!
    <br>
    <br>
    Which was also the theme that played
    <br>
    in this Zone in the Simon Wai Prototype!

    <div class="hiddenpalace-organ">
      <img src="assets/background/hiddenpalace-organ.png">
    </div>
  `,
  "Sonic the Hedgehog 2|Oil Ocean Zone": `
    In the original version of Sonic 2
    <br>
    entering a specific cheat code in
    <br>
    the hidden Sound Test grants the player
    <br>
    whopping 14 continues!
    <br>
    <br>
    However, it also causes this Zone's theme
    <br>
    to play throughout the entire game!
  `,
  "Sonic the Hedgehog 2|Metropolis Zone": `
    This is the only Zone in the final
    <br>
    game to have three Acts instead of
    <br>
    the standard two!
    <br>
    <br>
    This is because the original
    <br>
    Genocide City Zone was scrapped,
    <br>
    and its layout was reused for this
    <br>
    Zone's Act 3!
  `,
  "Sonic the Hedgehog 2|Wing Fortress Zone": `
    This Zone featured the first use of
    <br>
    the name 'Eggman' in western Sonic
    <br>
    media, written on the side of the
    <br>
    flying fortress!
    <br>
    <br>
    Until then, the character was known
    <br>
    as Robotnik until Sonic Adventure
    <br>
    merged both names.
    <br>
    <br>
    Dr. Ivo Robotnik, also known as
    <br>
    Dr. Eggman.

    <div class="eggman-fortress">
      <img src="assets/background/eggman-fortress.png">
    </div>
  `,
  "Sonic the Hedgehog 2|Special Stage": `
    The player can actually achieve
    <br>
    Super Sonic very early on, in
    <br>
    Emerald Hill!
    <br>
    <br>
    That is, if they find all the
    <br>
    checkpoints spread across the
    <br>
    level and don't lose their 50
    <br>
    rings or fail Special Stage!

    <div class="halfpipe-sonic">
      <img src="assets/background/halfpipe-sonic.gif">
    </div>
  `,


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
    {
      time: 48,
      text: "Waah! Teleportation, yeah!"
    },
    {
      time: 50,
      text: "Waah! Za-ba-doo-bap-bap!"
    },
    {
      time: 54.8,
      text: "Waah! Teleportation, yeah!"
    },
    {
      time: 57,
      text: "Waah! Shibby-doo-boo, yeah!"
    },
    {
      time: 65,
      text: "In the end, who's on your side?"
    },
    {
      time: 66.3,
      text: "Who can you trust"
    },
    {
      time: 67,
      text: "in the middle of the night?"
    },
    {
      time: 68,
      text: "Where will you be"
    },
    {
      time: 69,
      text: "if they can't find you?"
    },
    {
      time: 70,
      text: "There's no place to go, nothing to do"
    },
    {
      time: 72,
      text: "If you gotta do something"
    },
    {
      time: 72.8,
      text: "if you gotta do something"
    },
    {
      time: 74,
      text: "Believe in yourself, yourself, yourself!"
    },
    {
      time: 77,
      text: "Hey!"
    },
    {
      time: 79.8,
      text: "Extraordinary things can happen"
    },
    {
      time: 82.5,
      text: "If you believe in yourself"
    },
    {
      time: 86.8,
      text: "You've got to have some faith in yourself"
    },
    {
      time: 89.8,
      text: "If you want respect from your friends"
    },
    {
      time: 93.5,
      text: "Don't rearrange; no need to change"
    },
    {
      time: 95,
      text: "Stay like you are; keep it all the same"
    },
    {
      time: 96.8,
      text: "But as you move along in your life"
    },
    {
      time: 98.9,
      text: "Keep an open mind, and don't forget"
    },
    {
      time: 100,
      text: "That if you gotta do something"
    },
    {
      time: 101.8,
      text: "if gotta do something"
    },
    {
      time: 103,
      text: "Believe in yourself, yourself, yourself!"
    },
    {
      time: 106,
      text: "Hey!"
    },
    {
      time: 108,
      text: "Extraordinary things can happen"
    },
    {
      time: 110.9,
      text: "If you believe in yourself"
    },
    {
      time: 115,
      text: "You've got to have some faith in yourself"
    },
    {
      time: 118,
      text: "If you want respect from your friends"
    },
    {
      time: 122,
      text: "When you feel tight"
    },
    {
      time: 123.8,
      text: "Look at yourself!"
    },
    {
      time: 125,
      text: "Inside your heart, you will find"
    },
    {
      time: 126,
      text: "A special place to unwind"
    },
    {
      time: 129,
      text: "When you feel fright"
    },
    {
      time: 131,
      text: "Look at yourself!"
    },
    {
      time: 132,
      text: "Inside your mind, you will see"
    },
    {
      time: 133.9,
      text: "Cosmic eternity"
    },
    {
      time: 162,
      text: "When you feel tight"
    },
    {
      time: 163.5,
      text: "Look at yourself!"
    },
    {
      time: 165,
      text: "Inside your heart, you will find"
    },
    {
      time: 166,
      text: "A special place to unwind"
    },
    {
      time: 169,
      text: "When you feel fright"
    },
    {
      time: 170.5,
      text: "Look at yourself!"
    },
    {
      time: 171.8,
      text: "Inside your mind, you will see"
    },
    {
      time: 173,
      text: "Cosmic eternity"
    },
  ],
  "Sonic CD (US)|Sonic Boom (Intro)": [
    {
      time: 13.8,
      text: "If you're strong"
    },
    {
      time: 15,
      text: "You can fly"
    },
    {
      time: 16.5,
      text: "You can reach the other side"
    },
    {
      time: 19,
      text: "Of the rainbow"
    },
    {
      time: 23.9,
      text: "It's all right"
    },
    {
      time: 25,
      text: "Take a chance"
    },
    {
      time: 26.5,
      text: "Cause there is no circumstance"
    },
    {
      time: 28.9,
      text: "That you can't handle"
    },
    {
      time: 32,
      text: "When you use your mind"
    },
    {
      time: 34,
      text: "Sonic Boom (3x)"
    },
    {
      time: 37.2,
      text: "(Trouble keeps you running faster)"
    },
    {
      time: 39,
      text: "Sonic Boom (3x)"
    },
    {
      time: 42.1,
      text: "(Save the planet from disaster)"
    },
    {
      time: 54.8,
      text: "Through the dark"
    },
    {
      time: 56,
      text: "To the light"
    },
    {
      time: 57.5,
      text: "It's a supersonic flight"
    },
    {
      time: 59.6,
      text: "Gotta keep it goin'"
    },
    {
      time: 65,
      text: "Sonic Boom (3x)"
    },
    {
      time: 68.3,
      text: "(Trouble keeps you running faster)"
    },
    {
      time: 70.5,
      text: "Sonic Boom (3x)"
    },
    {
      time: 73.2,
      text: "(Save the planet from disaster)"
    },
    {
      time: 75,
      text: "Sonic Boom (3x)"
    },
    {
      time: 78,
      text: "(Spinning through a world in motion)"
    },
    {
      time: 80,
      text: "Sonic Boom (3x)"
    },
    {
      time: 158,
      text: "Sonic Boom (3x)"
    },
    {
      time: 161.2,
      text: "(Trouble keeps you running faster)"
    },
    {
      time: 163.8,
      text: "Sonic Boom (3x)"
    },
    {
      time: 166.2,
      text: "(Save the planet from disaster)"
    },
    {
      time: 168,
      text: "Sonic Boom (3x)"
    },
    {
      time: 171.2,
      text: "(Spinning through a world in motion)"
    },
    {
      time: 173,
      text: "Sonic Boom (3x)"
    },
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
const oledModeToggle =
  document.getElementById(
    "oledModeToggle"
  );

oledModeToggle.addEventListener(
  "change",
  () => {

    if (oledModeToggle.checked) {

      document.body.classList.add(
        "oled-mode"
      );

      document.body.classList.remove(
        "dark-mode"
      );

      darkModeToggle.checked = false;

      darkModeToggle.disabled = true;

    } else {

      document.body.classList.remove(
        "oled-mode"
      );

      darkModeToggle.disabled = false;

    }

    updateLogo();

    saveSettings();

  }
);
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
    oledMode: document.body.classList.contains("oled-mode"),
    horizontalLayout: player.classList.contains("horizontal")
  }));
}

function updateLogo() {

  const lightLogo =
    document.querySelector(".logo-light");

  const darkLogo =
    document.querySelector(".logo-dark");

  const oledLogo =
    document.querySelector(".logo-oled");

  let nextLogo;

  if (
    document.body.classList.contains(
      "oled-mode"
    )
  ) {

    nextLogo = oledLogo;

  } else if (
    document.body.classList.contains(
      "dark-mode"
    )
  ) {

    nextLogo = darkLogo;

  } else {

    nextLogo = lightLogo;

  }

  const currentLogo =
    [lightLogo, darkLogo, oledLogo]
      .find(
        logo =>
          getComputedStyle(logo)
            .display !== "none"
      );

  if (
    currentLogo === nextLogo
  ) return;

  currentLogo.classList.add(
    "fade-out"
  );

  setTimeout(() => {

    currentLogo.style.display =
      "none";

    nextLogo.style.display =
      "block";

    nextLogo.style.opacity =
      "0";

    requestAnimationFrame(() => {

      nextLogo.style.opacity =
        "1";

    });

    currentLogo.classList.remove(
      "fade-out"
    );

  }, 200);

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

    if (darkModeToggle) {
      darkModeToggle.checked = true;
    }

    document.querySelector(".logo-light").style.display = "none";
    document.querySelector(".logo-dark").style.display = "block";

  }

  if (settings.oledMode) {

    document.body.classList.add("oled-mode");

    if (oledModeToggle) {
      oledModeToggle.checked = true;
    }

    document.querySelector(".logo-light").style.display = "none";
    document.querySelector(".logo-oled").style.display = "block";

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

  document
    .querySelectorAll(".disc")
    .forEach(disc =>
      disc.classList.remove("active-disc")
    );

  selected
    .closest(".disc")
    ?.classList.add("active-disc");

  document
    .querySelectorAll(".game")
    .forEach(game =>
      game.classList.remove("active-game")
    );

  selected
    .closest(".game")
    ?.classList.add("active-game");
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

      if (
        document.body.classList.contains(
          "oled-mode"
        )
      ) {
        darkModeToggle.checked = false;
        return;
      }

      document.body.classList.toggle(
        "dark-mode",
        darkModeToggle.checked
      );

      updateLogo();

      saveSettings();

    }
  );

}

oledModeToggle.addEventListener(
  "change",
  () => {

    document.body.classList.toggle(
      "oled-mode",
      oledModeToggle.checked
    );

    if (oledModeToggle.checked) {

      darkModeToggle.checked = false;

      document.body.classList.remove(
        "dark-mode"
      );

    }

    saveSettings();

  }
);

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
