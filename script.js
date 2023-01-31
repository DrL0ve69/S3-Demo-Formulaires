function valider() {
    let mdp1 = document.forms[0]["mdp1"].value;
    let mdp2 = document.forms[0]["mdp2"].value;

    if (mdp1 === mdp2 && mdp1.length >= 8) {
        // On veut aussi avoir minimum 8 caractères
        // On veut aussi avoir des chiffres et des lettres
        document.getElementById("erreur_mdp").setAttribute("class", "invisible");
        return true
    } else {
        if(mdp1 != mdp2){
            document.getElementById("erreur_mdp").innerHTML = "Les 2 mots de passe doivent être <strong>identiques</strong>";
        }
        else if(mdp1.length < 8){
            document.getElementById("erreur_mdp").innerHTML = "Le mot de passe doit contenir au moins <strong>8 caractères</strong>";
        }
        //alert("Les 2 mots de passe doivent être identiques et contenir au moins 8 caractères")
        //Remplacer le pop-up par un message sur la page:
        document.getElementById("erreur_mdp").setAttribute("class", "");
        return false; //Empêcher l'envoie du formulaire
    }
}