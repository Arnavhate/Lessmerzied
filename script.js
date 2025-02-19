document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadBtn');
    
    if (downloadButton) {
        downloadButton.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Your download is starting...');
            window.location.href = 'Lessmerzied.zip';
        });
    }
});
