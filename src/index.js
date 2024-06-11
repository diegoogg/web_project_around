import "./styles/index.css";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import {
  newPlaceNameInput,
  newPlaceLinkInput,
  nameInput,
  profileName,
  jobInput,
  profileJob,
  newProfile,
  closeEsc,
  newPlace,
  handleAddCard,
  initialCards,
  elementsArea,
  closeEditBtn,
  closePopup,
  formElement,
  handleProfileFormSubmit,
  handleNewPlaceFormSubmit,
  editProfile,
  addPlace,
  formConfig,
  createCard,
} from "../scripts/utils.js";

const formProfile = new FormValidator(formElement, formConfig);
const formPlace = new FormValidator(newPlace, formConfig);

const user = {
  name: ".profile__name",
  job: ".profile__description",
};

const userAbout = new UserInfo(user);
const popupProfile = new PopupWithForm(
  ".popup_container-profile",
  ({ name, job }) => {
    userAbout.setUserInfo(name, job);
    popupProfile.close();
  }
);

const popupCard = new PopupWithForm(
  ".popup_container-place",
  ({ url, place }) => {
    const cardNode = createCard(place, url, popupImage);
    elementsArea.prepend(cardNode);
    popupCard.close();

    newPlaceNameInput.value = "";
    newPlaceLinkInput.value = "";
  }
);

const popupImage = new PopupWithImage("#image-popup");

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardNode = createCard(item.name, item.link, popupImage);
      return cardNode;
    },
  },
  ".elements"
);
section.renderer();

editProfile.addEventListener("click", () => {
  popupProfile.open();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

addPlace.addEventListener("click", () => {
  popupCard.open();
});

formProfile.enableValidation();
formPlace.enableValidation();
