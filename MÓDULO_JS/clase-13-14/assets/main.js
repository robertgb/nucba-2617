const cardsContainer = document.getElementById("cards-container");
const form = document.getElementById("form");

let agenda = JSON.parse(localStorage.getItem("calendar")) || [];
let ID = 0;
const saveToLocalStorage = () => {
  localStorage.setItem("calendar", JSON.stringify(agenda));
};

const saveTurno = () => {
  ID++;
  agenda = [
    ...agenda,
    {
      id: ID,
      name: nameInput.value,
      surname: surnameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      date: formatDate(dateInput.value),
      time: hourInput.value,
      quantity: getRadioValue(radioInputs),
      extras: getCheckedOptions(checkboxInputs),
      about: aboutInput.value,
    },
  ];
};

const renderTurno = ({
  id,
  name,
  surname,
  phone,
  email,
  date,
  time,
  quantity,
  extras,
}) => {
  return `
    <div class="card ${setCardBackground(quantity)}">
        <div class="card__left">
        <h2 class="card__title">Orden: Nº${id} - ${name} ${surname}</h2>
        <p class="card__qty">${quantity}</p>
        <p class="card__extras">Extra: ${extras}</p>
        <div class="tags">
            <span class="card__hour ${setTimeBackground(
              quantity
            )}">${time} HS</span>
            <span class="card__date ${setDateBackgroud(
              quantity
            )}">${date}</span>
        </div>
        </div>
        <div class="card__right">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}" target="_blank"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://api.whatsapp.com/send?phone=+549${phone}&text=Boenas" target="_blank"><i class="fa-solid fa-phone-flip"></i></a>

        <img src="${setCardImg(quantity)}" class="card__img ${setCardImgClass(
    quantity
  )}" alt="" />
        </div>
    </div>
    `;
};

const renderAgenda = () => {
  cardsContainer.innerHTML = agenda.map((turno) => renderTurno(turno)).join("");
};

const submitForm = (e) => {
  e.preventDefault();
  if (isFormValid()) {
    saveTurno();
    alert("El turno se ha cargado correctamente!");
    form.reset();
    saveToLocalStorage();
    renderAgenda();
    setDateIntervals();
  }
};

function init() {
  renderAgenda();
  window.addEventListener("DOMContentLoaded", setDateIntervals);
  form.addEventListener("submit", submitForm);
}
init();
