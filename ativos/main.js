// === STUDIO ARCH - LÓGICA CENTRAL ===

document.addEventListener('DOMContentLoaded', () => {
    // 1. CURSOR PERSONALIZADO
    const cursor = document.getElementById('cursor');
    if (cursor) {
        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });
        document.querySelectorAll('a, button, .cursor-pointer').forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    // 2. REVELAÇÃO SEGURA DE CONTATOS (ANTI-SPAM)
    const revealEmail = document.getElementById('reveal-email');
    if (revealEmail) {
        revealEmail.addEventListener('click', function() {
            const u = "contato";
            const d = "studioarch.com";
            this.querySelector('span:last-child').innerText = `${u}@${d}`;
        }, { once: true });
    }

    const revealPhone = document.getElementById('reveal-phone');
    if (revealPhone) {
        revealPhone.addEventListener('click', function() {
            const d = "41";
            const p = "99999-0000";
            this.querySelector('span:last-child').innerText = `+55 (${d}) ${p}`;
        }, { once: true });
    }

    // 3. ANIMAÇÕES DE REVEAL (INTERSECTION OBSERVER)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 4. NAVBAR SCROLL
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar?.classList.replace('navbar-glass', 'navbar-solid');
        } else {
            navbar?.classList.replace('navbar-solid', 'navbar-glass');
        }
    });
});
