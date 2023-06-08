let listaOggetti = [];

listaOggetti.push({id: 1, titolo: "Oggetto 1", data: "2021-01-01"});
listaOggetti.push({id: 2, titolo: "Oggetto 2", data: "2021-02-01"});
listaOggetti.push({id: 3, titolo: "Oggetto 3", data: "2021-03-01"});

let listaElement = document.querySelector(".lista-oggetti");

listaOggetti.forEach(oggetto => {
  let cardElement = document.createElement("div");
  cardElement.classList.add("col-md-4");

  let titoloElement = document.createElement("h2");
  titoloElement.textContent = oggetto.titolo;

  let dataElement = document.createElement("p");
  dataElement.textContent = oggetto.data;

  let eliminaButton = document.createElement("button");
  eliminaButton.classList.add("btn", "btn-danger");
  eliminaButton.textContent = "Elimina";
  eliminaButton.addEventListener("click", () => {
    listaOggetti = listaOggetti.filter(item => item.id!== oggetto.id);
    aggiornaLista();
  });

  cardElement.appendChild(titoloElement);
  cardElement.appendChild(dataElement);
  cardElement.appendChild(eliminaButton);
  listaElement.appendChild(cardElement);
});

function aggiungiOggetto() {
 
  let inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.placeholder = "Inserisci il titolo dell'oggetto";

  let dataInput = document.createElement("input");
      dataInput.type = "date";
      dataInput.placeholder = "Inserisci la data dell'oggetto";

  let aggiungiButton = document.createElement("button");
  aggiungiButton.classList.add("btn", "btn-primary");
  aggiungiButton.textContent = "Aggiungi";
  aggiungiButton.addEventListener("click", () => {
    let titolo = inputElement.value;
    let data = dataInput.value;
    let nuovoOggetto = {
      id: Date.now(),
      titolo: titolo,
      data: data
    };

listaOggetti.push(nuovoOggetto);

aggiornaLista();
});

document.body.appendChild(inputElement);
document.body.appendChild(dataInput);
document.body.appendChild(aggiungiButton);
}

function aggiornaLista() {
listaElement.innerHTML = "";

listaOggetti.forEach(oggetto => {
let cardElement = document.createElement("div");
cardElement.classList.add("col-md-4");

let titoloElement = document.createElement("h2");
titoloElement.textContent = oggetto.titolo;

let dataElement = document.createElement("p");
dataElement.textContent = oggetto.data;

let eliminaButton = document.createElement("button");
eliminaButton.classList.add("btn", "btn-danger");
eliminaButton.textContent = "Elimina";
eliminaButton.addEventListener("click", () => {
listaOggetti = listaOggetti.filter(item => item.id!== oggetto.id);

aggiornaLista();
});

cardElement.appendChild(titoloElement);
cardElement.appendChild(dataElement);
cardElement.appendChild(eliminaButton);

listaElement.appendChild(cardElement);
});
}
