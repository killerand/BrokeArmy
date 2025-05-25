// Show loading letters immediately
document.getElementById('loading-letters').style.display = 'block';

// After 2 seconds, hide loading letters and show email signup form
window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("loading-letters").style.display = "none";
    document.getElementById("email-signup").style.display = "block";
  }, 2000);
});

// Handle email form submission
document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const message = document.getElementById("form-message");

  fetch("https://script.google.com/macros/s/AKfycbzhRR8GqzWBxsEqxX0KejKSsF_ra691ljvkhgk8teSKNuzmVy4gqGUtVRjvSBiAl-S1Uw/exec", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `email=${encodeURIComponent(email)}`
  })
    .then(response => {
      if (response.ok) {
        message.innerText = "🎉 You're on the list!";
        form.reset();

        // After a short delay, hide loading screen and show main content
        setTimeout(() => {
          document.getElementById("black-screen").style.display = "none";
          document.getElementById("main-content").style.display = "block";
        }, 1500);
      } else {
        message.innerText = "❌ Something went wrong.";
      }
    })
    .catch(() => {
      message.innerText = "❌ Failed to connect. Try again later.";
    });
});
