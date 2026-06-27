let draggedCard = null;
let activeTier = null;

document
    .querySelectorAll(".tier-name-input")
    .forEach(textarea => {

        const resize = () => {

            textarea.style.height = "auto";

            textarea.style.height =
                textarea.scrollHeight + "px";

        };

        resize();

        textarea.addEventListener(
            "input",
            () => {

                resize();
                saveTierConfig();

            }
        );

    });

const tierColors = [

    "#FF7F7F",
    "#FFBF7F",
    "#FFDF7F",
    "#FFFF7F",

    "#BFFF7F",
    "#7FFF7F",
    "#7FFFFF",
    "#7FBFFF",

    "#7F7FFF",
    "#FF7FFF",
    "#BF7FBF",

    "#3B3B3B",
    "#858585",
    "#CFCFCF",
    "#F7F7F7"

];

function createColorPicker() {

    const picker =
        document.getElementById(
            "tier-color-picker"
        );

    if (!picker) return;

    picker.innerHTML = "";

    tierColors.forEach(color => {

        const option =
            document.createElement(
                "div"
            );

        option.className =
            "tier-color-option";

        option.style.background =
            color;

        option.addEventListener(
            "click",
            () => {

                if (!activeTier) return;

                activeTier.style.setProperty(
                    "--tier-color",
                    color
                );

                saveTierConfig();

                picker.style.display =
                    "none";

            }
        );

        picker.appendChild(
            option
        );

    });

}

function initTierColorEditor() {

    document
        .querySelectorAll(
            ".tier-settings"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                e => {

                    e.stopPropagation();

                    activeTier =
                        button
                            .closest(".tier-row")
                            .querySelector(
                                ".tier-label"
                            );

                    openColorPicker(
                        e.pageX + 10,
                        e.pageY + 10
                    );

                }
            );

        });

}

function openColorPicker(x, y) {

    const picker =
        document.getElementById(
            "tier-color-picker"
        );

    if (!picker) return;

    picker.style.left =
        `${x}px`;

    picker.style.top =
        `${y}px`;

    picker.style.display =
        "grid";

}

document.addEventListener(
    "click",
    e => {

        const picker =
            document.getElementById(
                "tier-color-picker"
            );

        if (
            picker &&
            !picker.contains(
                e.target
            )
        ) {

            picker.style.display =
                "none";

            activeTier = null;

        }

    }
);

function playTierSong(song) {

    const audio =
        document.getElementById(
            "audioPlayer"
        );

    audio.src =
        song.src;

    const savedVolume =
        localStorage.getItem(
            "tierVolume"
        );

    audio.volume =
        savedVolume !== null
            ? parseFloat(savedVolume)
            : 0.5;

    audio.play();

}

function initTierVolume() {

    const audio =
        document.getElementById(
            "audioPlayer"
        );

    const slider =
        document.getElementById(
            "tierVolumeSlider"
        );

    if (!audio || !slider) return;

    const savedVolume =
        localStorage.getItem(
            "tierVolume"
        );

    const volume =
        savedVolume !== null
            ? parseFloat(savedVolume)
            : 0.5;

    audio.volume =
        volume;

    slider.value =
        volume;

    slider.addEventListener(
        "input",
        () => {

            audio.volume =
                slider.value;

            localStorage.setItem(
                "tierVolume",
                slider.value
            );

        }
    );

}

function createSongCard(song) {

    const card =
        document.createElement("div");

    card.className =
        "tier-song";

    card.draggable = true;

    card.dataset.id =
        song.id;

    card.style.backgroundImage =
        `url(${song.cover})`;

    card.dataset.cover =
        song.cover;

    const preload =
        new Image();

    preload.src =
        song.cover;

    card.innerHTML = `

        <div class="tier-song-info">

            <strong>${song.title}</strong>

        </div>
    `;

    card.addEventListener(
        "dragstart",
        () => {

            draggedCard = card;

            card.classList.add(
                "dragging"
            );

        }
    );

    card.addEventListener(
        "dragend",
        () => {

            card.classList.remove(
                "dragging"
            );

            draggedCard = null;

            document.querySelectorAll(
                ".tier-dropzone"
            ).forEach(zone =>
                zone.classList.remove(
                    "drag-over"
                )
            );

        }
    );

    card.addEventListener(
        "click",
        () => {

            playTierSong(song);

        }
    );

    return card;

}

