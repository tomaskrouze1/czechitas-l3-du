let celeJmeno = prompt("Jaké je vaše jméno a příjmení?:");
let vek = Number(prompt("Jaký je váš věk?:"));
let barva = prompt("Oblíbená barva - anglicky");

document.body.innerHTML += "<p>" + celeJmeno + ", vek: " + vek + "<p>";
document.body.style.color = barva;




