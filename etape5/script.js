"use strict";

function doInsertRowTable(num, nom, prenom, points) {
    const table = document.querySelector("table");
    const row = document.createElement("tr"); // creer une ligne

    // appeler chaque fonction de chaque cellule
    const num_cell = creer_num(num);
    const nom_cell = creer_nom(nom);
    const prenom_cell = creer_prenom(prenom);
    const points_cell = creer_points(points);
    const checkbox_cell = creer_checkbox();

    // ajouter les nouveaux cellules dans la nouvelle ligne
    row.appendChild(num_cell);
    row.appendChild(nom_cell);
    row.appendChild(prenom_cell);
    row.appendChild(points_cell);
    row.appendChild(checkbox_cell);
    
    // ajouter la nouvelle ligne dans le tableau
    table.appendChild(row);
}

function creer_num(num) {
    const num_cell = document.createElement("td"); // creer l'element (cellule td)
    num_cell.classList.add("col_number"); // ajouter la class
    num_cell.textContent = num; // ajouter les donnees

    return num_cell;
}

function creer_nom(nom) {
    const nom_cell = document.createElement("td");
    nom_cell.classList.add("col_text");
    nom_cell.textContent = nom;
    return nom_cell;
}

function creer_prenom(prenom) {
    const prenom_cell = document.createElement("td");
    prenom_cell.classList.add("col_text");
    prenom_cell.textContent = prenom;
    return prenom_cell;
}

function creer_points(points) {
    const points_cell = document.createElement("td");
    points_cell.classList.add("col_number");
    points_cell.textContent = points;

    return points_cell;
}

function creer_checkbox() {
    const checkbox_cell = document.createElement("td"); // creer la cellule
    checkbox_cell.classList.add("col_chkbox"); // ajouter la class
    
    const checkbox = document.createElement("input"); // creer l'element input pour le checkbox
    checkbox.setAttribute("type", "checkbox"); // specifier le type de input; checkbox

    checkbox_cell.appendChild(checkbox); // ajouter le checkbox dans la cellule

    return checkbox_cell;
}

function doInsert(nom, prenom, points) {
    lignes += 1;
    total_points += Number(points);

    let num = lignes;

    doInsertRowTable(num, nom, prenom, points);

    update_summary();
}

function consoleTableau() {
    console.log(persons);
}

function update_summary() {
    const element_lignes = document.getElementById("p1");
    element_lignes.textContent = `${lignes} ligne(s)`;

    const element_points = document.getElementById("p3");
    element_points.textContent = `Totale point(s) = ${total_points}`;
}

function doNewData() {
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    const nom = elt_nom.value;
    const prenom = elt_prenom.value;
    const points = parseInt(elt_points.value);

    if (nom == '' || prenom == '' || Number.isNaN(points)) {
        alert("Formulaire incomplet !");
    } else {
        doInsert(nom, prenom, points);

        persons.push({nom, prenom, points});

        elt_nom.value = '';
        elt_prenom.value = '';
        elt_points.value = '';
    }
}

let lignes = 0;
let total_points = 0;

const ajouter_btn = document.getElementById("ajouter");
const console_btn = document.getElementById("console");

let persons = [];

ajouter_btn.onclick = doNewData;
console_btn.onclick = consoleTableau;