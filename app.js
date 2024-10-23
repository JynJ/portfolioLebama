// JavaScript simple pour toute interactivité éventuelle
// Vous pouvez ajouter des fonctionnalités telles que des animations au scroll ou des boutons interactifs
document.addEventListener('DOMContentLoaded', () => {
    // Exemple d'animation au scroll pour les compétences
    const competencesSection = document.querySelector('#competences');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                competencesSection.classList.add('animate');
            }
        });
    });

    observer.observe(competencesSection);
});
