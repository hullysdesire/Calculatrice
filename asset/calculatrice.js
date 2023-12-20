/* JavaScript */

// Cette fonction ajoute la valeur du bouton appuyé à l'affichage de la calculatrice.
function btm(val) {
    document.getElementById("calc-output").innerHTML += val;
}

// Cette fonction efface tout le contenu de l'affichage de la calculatrice.
function btmClean(){
   document.getElementById("calc-output").innerHTML = "";
}

// Cette fonction ajoute le symbole '+' à l'affichage de la calculatrice.
function btmPlus() {
   document.getElementById("calc-output").innerHTML += "+";
}

// Cette fonction ajoute le symbole '-' à l'affichage de la calculatrice.
function btmLess() {
   document.getElementById("calc-output").innerHTML += "-";
}

// Cette fonction ajoute le symbole '*' à l'affichage de la calculatrice pour la multiplication.
function btmMultiply() {
   document.getElementById("calc-output").innerHTML += "*";
}

// Cette fonction ajoute le symbole '/' à l'affichage de la calculatrice pour la division.
function btmDivision() {
   document.getElementById("calc-output").innerHTML += "/";
}

// Cette fonction calcule le résultat de l'opération affichée et l'affiche sur la calculatrice.
function btmEgal() {
     let egal = eval(document.getElementById('calc-output').innerHTML);
     document.getElementById('calc-output').innerHTML = egal;
}
