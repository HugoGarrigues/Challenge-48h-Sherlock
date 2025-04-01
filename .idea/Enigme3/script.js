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
    const retryButton = document.createElement("button");
    retryButton.textContent = "Réessayer";
    retryButton.style.display = "none";
    retryButton.classList.add("retry-button");
    document.querySelector(".container").appendChild(retryButton);
    retryButton.addEventListener("click", resetGame);

    
    function pressColor(letter) {
        if (isProcessing) return; // Empêcher le spam de clics
        isProcessing = true;

        if (clickIndex < circles.length) {
            if (isCorrectSoFar && letter === codeSequence[clickIndex]) {
                circles[clickIndex].style.backgroundColor = "green";
            } else {
                isCorrectSoFar = false;
                circles[clickIndex].style.backgroundColor = "red";
            }
            userInput += letter;
            clickIndex++;

            if (userInput.length === codeSequence.length) {
                setTimeout(checkCode, 300); // Laisser le temps d'afficher la couleur avant de vérifier
            } else {
                isProcessing = false;
            }
        }
    }

    function checkCode() {
        if (userInput === codeSequence) {
            result.textContent = "Indice: Le médicament prescrit est extrêmement rare et spécifique.";
            result.style.color = "black";
            failedAttempts = 0;
            // Affiche le bouton "Suivant" uniquement si le code est correct
            document.querySelector(".back-button").style.display = "inline-block";

        } else {
            failedAttempts++;
            result.textContent = "Ce n'est pas le bon code.";
            result.style.color = "red";
            retryButton.style.display = "block";

            if (failedAttempts === 3) {
                result.textContent = "Trop d'échecs ! Voici un indice : lis bien l'article !";
                result.style.color = "black";
            }

            if (failedAttempts === 5) {
                result.textContent = "Indice : L'article contient le code couleur des cercles !";
                // Correction éventuelle : on pourrait ajuster ici plutôt que result.style.display = "black";
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
        retryButton.style.display = "none";
        // Masquer le bouton "Suivant" lors de la réinitialisation
        document.querySelector(".back-button").style.display = "none";
    }


    window.pressColor = pressColor;
});