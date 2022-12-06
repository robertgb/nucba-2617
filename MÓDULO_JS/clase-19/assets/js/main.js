const form = document.getElementById("form");
const cityInput = document.querySelector(".search-input");

const cardsContainer = document.querySelector(".card-container");
const waitMsg = document.querySelector(".wait");

let cities = JSON.parse(localStorage.getItem("cities")) || [];

const saveLocalStorage = (cities) => {
  localStorage.setItem("cities", JSON.stringify(cities));
};

const convertKelvinToCelsius = (kelvins) => Math.round(kelvins - 273.15);

const hideWaitMsg = (cities) => {
  if (cities.length) {
    waitMsg.classList.add("hidden");
    return;
  }
  waitMsg.classList.remove("hidden");
};

const getCityHTML = (city) => {
  return `
        <div class="card-clima animate">
        <i class="fa-solid fa-x close" data-id="${city.id}"></i>
        <div class="clima-info">
                    <h2 class="info-title">${city.name}</h2>
                    <p class="info-subtitle">${city.weather[0].description}</p>
                    <div class="info-temp">
                    <span class="temp">${convertKelvinToCelsius(
                      city.main.temp
                    )}°</span>
                    <span class="st">${convertKelvinToCelsius(
                      city.main.feels_like
                    )}° ST</span>
                    </div>
                </div>
                <div class="clima-img">
                    <img src="./assets/img/${city.weather[0].icon}.png" alt=""/>
                </div>
                <div class="clima-temp">
                    <div class="clima-max-min">
                    <span class="clima-max"
                        ><i class="fa-solid fa-arrow-up-long"></i>Max: ${convertKelvinToCelsius(
                          city.main.temp_max
                        )}°</span
                    >
                    <span class="clima-min"
                        ><i class="fa-solid fa-arrow-down-long"></i>Min: ${convertKelvinToCelsius(
                          city.main.temp_min
                        )}°</span>
            </div>
            <span class="clima-humedad">${city.main.humidity}% Humedad</span>
        </div>
        </div>
    `;
};

const renderCitiesList = (cities) => {
  cardsContainer.innerHTML = cities.map((city) => getCityHTML(city)).join("");
};

const searchCity = async (e) => {
  e.preventDefault();
  const searchedCity = cityInput.value.trim();

  if (searchedCity === "") {
    alert("Por favor ingrese una ciudad!");
    return;
  }
  const fetchedCity = await requestCity(searchedCity);

  if (!fetchedCity.id) {
    alert("La ciudad ingresada no existe!");
    form.reset();
    return;
  } else if (cities.some((city) => city.id === fetchedCity.id)) {
    // si ya existe la ciudad, le decimos que ya estamos mostrando el clima
    alert("Ya estamos mostrando el clima de esa ciudad!");
    form.reset();
    return;
  }

  cities = [fetchedCity, ...cities];
  renderCitiesList(cities);
  saveLocalStorage(cities);
  hideWaitMsg(cities);
  form.reset();
};

const removeCity = (e) => {
  if (!e.target.classList.contains("close")) return;
  // console.log(e.target.dataset)
  const clickedCityId = e.target.dataset.id;

  if (window.confirm("Está seguro que desea eliminar esta card de clima?")) {
    cities = cities.filter((city) => city.id !== Number(clickedCityId));
    renderCitiesList(cities);
    saveLocalStorage(cities);
    hideWaitMsg(cities);
  }
};

const init = () => {
  renderCitiesList(cities);
  form.addEventListener("submit", searchCity);
  cardsContainer.addEventListener("click", removeCity);
  hideWaitMsg(cities);
};
init();
