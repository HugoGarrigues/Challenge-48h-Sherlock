document.addEventListener('DOMContentLoaded', function() {
    let startTime = Date.now();
    let timerInterval;
    let totalPenalty = 0;
    let currentProgress = 0;
    const totalSteps = 6;
    
    const progressFill = document.getElementById('progressFill');
    const timerElement = document.getElementById('timer');
    const magnifyingGlass = document.getElementById('magnifyingGlass');
    const hiddenMessage = document.getElementById('hiddenMessage1');
    const inventoryItems = document.getElementById('inventoryItems');
    const congratulations = document.getElementById('congratulations');
    const finalTime = document.getElementById('finalTime');
    
    updateProgress(0);
    startTimer();
    
    document.querySelector('.newspaper').addEventListener('click', function(e) {
        if (e.target === hiddenMessage || hiddenMessage.contains(e.target)) {
            hiddenMessage.classList.add('revealed');
            addToInventory('Indice: 5');
        }
    });
    
    document.getElementById('submit1').addEventListener('click', function() {
        const answer = document.getElementById('answer1').value.trim().toLowerCase();
        const message = document.getElementById('message1');
        
        if (answer === '5') {
            message.textContent = 'Correct! Vous avez trouvé le premier chiffre caché !.';
            message.className = 'message success';
            
            setTimeout(() => {
                document.querySelector('.scene.active').classList.remove('active');
                document.getElementById('scene2').classList.add('active');
                updateProgress(1);
            }, 1500);
        } else {
            message.textContent = 'Ce n\'est pas la bonne réponse. Essayez encore.';
            message.className = 'message error';
        }
    });
    
    document.getElementById('submit2').addEventListener('click', function() {
        const answer = document.getElementById('answer2').value.trim().toLowerCase();
        const message = document.getElementById('message2');
        
        if (answer === 'loupe') {
            message.textContent = 'Correct! La clé du chiffre est LOUPE.';
            message.className = 'message success';
            addToInventory('Clé de chiffrement: LOUPE');
            
            setTimeout(() => {
                document.querySelector('.scene.active').classList.remove('active');
                document.getElementById('scene3').classList.add('active');
                updateProgress(2);
            }, 1500);
        } else {
            message.textContent = 'Ce n\'est pas le bon objet.';
            message.className = 'message error';
        }
    });
    
    document.getElementById('submit3').addEventListener('click', function() {
        const answer = document.getElementById('answer3').value.trim().toLowerCase();
        const message = document.getElementById('message3');
        
        if (answer === 'un seul fait peut valoir mille suppositions') {
            message.textContent = 'Excellent! Vous avez déchiffré le message.';
            message.className = 'message success';
            addToInventory('Message déchiffré: UN SEUL FAIT PEUT VALOIR MILLE SUPPOSITIONS');
            setTimeout(() => {
                document.querySelector('.scene.active').classList.remove('active');
                document.getElementById('scene4').classList.add('active');
                updateProgress(3);
            }, 1500);
        } else {
            message.textContent = 'Ce n\'est pas le bon message déchiffré. Vérifiez votre déchiffrement.';
            message.className = 'message error';
        }
    });
    
    document.getElementById('submit4').addEventListener('click', function() {
        const answer = document.getElementById('answer4').value.trim().toLowerCase();
        const message = document.getElementById('message4');
        
        if (answer === 'logique' || answer === 'la logique') {
            message.textContent = 'Correct! Le coffre s\'ouvre...';
            message.className = 'message success';
            addToInventory('Mot de passe du coffre: LOGIQUE');
            setTimeout(() => {
                document.querySelector('.scene.active').classList.remove('active');
                document.getElementById('scene5').classList.add('active');
                updateProgress(4);
            }, 1500);
        } else {
            message.textContent = 'Ce n\'est pas le bon mot de passe. Réfléchissez à l\'énigme.';
            message.className = 'message error';
        }
    });
    
    document.getElementById('submit5').addEventListener('click', function() {
        const answer = document.getElementById('answer5').value.trim();
        const message = document.getElementById('message5');
        
        if (answer === '5517') {
            message.textContent = 'Correct! Vous avez trouvé les quatre chiffres.';
            message.className = 'message success';
            addToInventory('Code secret: 5517');
            setTimeout(() => {
                document.querySelector('.scene.active').classList.remove('active');
                document.getElementById('scene6').classList.add('active');
                updateProgress(5);
            }, 1500);
        } else {
            message.textContent = 'Ce ne sont pas les bons chiffres. Cherchez dans les indices précédents.';
            message.className = 'message error';
        }
    });
    


    let selectedSuspect = null;

document.getElementById("suspect1").addEventListener("click", function() {
    selectedSuspect = 1;
    gettElementById("congratulations-suspect1").style.display = 'block';
    updateFinalButtonState();
});

document.getElementById("suspect2").addEventListener("click", function() {
    selectedSuspect = 2;
    updateFinalButtonState();
});

document.getElementById("suspect3").addEventListener("click", function() {
    selectedSuspect = 3;
    updateFinalButtonState();
});

document.getElementById("suspect4").addEventListener("click", function() {
    selectedSuspect = 4;
    updateFinalButtonState();
});

function updateFinalButtonState() {
    document.getElementById('finalButton').disabled = false;
}
document.getElementById('finalButton').addEventListener('click', function() {

    const endTime = Date.now();
    const elapsedTime = new Date(endTime - startTime);
    const minutes = elapsedTime.getUTCMinutes().toString().padStart(2, '0');
    const seconds = elapsedTime.getUTCSeconds().toString().padStart(2, '0');
    finalTime.textContent = `${minutes}:${seconds}`;

    if (selectedSuspect === 3) {
        clearInterval(timerInterval);
        document.getElementById("congratulations").style.display = 'block';
        document.getElementById("wrongAnswer").style.display = 'none';
        document.querySelectorAll('.congratulaations').forEach(function(desc) {
            desc.style.display = 'none';
        });

    } else {
        document.getElementById("wrongAnswer").style.display = 'block';
        document.getElementById("congratulations").style.display = 'none';
        document.querySelectorAll('.congratulaations').forEach(function(desc) {
            desc.style.display = 'none';
        });
    }
});


    function startTimer() {
        timerInterval = setInterval(updateTimer, 1000);
        addToInventory2('Indice 1 : Une feuille déchirée a été retrouvée sur la scène du crime')
        addToInventory2('Indice 2 : Cette feuille semble être une prescription médicale manuscrite')
        addToInventory2('Indice 3 : Le médicament prescrit est extrêmement rare et spécifique')
        addToInventory2('Indice 4 : Le papier retrouvé provient d\'un manuscrit médical rejeté par plusieurs éditeurs')
    }

    function updateTimer() {
        const currentTime = Date.now();
        const elapsedTime = new Date(currentTime - startTime + totalPenalty);
        const minutes = elapsedTime.getUTCMinutes().toString().padStart(2, '0');
        const seconds = elapsedTime.getUTCSeconds().toString().padStart(2, '0');
        timerElement.textContent = `Temps: ${minutes}:${seconds}`;
    }

    function updateProgress(step) {
        currentProgress = step;
        const progress = (currentProgress / totalSteps) * 100;
        progressFill.style.width = `${progress}%`;
    }

    function addToInventory(item) {
        const newItem = document.createElement('div');
        newItem.textContent = item;
        newItem.className = 'inventory-item';
        if (!inventoryItems.innerHTML.includes(item)) {
            inventoryItems.appendChild(newItem);
        }
    }

    function addToInventory2(item) {
        const newItem = document.createElement('div');
        newItem.textContent = item;
        newItem.className = 'inventory-item';
        if (!inventoryItems2.innerHTML.includes(item)) {
            inventoryItems2.appendChild(newItem);
        }
    }

function showSuspectInfo(suspectId) {
    document.querySelectorAll('.congratulations').forEach(function(desc) {
        desc.style.display = 'none';
    });
    document.querySelectorAll('.congratulaations').forEach(function(desc) {
        desc.style.display = 'none';
    });

    document.getElementById('congratulations-suspect' + suspectId).style.display = 'block';
    
    document.getElementById('finalButton').disabled = false;
}

document.getElementById('suspect1').addEventListener('click', function() {
    showSuspectInfo(1);
});

document.getElementById('suspect2').addEventListener('click', function() {
    showSuspectInfo(2);
});

document.getElementById('suspect3').addEventListener('click', function() {
    showSuspectInfo(3);
});

document.getElementById('suspect4').addEventListener('click', function() {
    showSuspectInfo(4);
});

document.getElementById('finalButton').addEventListener('click', function() {
    const selectedSuspect = document.querySelector('.suspect-btn.selected');
    if (selectedSuspect) {
        const suspectId = parseInt(selectedSuspect.id.replace('suspect', ''));
        if (suspectId === 3) {

            document.getElementById('congratulations').style.display = 'block';
        }
    }
});

});


