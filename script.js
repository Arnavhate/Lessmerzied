function downloadGame() {
    const link = document.createElement('a');
    link.href = 'Lessmerzied.rar';
    link.download = 'Lessmerzied.rar';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function downloadFix() {
    const link = document.createElement('a');
    link.href = 'fix.rar';
    link.download = 'fix.rar';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
