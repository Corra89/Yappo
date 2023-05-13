let nome = "giOVANNi "

let cognome = "bIANchi"

function maiuscole(){ 
  nome=nome.toLowerCase();
  nome=nome.charAt(0).toUpperCase()
  + nome.slice(1);
  cognome=cognome.toLowerCase();
  cognome=cognome.charAt(0).toUpperCase()
  + cognome.slice(1);
  return nome.concat(cognome);
}

let nc = maiuscole(nome);

console.log(nc);

let testo = document.getElementById(".testo");

function changeColor(testo, value){
    document.getElementById(testo).style.color = value;
}


