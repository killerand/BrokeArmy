// Show loading screen briefly on page load
  window.addEventListener("load", function () {
    setTimeout(function () {
      const loadingScreen = document.getElementById("black-screen");
      if (loadingScreen) {
        loadingScreen.classList.add("hidden");
        setTimeout(() => {
          loadingScreen.style.display = "none";
        }, 1000); // Wait for fade-out to finish
      }
    }, 2500); // Delay before removing loading screen
  });

  // Log how many video cards exist (for debugging or future logic)
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".video-card");
    console.log("Video cards found:", cards.length);
  });

  // Open modal and load specific Rumble video
  function openVideoModal(videoId) {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("rumbleFrame");
    iframe.src = `https://rumble.com/embed/${videoId}/?pub=4l8tzv`;
    modal.style.display = "block";
  }

  // Close modal and stop video playback
  function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("rumbleFrame");
    iframe.src = ""; // Reset to stop playback
    modal.style.display = "none";
  }

  // Optional: close modal if clicking outside of it
  window.onclick = function (event) {
    const modal = document.getElementById("videoModal");
    if (event.target == modal) {
      closeVideoModal();
    }
  };

  // Replace main embedded video dynamically
  function changeVideo(newUrl) {
    const mainVideo = document.getElementById('mainVideo');
    mainVideo.src = newUrl;
  }
