function setEventListeners(form, formConfig) {
  const inputList = Array.from(form.querySelectorAll(formConfig.inputSelector));
  const buttonSubmit = form.querySelector(formConfig.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (event) => {
      const errorMsg = form.querySelector(
        `.popup__error_type_${inputElement.name}`
      );
      if (!inputElement.validity.valid) {
        inputElement.classList.add(formConfig.inputErrorClass);
        errorMsg.textContent = inputElement.validationMessage;
      } else {
        inputElement.classList.remove(formConfig.inputErrorClass);
        errorMsg.textContent = "";
      }
      buttonSubmit.disabled = !hasValidInput(inputList);
    });
  });
  buttonSubmit.disabled = !hasValidInput(inputList);
}

function enableValidation(formConfig) {
  const forms = document.querySelectorAll(formConfig.formSelector);
  forms.forEach((form) => {
    setEventListeners(form, formConfig);
  });
}

function hasValidInput(inputList) {
  return inputList.every((item) => {
    return item.validity.valid;
  });
}

enableValidation({
  formSelector: ".popup__info",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_has_error",
  errorClass: "popup__error",
});
