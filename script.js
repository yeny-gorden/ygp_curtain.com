document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi carousel untuk setiap kategori produk
    var gordenCarousel = document.querySelector('#gordenCarousel');
    if (gordenCarousel) {
        new bootstrap.Carousel(gordenCarousel, {
            interval: 5000, // Otomatis berpindah setiap 5 detik
            wrap: true      // Kembali ke awal setelah slide terakhir
        });
    }

    var blindsCarousel = document.querySelector('#blindsCarousel');
    if (blindsCarousel) {
        new bootstrap.Carousel(blindsCarousel, {
            interval: 5500, // Interval sedikit berbeda
            wrap: true
        });
    }

    var wallpaperCarousel = document.querySelector('#wallpaperCarousel');
    if (wallpaperCarousel) {
        new bootstrap.Carousel(wallpaperCarousel, {
            interval: 6000, // Interval sedikit berbeda lagi
            wrap: true
        });
    }

    // Optional: Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optional: Add active class to navbar links on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
