document.getElementById('downloadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const videoURL = document.getElementById('videoURL').value;
    const messageDiv = document.getElementById('message');

    if (videoURL) {
        fetch('/download', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: videoURL })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                messageDiv.innerHTML = `<a href="${data.downloadLink}" download>Click here to download</a>`;
            } else {
                messageDiv.textContent = 'Failed to download video.';
            }
        })
        .catch(error => {
            messageDiv.textContent = 'An error occurred. Please try again.';
        });
    } else {
        messageDiv.textContent = 'Please enter a valid URL.';
    }
});

