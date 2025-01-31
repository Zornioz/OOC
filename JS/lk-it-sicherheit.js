// script.js
let cards = [];
let currentCardIndex = 0;

const cardElement = document.getElementById('card');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const answerContainer = document.getElementById('answerContainer');
const overviewContainer = document.getElementById('overviewContainer');
const overviewList = document.getElementById('overviewList');

// Lade die Karten aus der JSON-Datei
fetch('/OOC/JS/JSON/lk-it-sicherheit-cards.json')
    .then(response => response.json())
    .then(data => {
        cards = data;
        updateCard();
        populateOverview();
    })
    .catch(error => console.error('Fehler beim Laden der Karten:', error));

function updateCard() {
    const currentCard = cards[currentCardIndex];
    questionElement.textContent = currentCard.question;
    answerElement.textContent = currentCard.answer;
    answerContainer.style.display = 'none'; // Antwort ausblenden
}

function showAnswer() {
    answerContainer.style.display = 'block'; // Antwort anzeigen
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    updateCard();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    updateCard();
}

function showOverview() {
    document.getElementById('navigationButtons').style.display = 'none'; // Navigationsbuttons ausblenden
    document.getElementById('cardContainer').style.display = 'none'; // Karte ausblenden
    overviewContainer.style.display = 'flex'; // Übersicht anzeigen
}

function hideOverview() {
    document.getElementById('navigationButtons').style.display = 'flex'; // Navigationsbuttons einblenden
    overviewContainer.style.display = 'none'; // Übersicht ausblenden
    document.getElementById('cardContainer').style.display = 'flex'; // Karte wieder anzeigen
}

function populateOverview() {
    overviewList.innerHTML = ''; // Liste leeren
    cards.forEach((card, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = card.question;
        listItem.onclick = () => {
            currentCardIndex = index;
            updateCard();
            hideOverview();
        };
        overviewList.appendChild(listItem);
    });
}

// Frage anklicken, um die Antwort anzuzeigen
questionElement.addEventListener('click', showAnswer);