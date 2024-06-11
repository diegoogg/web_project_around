import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(selector, handleSubmit) {
    super(selector);
    this._handleSubmit = handleSubmit;
  }
  getInputValues() {
    const popupOpen = document.querySelector(this._popup);
    const form = popupOpen.querySelector("form");
    const inputData = {};

    const inputForm = Array.from(form.elements);

    inputForm.forEach((element) => {
      if (element.name) {
        inputData[element.name] = element.value;
      }
    });

    return inputData;
  }

  setEventListeners() {
    super.setEventListeners();
    const popupOpen = document.querySelector(this._popup);
    const form = popupOpen.querySelector("form");
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this.getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    /*
    const popupOpen = document.querySelector(this._popup);
    const form = popupOpen.querySelector("form");
    form.reset(); */
  }
}
