// Countdown Timer for a Month
const now = new Date();
const targetDate = new Date();
targetDate.setMonth(now.getMonth() + 1); // Set target to one month from today

const timer = document.getElementById('timer');

function updateCountdown() {
    const currentTime = new Date();
    const timeLeft = targetDate - currentTime;

    if (timeLeft <= 0) {
        timer.textContent = "00:00:00";
        clearInterval(countdownInterval);
        return;
    }

    const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

    timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Form Submission
const form = document.getElementById('ideaForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.email.value;
    const idea = form.idea.value;

    alert(`Thank you for your idea, ${email}!`);
    form.reset();
});