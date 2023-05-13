let nomi = ["Giacomo", "Aldo", "Giovanni"];

let table = document.getElementById("tabella");

for(let i = 0; i < nomi.length; i++){
    let tr = document.createElement("tr");
    let thNome = document.createElement("titolo");
    thNome.innerHTML = nomi[i];
    let thNum = document.createElement("num");
    thNum.innerHTML = i+1;
    tr.appendChild(thNum);
    tr.appendChild(thNome);
    table.appendChild(tr);
}  