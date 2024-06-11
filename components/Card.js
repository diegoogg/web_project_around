// import { closeEsc, imagePopup } from "../scripts/utils";

export default class Card {
  constructor(name, link, templateSelector, { handleClick }) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleClick = handleClick;
  }
  _getCard() {
    const template = document.querySelector(this._templateSelector);
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

  _setEventListeners(cardNode) {
    const likeBtn = cardNode.querySelector(".elements__image-like-btn");

    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("elements__image-like-btn-active");
    });

    cardNode.querySelector(".elements__image").addEventListener("click", () => {
      this._handleClick(this._name, this._link);
    });
  }
  returnCard() {
    const node = this._getCard();
    this._setEventListeners(node);
    return node;
  }
}
