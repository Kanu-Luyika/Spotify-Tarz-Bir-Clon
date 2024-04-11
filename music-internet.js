const internetHizi = 40;
const audioPlayer = document.getElementById('audioPlayer');
function playMusic() {
    const musicURL = `Müzikler/512669__drumartist__smooth-682-cm.mp3`;
    audioPlayer.src = musicURL;

    const savedTime = parseFloat(localStorage.getItem("savedTime")) || 0;
    audioPlayer.currentTime = savedTime;

    const beklemeSuresi = (40 / internetHizi) * 4000;
    setTimeout(() => {
        audioPlayer.play();
    }, beklemeSuresi);
}
window.onload = playMusic;

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function saveTime() {
    localStorage.setItem("savedTime", audioPlayer.currentTime);
}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
audioPlayer.addEventListener('timeupdate', saveTime);
showTask();