function addSongToPool(song) {

    const songPool =
        document.querySelector(
            ".song-pool"
        );

    if (!songPool) return;

    const existing =
        document.querySelector(
            `.tier-song[data-id="${song.id}"]`
        );

    if (existing) {

        songPool.appendChild(
            existing
        );

        existing.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        return;

    }

    const card =
        createSongCard(song);

    songPool.appendChild(card);

}

function saveTierConfig() {

    const config = [];

    document
        .querySelectorAll(
            ".tier-row"
        )
        .forEach(row => {

            const label =
                row.querySelector(
                    ".tier-label"
                );

            const input =
                row.querySelector(
                    ".tier-name-input"
                );

            config.push({

                name:
                    input.value,

                color:
                    getComputedStyle(
                        label
                    )
                        .getPropertyValue(
                            "--tier-color"
                        )
                        .trim()

            });

        });

    localStorage.setItem(
        "tierConfig",
        JSON.stringify(config)
    );

}

function loadTierConfig() {

    const saved =
        localStorage.getItem(
            "tierConfig"
        );

    if (!saved) return;

    const config =
        JSON.parse(saved);

    const rows =
        document.querySelectorAll(
            ".tier-row"
        );

    config.forEach(
        (tier, index) => {

            const row =
                rows[index];

            if (!row) return;

            const label =
                row.querySelector(
                    ".tier-label"
                );

            const input =
                row.querySelector(
                    ".tier-name-input"
                );

            input.value =
                tier.name;

            label.style.setProperty(
                "--tier-color",
                tier.color
            );

        }
    );

}

function initTierList() {

    const songPool =
        document.querySelector(".song-pool");

    const dropzones =
        document.querySelectorAll(
            ".tier-dropzone"
        );

    if (!songPool) return;

    // limpa pool antes de recriar
    songPool.innerHTML = "";

    // =====================
    // DROPZONES
    // =====================

    dropzones.forEach(zone => {

        zone.addEventListener(
            "dragenter",
            () => {

                zone.classList.add(
                    "drag-over"
                );

            }
        );

        zone.addEventListener(
            "dragleave",
            () => {

                zone.classList.remove(
                    "drag-over"
                );

            }
        );

        zone.addEventListener(
            "dragover",
            e => {

                e.preventDefault();

            }
        );

        zone.addEventListener(
            "drop",
            () => {

                if (!draggedCard) return;

                zone.appendChild(
                    draggedCard
                );

                draggedCard = null;

                zone.classList.remove(
                    "drag-over"
                );

            }
        );

    });

    // =====================
    // VOLTAR PARA O POOL
    // =====================

    songPool.addEventListener(
        "dragover",
        e => {

            e.preventDefault();

        }
    );

    songPool.addEventListener(
        "drop",
        () => {

            if (!draggedCard) return;

            songPool.appendChild(
                draggedCard
            );

            draggedCard = null;

        }
    );

}

