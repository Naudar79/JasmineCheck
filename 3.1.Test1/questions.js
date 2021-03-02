
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
    return typeof texte === 'string';
}

let AfficherExtensionString =  (texte) => {
    return texte.split(".").pop();
}
let NombreEspaceString =  (texte) => {
    return texte.split(' ').length -1;
}
let InverseString =  (texte) => {
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return new Number(Math.pow(x,y));
}
let valeurAbsolue =  (nombre) => {
    return new Number(Math.abs(nombre));
}
let valeurAbsolueArray =  (array) => {
    return  array.map(Math.abs);
}
let sufaceCercle =  (rayon) => {

}
let hypothenuse =  (ab, ac) => {
    return new Number(Math.hypot(ab,ac));
}
let calculIMC =  (poids, taille) => {
        let result = (poids/(taille*taille));
        let imc = result.toFixed(2);
        console.log(imc);
        return new Number (imc);
}
