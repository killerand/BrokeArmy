window.addEventListener("load", function () {
  setTimeout(function () {
    const loadingScreen = document.getElementById("black-screen");
    if (loadingScreen) {
      loadingScreen.classList.add("hidden");
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 1000); // Wait for fade-out to finish
    }
  }, 2500);
});

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".video-card");
    console.log("Video cards found:", cards.length);
  });
