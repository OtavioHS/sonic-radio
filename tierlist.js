const songPool =
    document.querySelector(".song-pool");

let draggedCard = null;

// =====================
// GERAR MÚSICAS
// =====================

tierSongs.forEach(song => {

    const card =
        document.createElement("div");

    card.className =
        "tier-song";

    card.draggable = true;

    card.dataset.id =
        song.id;

    card.innerHTML = `
        <strong>${song.title}</strong>
        <br>
        <small>${song.game}</small>
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

        }
    );

    songPool.appendChild(card);

});

// =====================
// DROPZONES
// =====================

const dropzones =
    document.querySelectorAll(
        ".tier-dropzone"
    );

dropzones.forEach(zone => {

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

    }
);