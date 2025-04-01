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

    const restartButton = document.createElement("button");
    restartButton.textContent = "Recommencer";
    restartButton.style.display = "none";
    restartButton.classList.add("restart-button");
    document.querySelector(".container").appendChild(restartButton);
    restartButton.addEventListener("click", function() {
        resetGame();
        restartButton.style.display = "none";
    });


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
            result.textContent = "Bravo ! Vous avez trouvé le code secret !";
            result.style.color = "green";
            failedAttempts = 0;
            restartButton.style.display = "block";
            
        } else {
            failedAttempts++;
            result.textContent = "Désolé, ce n'est pas le bon code.";
            result.style.color = "red";
            retryButton.style.display = "block";

            if (failedAttempts === 3) {
            result .textContent = "Trop d'échecs ! Voici un indice : lis bien l'article !";
            result.style.color = "black";
            }

            if (failedAttempts === 5) {
            result .textContent = "Indice : L'article contient le code couleur des cercles !";
                result.style.display = "black";
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
    }

    window.pressColor = pressColor;
});