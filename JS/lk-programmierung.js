// Funktion zum Hinzufügen einer neuen Karteikarte
function addCard(title, content) {
    const container = document.getElementById('cards-container');
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
        <div class="card-title">${title}</div>
        <div class="card-content">${content}</div>
    `;

    // Event-Listener zum Anzeigen/Ausblenden des Inhalts
    card.addEventListener('click', () => {
        const contentDiv = card.querySelector('.card-content');
        contentDiv.style.display = contentDiv.style.display === 'none' ? 'block' : 'none';
    });

    container.appendChild(card);
}

// Initiale Karten hinzufügen
addCard('Karteikarte 1', 'Inhalt der Karteikarte 1');
addCard('Karteikarte 2', 'Inhalt der Karteikarte 2');
addCard('Karteikarte 3', 'Inhalt der Karteikarte 3');
addCard('Karteikarte 4', 'Inhalt der Karteikarte 4');
