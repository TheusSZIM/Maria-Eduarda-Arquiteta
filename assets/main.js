// === CONFIGURAÇÃO GLOBAL DO STUDIO ARCH ===

document.addEventListener('DOMContentLoaded', () => {
    // 1. CURSOR PERSONALIZADO
    const cursor = document.getElementById('cursor');
    if (cursor) {
        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });
        document.querySelectorAll('a, button, .cursor-pointer').forEach(link => {
            link.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            link.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    // 2. REVELAÇÃO SEGURA DE CONTATOS (ANTI-BOT)
    const setupReveal = (id, user, domain, isPhone = false) => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', function() {
                const data = isPhone ? `+55 (41) ${user}-${domain}` : `${user}@${domain}`;
                this.querySelector('span:last-child').innerText = data;
                this.classList.remove('cursor-pointer');
            }, { once: true });
        }
    };
    setupReveal('reveal-email', 'contato', 'mariaeduarda.com');
    setupReveal('reveal-phone', '99999', '0000', true);

    // 3. NAVBAR & MENU MOBILE
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar?.classList.replace('navbar-glass', 'navbar-solid');
        } else {
            navbar?.classList.replace('navbar-solid', 'navbar-glass');
        }
    });

    menuBtn?.addEventListener('click', () => {
        mobileMenu?.classList.toggle('active');
        menuBtn.textContent = mobileMenu?.classList.contains('active') ? 'close' : 'menu';
    });

    // 4. ANIMAÇÕES DE REVEAL NO SCROLL
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
