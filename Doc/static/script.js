// script.js

// Select elements
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const mainContent = document.getElementById("main-content");

// Open sidebar
openBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
    mainContent.classList.add("sidebar-open");
    closeBtn.style.display = "block";  // Show the close button
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
    mainContent.classList.remove("sidebar-open");
    closeBtn.style.display = "none";  
});

document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-btn');

    // Création d'un élément pour afficher le message
    const copyMessage = document.createElement('div');
    copyMessage.classList.add('copy-message');
    copyMessage.textContent = 'Contenu copié !';
    document.body.appendChild(copyMessage);

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.getAttribute('data-content');
            navigator.clipboard.writeText(content)
                .then(() => {
                    // Affiche le message d'animation
                    copyMessage.classList.add('show');
                    setTimeout(() => {
                        copyMessage.classList.remove('show');
                    }, 1500); // Durée de l'affichage (1.5 secondes)
                })
                .catch(err => {
                    console.error('Erreur lors de la copie :', err);
                    alert('Impossible de copier le contenu.');
                });
        });
    });
});
