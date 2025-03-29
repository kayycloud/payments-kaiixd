document.querySelector('.whatsapp-button').addEventListener('click', function() {
    let phoneNumber = "6285814826225"; // Ganti dengan nomor WhatsApp yang benar
    let message = encodeURIComponent("Halo, saya ingin bertanya tentang pembayaran.");
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.location.href = whatsappURL; // Langsung redirect ke WhatsApp
});}

