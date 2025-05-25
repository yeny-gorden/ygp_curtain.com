document.addEventListener('DOMContentLoaded', function() {
    // Fungsionalitas Modal untuk Gambar
    var imageModal = document.getElementById('imageModal');
    if (imageModal) { // Pastikan modal ada sebelum menambahkan event listener
        imageModal.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal
            var button = event.relatedTarget; 
            // Extract info from data-image-src attributes
            var imageSrc = button.getAttribute('data-image-src'); 
            
            var modalImage = imageModal.querySelector('#modalImage');
            modalImage.src = imageSrc;

            // Opsional: atur judul modal berdasarkan alt text atau nama file
            var altText = button.querySelector('img').alt;
            var modalTitle = imageModal.querySelector('#imageModalLabel');
            modalTitle.textContent = altText || 'Detail Gambar';
        });
    }

    // Anda bisa menambahkan JavaScript lainnya di sini nanti, misalnya:
    // - Smooth scrolling untuk navigasi
    // - Validasi form kontak
    // - Animasi elemen saat discroll
});
