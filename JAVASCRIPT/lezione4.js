let nomi = ["Giacomo", "Aldo", "Giovanni"];

let table = document.getElementById("tabella");

for(nome of nomi){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let tdNum = docunt.createElement("td")
    tdNum.innerHTML = i+1;
    tr.appendChild(tdNum);
    td.innerHTML = nome;
    tr.appendChild(td);
    table.appendChild(tr);
}