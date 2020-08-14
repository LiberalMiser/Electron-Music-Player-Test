function toggleMenu(x) {
    x.classList.toggle("menu-toggle");
}

function toggleSideBar() {
    var minimisedClientWidth = 50;
    var sideBar = document.getElementById("side-panel");
    var clientWidth = sideBar.clientWidth;
    var sideBarText = document.getElementsByClassName("category-content category-content-text");
    var addPlaylistButton = document.getElementById("add-playlist-button");
    var mainContent = document.getElementById("current-screen-holder");

    if (clientWidth > minimisedClientWidth) {
        sideBar.style.width = "50px";
        addPlaylistButton.style.left = "-37%";
        addPlaylistButton.style.marginTop = "13%";
        mainContent.style.width = "calc(100% - 50px)";

        for (i = 0; i < sideBarText.length; i++) {
            sideBarText[i].style.display = "none";
        }
    }
    else {
        sideBar.style.width = "320px";
        addPlaylistButton.style.left = "64%";
        addPlaylistButton.style.marginTop = "0%";
        mainContent.style.width = "calc(100% - 320px)";

        for (i = 0; i < sideBarText.length; i++) {
            sideBarText[i].style.display = "inline-block";
        }
    }
    
}