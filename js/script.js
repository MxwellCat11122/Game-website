function downloadGame() {
    window.open("https://store.steampowered.com/app/264710/Subnautica/", "_blank");
}

function toggleTheme() {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
}

function toggleMusic() {
    const music = document.getElementById("bgMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
