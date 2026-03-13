import './style.css'

document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const introHello = document.getElementById('intro-hello');
    const introWelcome = document.getElementById('intro-welcome');
    const intro2 = document.getElementById('intro-2');
    const introOverlay = document.getElementById('intro-overlay');
    const mainContent = document.getElementById('main-content');

    const shutdownToast = document.getElementById('shutdown-toast');
    const countdownText = document.getElementById('countdown-text');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const closeModalBtn = document.getElementById('close-modal');

    const REDIRECT_URL = 'https://www.qrshop.name.ng/fancycafe';
    const TARGET_DATE_KEY = 'shutdown_target_timestamp';

    // --- Intro Animation ---
    setTimeout(() => {
        introHello.style.opacity = '1';
        introHello.style.animation = 'slideRightFade 1s forwards';
    }, 0);

    setTimeout(() => {
        introHello.style.display = 'none';
        introWelcome.style.opacity = '1';
        introWelcome.style.animation = 'fadeInOut 1s forwards';
    }, 1000);

    setTimeout(() => {
        introWelcome.style.display = 'none';
        intro2.style.opacity = '1';
        intro2.style.animation = 'fadeInOut 1s forwards';
    }, 2000);

    setTimeout(() => {
        introOverlay.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.style.animation = 'fadeIn 0.5s forwards';

        // Show toast after intro
        shutdownToast.classList.remove('hidden');
        setTimeout(() => shutdownToast.classList.add('show'), 100);
    }, 3000);

    // Final Redirect
    setTimeout(() => {
        window.location.href = REDIRECT_URL;
    }, 15000);

    // --- Countdown Logic ---
    let targetTimestamp = localStorage.getItem(TARGET_DATE_KEY);
    if (!targetTimestamp) {
        // Set target to 4 days from now
        targetTimestamp = Date.now() + (4 * 24 * 60 * 60 * 1000);
        localStorage.setItem(TARGET_DATE_KEY, targetTimestamp);
    }
    targetTimestamp = parseInt(targetTimestamp);

    function updateCountdown() {
        const now = Date.now();
        const diff = targetTimestamp - now;

        if (diff <= 0) {
            countdownText.innerText = 'Shutting down anytime soon';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const pad = (num) => String(num).padStart(2, '0');
        countdownText.innerText = `Shutting down in ${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    // --- Modal Logic ---
    shutdownToast.addEventListener('click', () => {
        modalBackdrop.classList.remove('hidden');
    });

    const closeModal = () => {
        modalBackdrop.classList.add('hidden');
    };

    closeModalBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) closeModal();
    });
});
