// Countdown Timer Script
document.addEventListener("DOMContentLoaded", function () {
  // Get event date from <header data-event-date="">
  const header = document.querySelector("header");
  const eventDate = new Date(header.getAttribute("data-event-date")).getTime();

  // Update countdown every second
  const countdown = document.getElementById("countdown");
  setInterval(function () {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      countdown.innerHTML = "🎉 Event Started!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
});
