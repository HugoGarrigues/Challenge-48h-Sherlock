function checkAnswer() {
    let userInput = document.getElementById("playerInput").value.trim().toLowerCase();
    let correctPhrase = "im coming for you sherlock"; 
    
    const errorMessage = document.getElementById("errorMessage");

    if (userInput === correctPhrase) {
        const footerDiv = document.querySelector("footer div");

        document.getElementById("playerInput").remove();
        document.querySelector("button[onclick='checkAnswer()']").remove();

        document.getElementById("hint").style.display = "block";

        document.getElementById("nextButton").style.display = "block";

        if (errorMessage) {
            errorMessage.textContent = "";
        }
    } else {
        
        if (!errorMessage) {
            const errorText = document.createElement("p");
            errorText.id = "errorMessage";
            errorText.style.color = "red";
            errorText.style.fontSize = "1.5rem"; 
            errorText.style.fontWeight = "bold"; 
            errorText.style.marginTop = "10px"; 
            errorText.textContent = "Ce n'est pas la bonne réponse, essayez encore !";
            document.querySelector("footer div").appendChild(errorText);
        } else {
            errorMessage.textContent = "Ce n'est pas la bonne réponse, essayez encore !";
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const magnifier = document.createElement("div");
    magnifier.classList.add("magnifier");
    document.body.appendChild(magnifier);

    document.addEventListener("mousemove", (e) => {
        const x = e.clientX + window.scrollX; 
        const y = e.clientY + window.scrollY; 

        magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
        magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
        magnifier.style.display = "block";
    });

    document.addEventListener("mouseleave", () => {
        magnifier.style.display = "none";
    });
});

function nextPage() {
    window.location.href = "enigme3.html"; 
}