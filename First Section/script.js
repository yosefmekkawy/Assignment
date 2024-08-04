document.getElementById("videoOverlay").onclick = function () {
  document.getElementById("videoOverlay").style.display = "none";
  document.getElementById("youtubeVideo").style.display = "block";
  document.getElementById("fullscreenOverlay").style.display = "flex";
  document.getElementById("fullscreenVideo").src =
    "https://www.youtube.com/embed/" + "9o1jmMaWsr8" + "?autoplay=1";
};

document.getElementById("fullscreenOverlay").onclick = function () {
  document.getElementById("fullscreenOverlay").style.display = "none";
  document.getElementById("fullscreenVideo").src = "";
};