function generatePlaylist() {

    const playlistSidebar =
        document.querySelector(
            ".playlist-sidebar"
        );

    if (!playlistSidebar) return;

    playlistSidebar.innerHTML = "";

    const collections = {};

    tierlistSongs.forEach(song => {

        const collection =
            song.collection || "Other";

        const disc =
            song.disc || "Misc";

        const game =
            song.game || "Unknown";

        const subgame =
            song.subgame || null;

        collections[collection] ??= {};
        collections[collection][disc] ??= {};
        collections[collection][disc][game] ??= {};

        if (subgame) {

            collections
            [collection]
            [disc]
            [game]
            [subgame] ??= [];

            collections
            [collection]
            [disc]
            [game]
            [subgame]
                .push(song);

        }

        else {

            collections
            [collection]
            [disc]
            [game]
                ._tracks ??= [];

            collections
            [collection]
            [disc]
            [game]
                ._tracks
                .push(song);

        }

    });

    Object.entries(collections)
        .forEach(([collectionName, discs]) => {

            const collection =
                document.createElement("div");

            collection.className =
                "collection";

            collection.innerHTML = `
                <div class="collection-title">
                    ${collectionName}
                </div>
                <div class="collection-content"></div>
            `;

            const collectionContent =
                collection.querySelector(
                    ".collection-content"
                );

            Object.entries(discs)
                .forEach(([discName, games]) => {

                    const disc =
                        document.createElement(
                            "div"
                        );

                    disc.className =
                        "disc";

                    disc.innerHTML = `
                        <div class="disc-title">
                            ${discName}
                        </div>
                        <div class="disc-content"></div>
                    `;

                    const discContent =
                        disc.querySelector(
                            ".disc-content"
                        );

                    Object.entries(games)
                        .forEach(([gameName, gameData]) => {

                            const game =
                                document.createElement(
                                    "div"
                                );

                            game.className =
                                "game";

                            game.innerHTML = `
                                <div class="game-title">
                                    ${gameName}
                                </div>
                                <div class="tracks"></div>
                            `;

                            const tracks =
                                game.querySelector(
                                    ".tracks"
                                );

                            if (
                                gameData._tracks
                            ) {

                                gameData._tracks
                                    .forEach(song => {

                                        const track =
                                            document.createElement(
                                                "div"
                                            );

                                        track.className =
                                            "track";

                                        track.textContent =
                                            song.title;

                                        track.addEventListener(
                                            "click",
                                            () => {

                                                playTierSong(song);
                                                addSongToPool(song);

                                            }
                                        );

                                        tracks.appendChild(
                                            track
                                        );

                                    });

                            }

                            Object.entries(gameData)
                                .forEach(([key, songs]) => {

                                    if (
                                        key === "_tracks"
                                    ) return;

                                    const subgame =
                                        document.createElement(
                                            "div"
                                        );

                                    subgame.className =
                                        "subgame";

                                    subgame.innerHTML = `
                                        <div class="subgame-title">
                                            ${key}
                                        </div>
                                        <div class="subtracks"></div>
                                    `;

                                    const subtracks =
                                        subgame.querySelector(
                                            ".subtracks"
                                        );

                                    songs.forEach(song => {

                                        const track =
                                            document.createElement(
                                                "div"
                                            );

                                        track.className =
                                            "track";

                                        track.textContent =
                                            song.title;

                                        track.addEventListener(
                                            "click",
                                            () => {

                                                playTierSong(song);
                                                addSongToPool(song);

                                            }
                                        );

                                        subtracks.appendChild(
                                            track
                                        );

                                    });

                                    tracks.appendChild(
                                        subgame
                                    );

                                });

                            discContent.appendChild(
                                game
                            );

                        });

                    collectionContent.appendChild(
                        disc
                    );

                });

            playlistSidebar.appendChild(
                collection
            );

        });

    initAccordion();

}

function initAccordion() {

    setupAccordionButton(
        ".collection-title",
        ".collection-content"
    );

    setupAccordionButton(
        ".disc-title",
        ".disc-content"
    );

    setupAccordionButton(
        ".game-title",
        ".tracks"
    );

    setupAccordionButton(
        ".subgame-title",
        ".subtracks"
    );

}

