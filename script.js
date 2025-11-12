const display = document.getElementById("display");
const cButtons = document.querySelectorAll(".btn button");

cButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            display.value = ""; // tout supprimer
        } 
        else if (value === "off"){
            display.value = "Calculatrice éteinte";
        }
        else if (value === "⌫"){
            display.value = display.value.slice(0, -1); // efface le dernier caractère
        }
        else if (value === "=") {
            try {
                display.value = new Function("return " + display.value)(); // calcule 
            } catch {
                display.value = "Erreur"; // mauvaise syntaxe
            }
        } 
        else if (value === "%") {
            try {
                display.value = parseFloat(display.value)/100; // divise par 100
            } catch {
                display.value = "Erreur";
            }
        }
        else {
            if (display.value === "Erreur" || display.value === "Calculatrice éteinte"){
                display.value = "";
            }
            display.value += value; // ajoute le chiffre ou l’opérateur
        }
    });
});


// Boutons qui changent le thème de la calculatrice

const operateurs = document.querySelectorAll(".operateur");
const gris = document.getElementById("gris");
const rose = document.getElementById("rose");
const bleu = document.getElementById("bleu");
const vert = document.getElementById("vert");
const jaune = document.getElementById("jaune");

function changeColor(color) {
    operateurs.forEach(op => {
        op.style.backgroundColor = color;
    });
}

gris.addEventListener("click", () => 
    changeColor("#343333")
);

rose.addEventListener("click", () => 
    changeColor("rgb(231, 144, 158)")
);

bleu.addEventListener("click", () => 
    changeColor("rgb(47, 183, 224)")
);

vert.addEventListener("click", () => 
    changeColor("rgb(47, 224, 127)")
);

jaune.addEventListener("click", () => 
    changeColor("rgb(240, 229, 72)")
);