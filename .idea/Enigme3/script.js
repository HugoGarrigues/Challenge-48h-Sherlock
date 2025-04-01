codeSequence = "RBJV"; // Code secret à deviner
let userInput = "";
let clickIndex = 0;
let isCorrectSoFar = true;
let failedAttempts = 0;
let isProcessing = false; 

document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");
    const hintElement = document.getElementById("hint");
    const result = document.getElementById("result");

    // Création du bouton "Réessayer"
    const retryButton = document.createElement("button");
    retryButton.textContent = "Réessayer";
    retryButton.style.display = "none";
    retryButton.classList.add("retry-button");
    document.querySelector(".container").appendChild(retryButton);
    retryButton.addEventListener("click", resetGame);

    // Création du bouton "Passer à l'énigme suivante"
    const nextPageButton = document.createElement("button");
    nextPageButton.textContent = "Passer à l'énigme suivante";
    nextPageButton.style.display = "none"; // Caché au départ
    nextPageButton.classList.add("next-button");
    document.querySelector(".container").appendChild(nextPageButton);
    nextPageButton.addEventListener("click", function () {
        window.location.href = "../Enigme4/enigme4.html"; // Remplacez par l'URL de la page suivante
    });

    function pressColor(letter) {
        if (isProcessing) return; // Empêcher le spam de clics
        isProcessing = true;

        if (clickIndex < codeSequence.length) {
            if (isCorrectSoFar && letter === codeSequence[clickIndex]) {
                circles[clickIndex].style.backgroundColor = "green";
            } else {
                isCorrectSoFar = false;
                circles[clickIndex].style.backgroundColor = "red";
            }
            userInput += letter;
            clickIndex++;

            if (userInput.length === codeSequence.length) {
                setTimeout(checkCode, 500); // Laisser le temps d'afficher la couleur avant de vérifier
            } else {
                isProcessing = false;
            }
        }
    }

    function checkCode() {
        if (userInput === codeSequence) {
            result.textContent = "Bravo ! Vous avez trouvé le code secret !";
            result.style.color = "green";
            failedAttempts = 0;
            retryButton.style.display = "none"; // Cacher le bouton "Réessayer"
            nextPageButton.style.display = "block"; // Afficher le bouton "Suivant"
        } else {
            failedAttempts++;
            result.textContent = "Désolé, ce n'est pas le bon code.";
            result.style.color = "red";
            retryButton.style.display = "block"; // Afficher le bouton "Réessayer"

            if (failedAttempts === 3) {
                result.textContent = "Trop d'échecs ! Voici un indice : lis bien l'article !";
                result.style.color = "black";
            }

            if (failedAttempts === 5) {
                result.textContent = "Indice : L'article contient le code couleur des cercles !";
                result.style.color = "black";
            }
        }
        isProcessing = false;
    }

    function resetGame() {
        userInput = "";
        clickIndex = 0;
        isCorrectSoFar = true;
        result.textContent = "";
        circles.forEach(circle => {
            circle.style.backgroundColor = "transparent";
        });
        retryButton.style.display = "none"; // Cacher le bouton "Réessayer"
    }

    window.pressColor = pressColor;
});
