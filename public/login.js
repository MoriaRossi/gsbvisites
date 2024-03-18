document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Empêche le rechargement de la page

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Envoi des données au serveur via Axios
    axios.post('/user', {
        username: username,
        password: password
    })
    .then(function (response) {
        console.log(response);
        // Vous pouvez vérifier la réponse ici et agir en conséquence
        // Par exemple, si la connexion est réussie :
        if (response.data.success) {
            window.location.href = 'choixPage.html'; // Remplacez par la page de destination
        } else {
            alert('Identifiants incorrects');
        }
    })
    .catch(function (error) {
        console.error('Erreur lors de la connexion:', error);
        // Traiter les erreurs ici (par exemple, afficher un message d'erreur)
    });
});
