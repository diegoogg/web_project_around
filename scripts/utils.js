import Card from "./Card.js";

export const formElement = document.querySelector(".popup__form_profile");

export const newProfile = document.querySelector(".popup_container-profile");
export const newPlace = document.querySelector(".popup_container-place");

export const editProfile = document.querySelector(".profile__edit");
export const addPlace = document.querySelector(".profile__add");

export const placeInput = document.querySelector(".popup__input_place");
export const placeSrc = document.querySelector(".popup__input_src");

export const nameInput = document.querySelector(".popup__input_name");
export const jobInput = document.querySelector(".popup__input_job");

export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__description");

export const closeEditBtn = document.querySelectorAll(".popup__close");

export const newPlaceNameInput = newPlace.querySelector(".popup__input_place");
export const newPlaceLinkInput = newPlace.querySelector(".popup__input_src");

export const imagePopup = document.getElementById("image-popup");

export const elementsArea = document.querySelector(".elements");

export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export const formConfig = {
  formSelector: ".popup__info",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__input_has_error",
  errorClass: "popup__error",
};

export function closePopup(evt) {
  evt.preventDefault();
  newProfile.classList.remove("popup_opened");
  newPlace.classList.remove("popup_opened");
  imagePopup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEsc);
}

export function closeEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(evt);
  }
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(evt);
}

export function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();

  closePopup(evt);
}

export function createCard(name, link) {
  return new Card(name, link, "#template").returnCard();
}

export function handleAddCard(evt) {
  evt.preventDefault();

  const cardNode = createCard(newPlaceNameInput.value, newPlaceLinkInput.value);

  elementsArea.prepend(cardNode);
  closePopup(evt);
  newPlaceNameInput.value = "";
  newPlaceLinkInput.value = "";
}
