let nomi = ["Giacomo", "Aldo", "Giovanni"];

let table = document.getElementById("tabella");

for(let i = 0; i < nomi.length; i++){
    let tr = document.createElement("tr");
    let tdNome = document.createElement("td");
    tdNome.innerHTML = nomi[i];
    let tdNum = docunt.createElement("td");
    tdNum.innerHTML = i+1;
    tr.appendChild(tdNum);
    tr.appendChild(tdNome);
    table.appendChild(tr);
}  