const form = document.getElementById("form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
const PHONE_REGEX = /^[0-9]{10}$/;

const isEmpty = (value) => value === "";

const isBetween = (length, min, max) => length > min && length < max;

const isEmailValid = (email) => EMAIL_REGEX.test(email);

const isPasswordValid = (password) => PASSWORD_REGEX.test(password);

const isPhoneValid = (phone) => PHONE_REGEX.test(phone);

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const errorContainer = formField.querySelector("small");
  errorContainer.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");
  const errorContainer = formField.querySelector("small");
  errorContainer.textContent = "";
};

const checkUsername = () => {
  let valid = false;
  const min = 3;
  const max = 25;
  const username = usernameInput.value.trim();

  if (isEmpty(username)) {
    showError(usernameInput, "El nombre de usuario es obligatorio.");
  } else if (!isBetween(username.length, min, max)) {
    showError(
      usernameInput,
      `El nombre debe tener entre ${min} y ${max} caracteres`
    );
  } else {
    showSuccess(usernameInput);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = emailInput.value.trim();
  if (isEmpty(email)) {
    showError(emailInput, "El email es obligatorio");
  } else if (!isEmailValid(email)) {
    showError(emailInput, "El email es invalido");
  } else {
    showSuccess(emailInput);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;
  const password = passwordInput.value.trim();
  if (isEmpty(password)) {
    showError(passwordInput, "La contraseña es obligatoria");
  } else if (!isPasswordValid(password)) {
    showError(
      passwordInput,
      "La contraseña debe teenr al menos 8 caracteres, una mayuscula, una minuscula y un simbolo."
    );
  } else {
    showSuccess(passwordInput);
    valid = true;
  }
  return valid;
};

const checkPhone = () => {
  let valid = false;
  const phone = phoneInput.value.trim();
  if (isEmpty(phone)) {
    showError(phoneInput, "El telefono es obligatorio");
  } else if (!isPhoneValid(phone)) {
    showError(phoneInput, "El telefono no es valido");
  } else {
    showSuccess(phoneInput);
    valid = true;
  }
  return valid;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const isUsernameValid = checkUsername();
  const isPasswordValid = checkPassword();
  const isEmailValid = checkEmail();
  const isPhoneValid = checkPhone();

  const isFormValid =
    isUsernameValid && isPasswordValid && isEmailValid && isPhoneValid;

  if (isFormValid) {
    form.submit();
  }
});

const debounce = (fn, delay = 500) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(null, args);
    }, delay);
  };
};

form.addEventListener(
  "input",
  debounce((e) => {
    switch (e.target.id) {
      case "username":
        checkUsername();
        break;
      case "email":
        checkEmail();
        break;
      case "password":
        checkPassword();
        break;
      case "phone":
        checkPhone();
        break;
    }
  })
);
