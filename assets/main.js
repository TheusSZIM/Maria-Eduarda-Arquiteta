// Lógica do Cursor e Animações
const cursor = document.getElementById('cursor');
if (cursor) {
    document.addEventListener('mousemove', e => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
}

// Revelação Segura de Contatos (Proteção contra Robôs)
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

// Observer de Animações
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
