const apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e&";
const latitude = 45.07;
const longitude = 7.69;

const currentWeatherDiv = document.getElementById("current-weather");

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&appid=${apiKey}`)
.then(response => response.json())
.then(data => {
    const currentWeather = data.current_weather;
    currentWeatherDiv.innerHTML = `Temperatura corrente: ${currentWeather.temperature}°C`;
 })
.catch(error => console.error(error));
 
 const esperienzeLavorative = [
    {
      azienda: "WAYNE ENTERPRISES",
      ruolo: "Responsabile",
      luogo: "Gotham",
      dataInizio: "04/05/1993",
      dataFine: "01/06/2020"
    },
    {
      azienda: "JUSTICE LEAGUE MEMBER",
      ruolo: "Socio part-time",
      luogo: "Gotham",
      dataInizio: "01/07/2020",
      dataFine: "01/12/2020"
    },
    {
      azienda: "COMMUNITY INVOLVEMENT",
      ruolo: "Vigilante",
      luogo: "Gotham",
      dataInizio: "20/06/2000",
      dataFine: "08/06/2023"
    }
  ];

  const esperienzeLavorativeContainer = document.getElementById("esperienze-lavorative");
  esperienzeLavorative.forEach(esperienza => {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${esperienza.azienda}</h5>
        <p class="card-text">${esperienza.ruolo}</p>
        <p class="card-text">${esperienza.luogo}</p>
        <p class="card-text">Dal ${esperienza.dataInizio} al ${esperienza.dataFine}</p>
      </div>
    `;
    esperienzeLavorativeContainer.appendChild(card);
  });

  const formEsperienzaLavorativa = document.getElementById("form-esperienza-lavorativa");
  formEsperienzaLavorativa.addEventListener("submit", event => {
    event.preventDefault();
    const azienda = document.getElementById("azienda").value;
    const ruolo = document.getElementById("ruolo").value;
    const luogo = document.getElementById("luogo").value;
    const dataInizio = document.getElementById("data-inizio").value;
    const dataFine = document.getElementById("data-fine").value;
    const nuovaEsperienza = {
      azienda: azienda,
      ruolo: ruolo,
      luogo: luogo,
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
        <p class="card-text">${nuovaEsperienza.luogo}</p>
        <p class="card-text">Dal ${nuovaEsperienza.dataInizio} al ${nuovaEsperienza.dataFine}</p>
      </div>
    `;
    esperienzeLavorativeContainer.appendChild(card);
    formEsperienzaLavorativa.reset();
  });
