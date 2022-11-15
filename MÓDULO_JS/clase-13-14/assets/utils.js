const isEmpty = (value) => !value.length;

const isEmailValid = (email) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);

const isPhoneValid = (phone) => /^[0-9]{10}$/.test(phone);

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.add("error");
  const errorContainer = formField.querySelector("small");
  errorContainer.textContent = message;
};

const clearError = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  const errorContainer = formField.querySelector("small");
  errorContainer.textContent = "";
};

const isDateValid = (date) => {
  const currentDate = new Date();
  const turnoDate = new Date(date);

  return date.length && currentDate < turnoDate;
};

// '2022-10-31' => '31/10/2022'
const formatDate = (date) => date.split("-").reverse().join("/");

const getRadioValue = (inputs) =>
  [...inputs].find((input) => input.checked)?.value;

const getCheckedOptions = (inputs) =>
  [...inputs].filter((input) => input.checked).map((input) => input.value);

const setTimeBackground = (quantity) =>
  quantity === "Menos de 5" ? "red-card" : "black-card";

const setDateBackgroud = (quantity) =>
  quantity === "Más de 10" ? "red-card" : "violet-card";

const setCardBackground = (quantity) => {
  return quantity === "Más de 10"
    ? "violet-card"
    : quantity === "Entre 5 y 10"
    ? "red-card"
    : "black-card";
};

const setCardImg = (quantity) => {
  return quantity === "Más de 10"
    ? "./assets/img/server.png"
    : quantity === "Entre 5 y 10"
    ? "./assets/img/laptop.png"
    : "./assets/img/lupa.png";
};

const setCardImgClass = (quantity) => {
  return quantity === "Más de 10"
    ? "sever-img"
    : quantity === "Entre 5 y 10"
    ? "laptop-img"
    : "lupa-img";
};

const getNextDay = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};

const getTomorrowDate = () => {
  const year = getNextDay().getFullYear();
  const month = getNextDay().getMonth() + 1;
  const day = getNextDay().getDate();
  return `${year}-${month}-${day}`;
};

const setDateIntervals = () => {
  dateInput.value = getTomorrowDate();
  dateInput.min = getTomorrowDate();
  dateInput.max = getNextDay().getFullYear() + "-12-31";
};
