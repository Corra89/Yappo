let nomi = ["Giacomo", "Aldo", "Giovanni"];

let table = document.getElementById("tabella");

/*let tr = document.createElement("tr");

let td = document.createElement("td");
td.innerHTML = "Aldo";
tr.appendChild(td);
table.appendChild(tr);*/

for(nome of nomi){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = nome;
    tr.appendChild(td);
    table.appendChild(tr);
}

/*let p = document.getElementById("prova");
console.log(p);
p.innerHTML = "Sto modificando p";*/

//creare una tabella che contenga i nomi e una casella con un numero associato