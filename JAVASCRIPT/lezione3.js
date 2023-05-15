let nomi = ["Giacomo", "Aldo", "Giovanni", "Marina"];

let prossimoNumero = 1;
aggiungiNomiListaIniziale();

function aggiungiNome(nome,numero){
    
    let table = document.getElementById("tabella");
    let tr = document.createElement("tr");
    let tdNome = document.createElement("td");
    tdNome.className = "nome";
    tdNome.innerHTML = nome;
    let tdNum = document.createElement("td");
    tdNum.innerHTML = numero;
    tr.appendChild(tdNum);
    tr.appendChild(tdNome);
    table.appendChild(tr);
}

function aggiungiNome(nome){
    
    let table = document.getElementById("tabella");
    let tr = document.createElement("tr");
    let tdNome = document.createElement("td");
    tdNome.className = "nome";
    tdNome.innerHTML = nome;
    let tdNum = document.createElement("td");
    tdNum.innerHTML = prossimoNumero++;
    tr.appendChild(tdNum);
    tr.appendChild(tdNome);
    table.appendChild(tr);
}

function aggiungiNomiListaIniziale(){

    for(let i = 0; i < nomi.length; i++){
      aggiungiNome(nomi[i]);
    } 
}

function coloraRosso(){
    let tdNomi = document.querySelectorAll(".nome");
    for(tdNome of tdNomi){
        tdNome.style.color="red";
        //tdNome.classList.add("rosso");
    }
}

// nella pagina precedente
// inserire un input di testo e
// un bottone aggiungi 
// e aggiungere il nome 
// alla tabella
function aggiungiNomeNuovo(){
    let nomeNuovo = document.getElementById('nomeNuovo').value;
    /*
    // metodo 1: contare i tr 
    let numeroNuovo = document.querySelectorAll("table#tabella tr");
    console.log(numeroNuovo.length);
    // metodo 2: contare le righe della #tabella 
    let tabella= document.getElementById("tabella");
    console.log(tabella.rows.length);
    
    // metodo 3: contare dall'inizio i nomi
    console.log(prossimoNumero);
    // metodo 4: accedere all'ultimo elemento 
    // della tabella (genericamente) e
    // prendere il valore del td
    let trList = document.querySelectorAll("table#tabella tr");
    let myTd = trList[trList.length - 1].querySelectorAll("td")[0];
    let numNuovo = parseInt(myTd.innerHTML)+1;
    console.log(numNuovo);
    //metodo 5: accedere all'ultimo elemento di una tabella
    let tabella2= document.getElementById("tabella");
    let numNuovo2 = parseInt(tabella2.rows[tabella2.rows.length - 1].cells[0].innerHTML) + 1;
    console.log(numNuovo2);*/

    // utilizza il metodo 3
    if(nomeNuovo == "" || nomeNuovo == "undefined")
        alert("Inserisci il nome");
    else{
        aggiungiNome(nomeNuovo);
        document.getElementById('nomeNuovo').value = "";
    }

    // utilizza il metodo 1,2,4,5
    //aggiungiNome(nomeNuovo,numNuovo);
}