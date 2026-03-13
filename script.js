document.addEventListener('DOMContentLoaded', () => {
    const introHello = document.getElementById('intro-hello');
    const introWelcome = document.getElementById('intro-welcome');
    const intro2 = document.getElementById('intro-2');
    const introOverlay = document.getElementById('intro-overlay');
    const mainContent = document.getElementById('main-content');

    const REDIRECT_URL = 'https://www.qrshop.name.ng/fancycafe';

    // Sequence 1: Hello! (0-1s)
    setTimeout(() => {
        introHello.style.opacity = '1';
        introHello.style.animation = 'slideRightFade 1s forwards';
    }, 0);

    // Sequence 2: Welcome (1-2s)
    setTimeout(() => {
        introHello.style.display = 'none';
        introWelcome.style.opacity = '1';
        introWelcome.style.animation = 'fadeInOut 1s forwards';
    }, 1000);

    // Sequence 3: Big 2 (2-3s)
    setTimeout(() => {
        introWelcome.style.display = 'none';
        intro2.style.opacity = '1';
        intro2.style.animation = 'fadeInOut 1s forwards';
    }, 2000);

    // Transition to Main Content (3s)
    setTimeout(() => {
        introOverlay.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.style.animation = 'fadeIn 0.5s forwards';
    }, 3000);

    // Final Redirect (Total 5s)
    setTimeout(() => {
        window.location.href = REDIRECT_URL;
    }, 5000);
});
