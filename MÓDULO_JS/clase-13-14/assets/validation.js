const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const dateInput = document.getElementById("date");
const hourInput = document.getElementById("hour");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const radioInputs = document.querySelectorAll('input[name="quantity"]');
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
const aboutInput = document.getElementById("message");

const checkTextInput = (input) => {
  let isValid = false;
  const content = input.value.trim();
  if (isEmpty(content)) {
    showError(input, "* El campo es obligatorio.");
  } else {
    clearError(input);
    isValid = true;
  }
  return isValid;
};

const checkEmail = () => {
  let isValid = false;
  const emailValue = emailInput.value.trim();
  if (isEmpty(emailValue)) {
    showError(emailInput, "* El email es obligatorio.");
  } else if (!isEmailValid(emailValue)) {
    showError(emailInput, "* El email no es válido.");
  } else {
    clearError(emailInput);
    isValid = true;
  }
  return isValid;
};

const checkPhone = () => {
  let isValid = false;
  const phoneValue = phoneInput.value.trim();
  if (isEmpty(phoneValue)) {
    showError(phoneInput, "* El teléfono es requerido.");
  } else if (!isPhoneValid(phoneValue)) {
    showError(phoneInput, "* El teléfono no es válido.");
  } else {
    clearError(phoneInput);
    isValid = true;
  }
  return isValid;
};

const checkDate = () => {
  let isValid = false;
  const dateValue = dateInput.value;
  if (!isDateValid(dateValue)) {
    showError(dateInput, "* La fecha ingresada no es válida.");
  } else {
    clearError(dateInput);
    isValid = true;
  }
  return isValid;
};

const isFormValid = () => {
  const isNameValid = checkTextInput(nameInput);
  const isSurnameValid = checkTextInput(surnameInput);
  const isPhoneValid = checkPhone();
  const isEmailValid = checkEmail();
  const isValidDate = checkDate();

  return (
    isNameValid && isSurnameValid && isPhoneValid && isEmailValid && isValidDate
  );
};
