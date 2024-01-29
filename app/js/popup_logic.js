// Update your button click event in popup_logic.js
document.querySelector('.analyze-button').addEventListener('click', analyzeSite);

function analyzeSite() {
    const apiUrl = 'http://127.0.0.1:5000/';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            tokens: ['dark', 'pattern', 'example'],
        }),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            // Update your extension UI based on the response
            const darkPatternsCountElement = document.getElementById('darkPatternsCount');
            if (data.dark_tokens && data.dark_tokens.length > 0) {
                darkPatternsCountElement.textContent = data.dark_tokens.length;
                // Add logic to highlight dark patterns on the webpage if needed
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
