// Déclaration des compteurs
let longueur = 0;
let nbMots = 1;      // On commence à 1, car le premier mot ne suit pas un espace
let nbVoyelles = 0;

// Liste des voyelles
let voyelles = "aeiouAEIOU";

// Lire une phrase qui se termine par un point
let phrase = prompt("Entrez une phrase qui se termine par un point :");

// Traitement caractère par caractère
for (let i = 0; i < phrase.length; i++) {
    let caractere = phrase[i];

    // Arrêter si on atteint le point final
    if (caractere === '.') {
        longueur++; // on compte aussi le point final
        break;
    }

    // Compter les caractères
    longueur++;

    // Compter les mots (si on voit un espace, on suppose un mot)
    if (caractere === ' ') {
        nbMots++;
    }

    // Compter les voyelles
    if (voyelles.includes(caractere)) {
        nbVoyelles++;
    }
}

// Affichage des résultats
console.log("Longueur de la phrase :", longueur);
console.log("Nombre de mots :", nbMots);
console.log("Nombre de voyelles :", nbVoyelles);
