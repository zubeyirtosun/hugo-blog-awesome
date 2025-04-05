document.addEventListener('DOMContentLoaded', function() {
    const player = document.querySelector('.music-player');
    const button = document.getElementById('toggle-music');
    
    if (!player || !button) {
        console.error('Music player or toggle button not found!');
        return;
    }
    
    // Sayfa yüklendiğinde son durumu kontrol et
    const isHidden = localStorage.getItem('musicPlayerHidden') === 'true';
    if (isHidden) {
        player.classList.add('hidden');
        console.log('Music player is initially hidden.');
    } else {
        player.classList.remove('hidden'); // Spotify oynatıcısını görünür yap
        console.log('Music player is initially visible.');
    }
    
    button.addEventListener('click', function() {
        // Toggle 'hidden' class
        player.classList.toggle('hidden');
        
        // Durumu kaydet
        const isNowHidden = player.classList.contains('hidden');
        localStorage.setItem('musicPlayerHidden', isNowHidden);

        // Debugging için konsola yaz
        console.log(`Music player is now ${isNowHidden ? 'hidden' : 'visible'}`);
    });
});