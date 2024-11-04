document.addEventListener('DOMContentLoaded', () => {
    const moreInfoBtn = document.getElementById('moreInfoBtn');
    const moreInfo = document.getElementById('moreInfo');

    moreInfoBtn.addEventListener('click', () => {
        moreInfo.classList.toggle('hidden');
        if (moreInfo.classList.contains('hidden')) {
            moreInfoBtn.textContent = 'Learn More About Energy Conservation';
            moreInfoBtn.setAttribute('aria-expanded', 'false');
        } else {
            moreInfoBtn.textContent = 'Hide Detailed Information';
            moreInfoBtn.setAttribute('aria-expanded', 'true');
        }
    });
});