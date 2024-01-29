// content.js

// Function to analyze the site content
function analyzeSite() {
    const pageContent = document.body.innerHTML;
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
            const numberElement = document.querySelector('.number');
            if (data.result && data.result.length > 0) {
                numberElement.textContent = data.result[0];

                // Highlight dark patterns on the webpage
                highlightDarkPatterns(data.result);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Function to highlight dark patterns on the webpage
function highlightDarkPatterns(results) {
    const darkPatternElements = document.querySelectorAll('.dark-pattern');

    darkPatternElements.forEach((element, index) => {
        const result = results[index];
        if (result === 'Dark') {
            element.style.border = '2px solid red';
            element.style.animation = 'bounce 0.5s infinite alternate';
        }
    });
}

// Analyze the site immediately when the content script is injected
analyzeSite();

// Optionally, set up an interval to analyze the site periodically
setInterval(analyzeSite, 60000); // Analyze every 60 seconds
