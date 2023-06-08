 // Array di esperienze lavorative
 const esperienzeLavorative = [
    {
      azienda: "Azienda 1",
      ruolo: "Responsabile",
      dataInizio: "01/01/2020",
      dataFine: "01/06/2020"
    },
    {
      azienda: "Azienda 2",
      ruolo: "Programmatore",
      dataInizio: "01/07/2020",
      dataFine: "01/12/2020"
    },
    {
      azienda: "Azienda 3",
      ruolo: "Responsabile",
      dataInizio: "01/12/2020",
      dataFine: "Presente"
    }
  ];

  // Popola le card delle esperienze lavorative
  const esperienzeLavorativeContainer = document.getElementById("esperienze-lavorative");
  esperienzeLavorative.forEach(esperienza => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${esperienza.azienda}</h5>
        <p class="card-text">${esperienza.ruolo}</p>
        <p class="card-text">Dal ${esperienza.dataInizio} al ${esperienza.dataFine}</p>
      </div>
    `;
    esperienzeLavorativeContainer.appendChild(card);
  });

  // Gestisce l'aggiunta di una nuova esperienza lavorativa
  const formEsperienzaLavorativa = document.getElementById("form-esperienza-lavorativa");
  formEsperienzaLavorativa.addEventListener("submit", event => {
    event.preventDefault();
    const azienda = document.getElementById("azienda").value;
    const ruolo = document.getElementById("ruolo").value;
    const dataInizio = document.getElementById("data-inizio").value;
    const dataFine = document.getElementById("data-fine").value;
    const nuovaEsperienza = {
      azienda: azienda,
      ruolo: ruolo,
      dataInizio: dataInizio,
      dataFine: dataFine
    };
    esperienzeLavorative.push(nuovaEsperienza);
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${nuovaEsperienza.azienda}</h5>
        <p class="card-text">${nuovaEsperienza.ruolo}</p>
        <p class="card-text">Dal ${nuovaEsperienza.dataInizio} al ${nuovaEsperienza.dataFine}</p>
      </div>
    `;
    esperienzeLavorativeContainer.appendChild(card);
    formEsperienzaLavorativa.reset();
  });


//newExperience.innerHTML = `${"Anno di Inizio: " + annoInizio.value} ${"Anno di Fine: " + annoFine.value} ${"Nome del Lavoro: " + nomeLavoro.value} ${"Nome dell'azienda: " + nomeAzienda.value}`;