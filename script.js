document.getElementById('verificationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    alert('Code incorrect'); // Affiche un message pour le premier appui
    // Ajoutez la logique pour vérifier le code et modifier le message selon le cas
});
