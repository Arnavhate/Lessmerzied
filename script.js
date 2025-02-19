document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadBtn');
    
    if (downloadButton) {
        downloadButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'Lessmerzied.rar';
        });
    }
});
