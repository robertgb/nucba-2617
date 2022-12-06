/*
    https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
*/

const API_KEY = "YOUR_API_KEY";

const requestCity = async (city) => {
  const baseURL = "https://api.openweathermap.org/data/2.5/weather";
  const queryParams = `?q=${city}&appid=${API_KEY}&lang=es`;

  try {
    const response = await fetch(baseURL + queryParams);
    const data = await response.json();
    console.log(data, "data from OpenWeather");
    return data;
  } catch (error) {
    alert("Hubo un error al consultar la API de OpenWeather! :( ");
  }
};

// requestCity('Rosario')
