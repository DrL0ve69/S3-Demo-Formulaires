//function afficher() {
    //let valeur = document.forms[0]["patates"].value;
    //document.getElementById("valeur").innerText = valeur;
//}

// Attendre que le html doit prêt : évènement onload
$(document).ready(function (){

    // Gérer l'évenement change sur le slider
    $("#patates").change(function (){
        $("#valeur").text($(this).val());
    });

    $("#mdp1").blur(function(){
        if ($("#mdp1").val().length < 8){
            $("#erreur_mdp").html("Le mot de passe doit contenir au moins <strong>8 caractères</strong>");
            $("#erreur_mdp").removeClass("invisible");
        }
    });

});
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