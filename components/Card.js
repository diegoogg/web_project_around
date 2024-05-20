import { closeEsc, imagePopup } from "../scripts/utils.js";
import { PopupWithImage } from "./Popup.js";

export default class Card {
  constructor(name, link, handleCardClick) {
    this._name = name;
    this._link = link;
    this.handleCardClick = handleCardClick;
  }
  _getCard() {
    const template = document.querySelector(".template");
    const templadeNode = template.content.querySelector(".elements__card");
    const cardNode = templadeNode.cloneNode(true);

    cardNode.querySelector(".elements__image").src = this._link;
    cardNode.querySelector(".elements__image").alt =
      "Imagen de : " + this._name;
    cardNode.querySelector(".elements__image-description-title").textContent =
      this._name;

    cardNode
      .querySelector(".elements__image-delete-btn")
      .addEventListener("click", () => {
        cardNode.remove();
      });

    return cardNode;
  }

  _setEventListener(cardNode) {
    const likeBtn = cardNode.querySelector(".elements__image-like-btn");

    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("elements__image-like-btn-active");
    });
    cardNode.querySelector(".elements__image").addEventListener("click", () => {
      imagePopup.classList.add("popup_opened");
      document.addEventListener("keydown", closeEsc);
      imagePopup.querySelector(".popup__image").src = this._link;
      imagePopup.querySelector(".popup__image-title").textContent = this._name;
    });
  }
  returnCard() {
    const node = this._getCard();
    this._setEventListener(node);
    return node;
  }

  handleClick() {
    this.handleCardClick(this._data);
  }
}
