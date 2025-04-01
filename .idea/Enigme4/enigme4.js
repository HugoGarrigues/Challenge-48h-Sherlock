let combinaison = [0, 0, 0, 0, 0];
let coffreOuvert = false;
let tentatives = 0;

// Indices à afficher progressivement
const indices = [
    "🕵️‍♂️ Indice 1 : Adresse de Sherlock Holmes → 221",
    "📚 Indice 2 : Nombre d'aventures écrites par Conan Doyle → 60",
    "📅 Indice 3 : Année de ma première apparition → 1887"
];

function resetCoffre() {
    combinaison = [0, 0, 0, 0, 0];
    document.querySelectorAll('.engrenage').forEach((engrenage) => {
        engrenage.textContent = '0';
        engrenage.style.transform = 'rotate(0deg)';
    });
}

// Afficher les indices selon le nombre d'essais
function afficherIndices() {
    const containerIndices = document.querySelector('.enigme4-indices');
    containerIndices.innerHTML = ''; 
    for (let i = 0; i < tentatives - 1 && i < indices.length; i++) {
        const p = document.createElement('p');
        p.textContent = indices[i];
        containerIndices.appendChild(p);
    }
}

// Rotation manuelle des engrenages
document.querySelectorAll('.engrenage').forEach((engrenage, index) => {
    engrenage.addEventListener('click', () => {
        if (coffreOuvert) return;
        combinaison[index] = (combinaison[index] + 1) % 10;
        engrenage.textContent = combinaison[index];
        engrenage.style.transform = `rotate(${combinaison[index] * 36}deg)`;
    });
});

function animationOuverture() {
    coffreOuvert = true;
    const engrenages = document.querySelectorAll('.engrenage');
    engrenages.forEach((engrenage, i) => {
        engrenage.style.transition = `transform 1.5s ${i * 0.2}s ease-in-out`;
        engrenage.style.transform = 'rotate(720deg)';
    });

    setTimeout(() => {
        const coffre = document.querySelector('.enigme4-coffre');
        coffre.innerHTML = '<div class="enigme4-manuscrit">📜 « Le papier retrouvé provient d un manuscrit médical rejeté par plusieurs éditeurs. » 📜</div>';
    }, 2000);

    setTimeout(() => {
        window.location.href = '../Enigme5/enigme5.html';
    }, 7000);
}

document.querySelector('.enigme4-btn-verifier').addEventListener('click', () => {
    const resultat = document.querySelector('.enigme4-message');
    if (combinaison.join('') === '37311') {
        resultat.style.color = 'lightgreen';
        resultat.textContent = '✅ Impressionnant ! Le coffre s\'ouvre.';
        animationOuverture();
    } else {
        tentatives += 1;
        resultat.style.color = 'tomato';
        resultat.textContent = '❌ Combinaison incorrecte ! Réinitialisation des engrenages...';

        setTimeout(() => {
            resetCoffre();
            afficherIndices(); 
            resultat.textContent = '🔄 Le coffre est réinitialisé. Réessayez.';
            resultat.style.color = '#ccc';
        }, 2000);
    }
});
