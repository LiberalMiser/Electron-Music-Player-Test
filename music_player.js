var isPlaying = false;
var audioTracks;
var currentTrack;
var playButtonImage;

function initialize () {
    audioTracks = new Audio();
    playButtonImage = document.getElementById("play-button-image");
    togglePlay();
    
}

function togglePlay() {
    switch(isPlaying) {
        case true:
            playButtonImage.src = "pause-white-48dp.svg";
            isPlaying = false;
            break;
        case false:
            playButtonImage.src = "play_arrow-white-48dp.svg";
            isPlaying = true;
            break;
    }
}

function nextTrack () {
    
}

function previousTrack() {

}

function restartTrack() {classList.add("")
    
}

document.getElementById("volume").oninput = function () {
    document.getElementById("current-volume").innerHTML = this.value + "%";
}

function findAudioTracks () {
    var trackName, artist, album, genre, year, trackLength;
    var holderObject = document.getElementById("current-screen");
    var currentItem;
    var nameElement, artistElement, albumElement, genreElement, yearElement, trackLengthElement;

    for (i = 0; i < 300; i++) {
        currentItem = document.createElement("div");
        currentItem.classList.add("track-item");

        nameElement = document.createElement("p");
        nameElement.classList.add("track-item-content");
        nameElement.innerHTML = "Down with the Sickness";
        currentItem.appendChild(nameElement);

        artistElement = document.createElement("p");
        artistElement.classList.add("track-item-content");
        artistElement.innerHTML = "Disturbed";
        currentItem.appendChild(artistElement);

        albumElement = document.createElement("p");
        albumElement.classList.add("track-item-content");
        albumElement.innerHTML = "The Sickness";
        currentItem.appendChild(albumElement);

        genreElement = document.createElement("p");
        genreElement.classList.add("track-item-content");
        genreElement.innerHTML = "Heavy Metal";
        currentItem.appendChild(genreElement);

        yearElement = document.createElement("p");
        yearElement.classList.add("track-item-content");
        yearElement.innerHTML = "2000";
        currentItem.appendChild(yearElement);

        trackLengthElement = document.createElement("p");
        trackLengthElement.classList.add("track-item-content");
        trackLengthElement.innerHTML = "4:37";
        currentItem.appendChild(trackLengthElement);

        holderObject.appendChild(currentItem);
    }
}