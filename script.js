//function afficher() {
    //let valeur = document.forms[0]["patates"].value;
    //document.getElementById("valeur").innerText = valeur;
//}

// Validation du nom d'utilisateur
const texteNomUtilisateur = document.getElementById("nomUtilisateur");
var nomUtilisateurEntre = document.getElementById("nomUtilisateur").value;
var nomUtilisateurTest = /^(a-z|A-Z)+(0-9){0|1|2}$/.test(nomUtilisateurEntre);
function NomValide(){
    if(nomUtilisateurTest===false){ texteNomUtilisateur.validity = "false"; }
    else { texteNomUtilisateur.validity= "true"; }
}
const texteAdresseCourriel = document.getElementById('adresseCourriel');
const adresseCourrielEntre = document.getElementById("adresseCourriel").value;
var adresseCourrielTest = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(adresseCourrielEntre);
function EmailValide(){
    if(adresseCourrielTest===false) { texteAdresseCourriel.validity= "false"; }
    else{ adresseCourrielEntre.style.color = "green"; texteAdresseCourriel.style.borderColor="green"; }
}
function PasswordValide(){
    const passUtilisateur = document.getElementById("password").value;
    const passUtilisateurElement = document.getElementById("password");
    if(passUtilisateur===nomUtilisateurEntre) {alert("Votre mot de passe est le même que le nom d'utilisateur "); }
}


