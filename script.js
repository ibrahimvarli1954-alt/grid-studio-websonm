document.addEventListener('DOMContentLoaded', () => {
    // Sayfa Açılış Animasyonu
    document.body.style.transition = 'opacity 0.8s ease';
    document.body.style.opacity = '1';

    // Arka Plan Grid Hareketi (Parallax)
    const grid = document.querySelector('.grid-background');
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 30;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 30;
        if (grid) {
            grid.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });

    // Sayfa Geçiş Efekti (Linklere Tıklayınca)
    const links = document.querySelectorAll('nav a, .cta-button');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const destination = link.getAttribute('href');
            if (destination && destination.includes('.html')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = destination;
                }, 500);
            }
        });
    });
});