function setupAccordionButton(
    buttonSelector,
    contentSelector
) {

    document
        .querySelectorAll(buttonSelector)
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const content =
                        button.nextElementSibling;

                    const parent =
                        button.parentElement.parentElement;

                    parent
                        .querySelectorAll(contentSelector)
                        .forEach(el => {

                            if (el !== content) {

                                el.classList.remove(
                                    "open"
                                );

                            }

                        });

                    content.classList.toggle(
                        "open"
                    );

                }
            );

        });

}

function initPlaylistControls() {

    const audio =
        document.getElementById(
            "audioPlayer"
        );

    const button =
        document.getElementById(
            "playlist-toggle"
        );

    if (!audio || !button) return;

    button.addEventListener(
        "click",
        () => {

            if (audio.paused) {

                audio.play();

                button.textContent =
                    "⏸";

            }

            else {

                audio.pause();

                button.textContent =
                    "▶";

            }

        }
    );

    audio.addEventListener(
        "play",
        () => {

            button.textContent =
                "⏸";

        }
    );

    audio.addEventListener(
        "pause",
        () => {

            button.textContent =
                "▶";

        }
    );

}

function downloadTierScreenshot(canvas) {

    const link =
        document.createElement("a");

    const now =
        new Date();

    const timestamp =
        `${now.getFullYear()}-${String(now.getMonth() + 1)
            .padStart(2, "0")
        }-${String(now.getDate())
            .padStart(2, "0")
        }_${String(now.getHours())
            .padStart(2, "0")
        }-${String(now.getMinutes())
            .padStart(2, "0")
        }-${String(now.getSeconds())
            .padStart(2, "0")
        }`;

    link.download =
        `tierlist-${timestamp}.png`;

    link.href =
        canvas.toDataURL("image/png");

    link.click();

}

function initTierScreenshot() {

    const button =
        document.getElementById(
            "tier-screenshot-btn"
        );

    const tierList =
        document.querySelector(
            ".tierlist-container"
        );

    const playlistSidebar =
        document.querySelector(
            ".playlist-sidebar"
        );

    const controls =
        document.querySelector(
            ".playlist-controls"
        );

    if (
        !button ||
        !tierList ||
        !playlistSidebar ||
        !controls
    ) return;

    button.addEventListener(
        "click",
        async () => {

            const oldSidebarDisplay =
                playlistSidebar.style.display;

            const oldControlsDisplay =
                controls.style.display;

            // esconde UI
            playlistSidebar.style.display =
                "none";

            controls.style.display =
                "none";

            // watermark temporária
            const watermark =
                document.createElement(
                    "div"
                );

            watermark.textContent =
                "SONIC RADIO TIER LIST";

            watermark.style.position =
                "absolute";

            watermark.style.bottom =
                "20px";

            watermark.style.right =
                "20px";

            watermark.style.fontSize =
                "14px";

            watermark.style.fontFamily =
                `"Syntax Ultra Black", sans-serif`;

            watermark.style.color =
                "rgba(255,255,255,.55)";

            watermark.style.pointerEvents =
                "none";

            watermark.style.zIndex =
                "999";

            tierList.appendChild(
                watermark
            );

            await new Promise(resolve =>
                setTimeout(resolve, 350)
            );

            const tierSongs =
                document.querySelectorAll(
                    ".tier-song"
                );

            tierSongs.forEach(card => {

                const cover =
                    card.dataset.cover;

                if (!cover) return;

                card.style.backgroundImage =
                    `url(${cover})`;

            });

            const canvas =
                await html2canvas(
                    tierList,
                    {
                        backgroundColor: null,
                        scale: 2,
                        useCORS: true,
                        allowTaint: true,
                        logging: false
                    }
                );

            // restaura UI
            playlistSidebar.style.display =
                oldSidebarDisplay;

            controls.style.display =
                oldControlsDisplay;

            watermark.remove();

            downloadTierScreenshot(
                canvas
            );

        }
    );

}

loadTierConfig();

initTierList();
generatePlaylist();

createColorPicker();
initTierColorEditor();
initPlaylistControls();
initTierVolume();
initTierScreenshot();