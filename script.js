const display = document.getElementById("display");
const btn = document.querySelectorAll("button");

btn.forEach(button => {
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
                display.value = eval(display.value); // calcule 
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