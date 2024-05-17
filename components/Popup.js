export default class Popup {
  constructor(popup) {
    this._popup = popup;
  }
  open() {
    this._popup.classList.add("popup_opened");
  }
  close() {
    this._popup.classList.add("popup_opened");
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    const closeEditBtn = this.popup.querySelectorAll(".popup__close");
    Array.from(closeEditBtn).forEach((item) => {
      item.addEventListener("click", () => this.close);
    });
    const formOverlay = this.popup.querySelector(".popup__form");
    formOverlay.forEach((overlay) => {
      overlay.addEventListener("click", () => this.close);
    });
    document.addEventListener("keydown", this._handleEscClose);
  }
}

export class PopupWithImage extends Popup {
  constructor(popup, description, src) {
    super(popup);
    this.description = document.querySelector(description);
    this.src = document.querySelector(src);
  }
  open(imagerSrc, imageDescription) {
    super.open();
    this.description.src = imagerSrc;
    this.imageDescription.textContent = imageDescription;
  }
}

export class PopupWithForm extends Popup {
  constructor(popup, callback) {
    super(popup);
    this.callback = callback;
  }
  _getInputValues() {
    const inputData = this.popup.querySelectorAll(".popup__input");
    const data = {};

    for (input of inputData) {
      data[input.name] = input.value;
    }
    return inputData;
  }
  setEventListeners() {
    super.setEventListeners();
    const formElement = this.popup.querySelector(".popup__form_profile");
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      const formData = this._getInputValues();

      this.callback(formData);
      this.close();
    });
  }
  close() {
    super.close();
  }
}
