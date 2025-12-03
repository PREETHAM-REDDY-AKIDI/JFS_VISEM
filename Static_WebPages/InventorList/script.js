const inventors = {
    "C": { name: "Dennis Ritchie", image: "images/ritchie.jpg" },
    "C++": { name: "Bjarne Stroustrup", image: "images/stroustrup.jpg" },
    "Java": { name: "James Gosling", image: "images/gosling.jpg" },
    "Python": { name: "Guido van Rossum", image: "images/rossum.jpg" },
    "JavaScript": { name: "Brendan Eich", image: "images/eich.jpg" },
    "PHP": { name: "Rasmus Lerdorf", image: "images/lerdorf.JPG" },
    "Ruby": { name: "Yukihiro Matsumoto", image: "images/matsumoto.jpg" },
    "Lisp": { name: "John McCarthy", image: "images/mccarthy.jpg" },
    "COBOL": { name: "Grace Hopper", image: "images/hopper.jpg" },
    "C#": { name: "Anders Hejlsberg", image: "images/hejlsberg.jpg" }
};

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('languageSelect');
    const resultDisplay = document.getElementById('resultDisplay');

    languageSelect.addEventListener('change', (e) => {
        const language = e.target.value;
        if (language && inventors[language]) {
            displayInventor(language, inventors[language]);
        }
    });

    function displayInventor(language, data) {
        resultDisplay.style.opacity = '0';
        
        setTimeout(() => {
            let imageHtml = '';
            if (data.image) {
                imageHtml = `
                    <div class="image-container">
                        <img src="${data.image}" alt="${data.name}" class="inventor-photo">
                    </div>
                `;
            }

            resultDisplay.innerHTML = `
                <div class="inventor-card">
                    <div class="inventor-label">Inventor of</div>
                    <div class="language-name">${language}</div>
                    ${imageHtml}
                    <div class="inventor-name">${data.name}</div>
                </div>
            `;
            resultDisplay.style.opacity = '1';
        }, 200);
    }
});
