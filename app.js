// url de l'api : https://blockchain.info/ticker

const url  = "https://blockchain.info/ticker"

function recupererPrix() {

// Créer une requête
let requete = new XMLHttpRequest(); // Créer un objet
requete.open('GET', url) //premier paramètre: GET ou POST, 
                         // 2e parmètre : notre url

  // GET Permet d'obtenir une ressource
  // POST permet d'envoyer une ressource

requete.responseType = 'json'; // Nous attendons du JSON
requete.send(); // Nous envoyons notre requête



// Dès qu'on reçoit une réponse, cette onction est executée
requete.onload = function() {
  if(requete.readyState === XMLHttpRequest.DONE) {
    if(requete.status === 200) {
        let reponse = requete.response; // on stocke la réponse
        //console.log(reponse);
        let prixEnEuro = reponse.CAD.last; 
      document.querySelector("#price_label").textContent = prixEnEuro;
        //console.log(prixEnEuro);
    }
  }
  else {
    alert(" Un problème est survenu, Veuillez revenir plus tard.")
  }
}
  //console.log("prix actualisé");
}

setInterval(recupererPrix, 2000);