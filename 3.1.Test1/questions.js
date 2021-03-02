
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return  (texte1 + texte2);
}
let afficherCar5 =  (texte) => {
    const i =4;
    return (texte[i]);
}
let afficher9Car =  (texte) => {
    return (texte.slice(0,9));
}
let majusculeString =  (texte) => {
    return (texte.toUpperCase());
}
let minusculeString =  (texte) => {
    return (texte.toLowerCase());
}
let SupprEspaceString =  (texte) => {
    return (texte.trim());
}
let IsString =  (texte) => {
 return (typeof texte); //fail !
}

let AfficherExtensionString =  (texte) => {

}
let NombreEspaceString =  (texte) => {

}
let InverseString =  (texte) => {
    let splArray=texte.split(" ");//split
    let revArray= splArray.reverse();//reverse
    let joinArray= revArray.join(" ");//join
    return (joinArray);
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {

}
let valeurAbsolue =  (nombre) => {

}
let valeurAbsolueArray =  (array) => {

}
let sufaceCercle =  (rayon) => {

}
let hypothenuse =  (ab, ac) => {

}
let calculIMC =  (poids, taille) => {
        let result = (poids/(taille*taille));
        let imc = result.toFixed(2);
        return(imc);
}
