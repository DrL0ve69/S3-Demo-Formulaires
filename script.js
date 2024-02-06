//function afficher() {
    //let valeur = document.forms[0]["patates"].value;
    //document.getElementById("valeur").innerText = valeur;
//}

// Validation du nom d'utilisateur
const texteNomUtilisateur = document.getElementById("nomUtilisateur");
nomUtilisateurEntre = document.getElementById("nomUtilisateur").innerText;
nomUtilisateurTest = /^[a-z]{0,20}[0-9]{0,2}$/.test(nomUtilisateurEntre);

function NomValide(){
    if(nomUtilisateurTest===false){ texteNomUtilisateur.validity = "false"; texteNomUtilisateur.ariaInvalid = "Nigauddemarde";}
    else { texteNomUtilisateur.validity= "true"; }
}
const texteAdresseCourriel = document.getElementById('adresseCourriel');
const adresseCourrielEntre = document.getElementById("adresseCourriel").innerText;
adresseCourrielTest = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(adresseCourrielEntre);
function EmailValide(){
    if(adresseCourrielTest===false) { texteAdresseCourriel.validity= "false"; }
    else{ adresseCourrielEntre.style.color = "green"; texteAdresseCourriel.style.borderColor="green"; }
}
function PasswordValide(){
    const passUtilisateur = document.getElementById("password").value;
    const passUtilisateurElement = document.getElementById("password");

    if(passUtilisateur===nomUtilisateurEntre) {
        passUtilisateurElement.validity = 'false';
        passUtilisateurElement.popover = "Mot de passe invalide";
        passUtilisateur.onfocus.showPopover();
    } else passUtilisateurElement.validity ="true";
}
const allInputs = document.getElementsByTagName("input").valueOf();
const formulaireComplet = document.getElementById('formulaireComplet');
function FormulaireValide() {
    if (allInputs.validity === "false"){ allInputs.focus(); document.getElementById('boutonSubmit').createElement('p',"Élément invalide") }
}




