import "./styles/index.css";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { api } from "../components/Api.js";
import {
  newPlaceNameInput,
  newPlaceLinkInput,
  nameInput,
  profileName,
  jobInput,
  profileJob,
  newPlace,
  initialCards,
  elementsArea,
  formElement,
  editProfile,
  addPlace,
  formConfig,
  createCard,
  ediAvatar,
} from "../components/utils.js";

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
    return api.updateUser(name, job).then(() => {
      userAbout.setUserInfo(name, job);
      popupProfile.close();
    });
  }
);

const popupCard = new PopupWithForm(
  ".popup_container-place",
  ({ place, url }) => {
    return api.postCards(place, url).then((card) => {
      const cardNode = createCard(
        place,
        url,
        popupImage,
        card.likes,
        card._id,
        card.owner,
        currentUser
      );
      elementsArea.prepend(cardNode);
      popupCard.close();

      newPlaceNameInput.value = "";
      newPlaceLinkInput.value = "";
    });
  }
);

const popupEditAvatar = new PopupWithForm(".popup_avatar", ({ avatar }) => {
  return api.updateAvatar(avatar).then(() => {
    document.querySelector(".profile__avatar").src = avatar;
    popupEditAvatar.close();
  });
});

const popupImage = new PopupWithImage(".popup_card");

let currentUser = null;
let section = null;

api.getUserInfo().then((user) => {
  currentUser = user;
  userAbout.setUserInfo(user.name, user.job);
  const avatar = document.querySelector(".profile__avatar");
  avatar.src = user.avatar;
  api.getCards().then((cards) => {
    section = new Section(
      {
        items: cards,
        renderer: (item) => {
          const cardNode = createCard(
            item.name,
            item.link,
            popupImage,
            item.likes,
            item._id,
            item.owner,
            currentUser
          );
          return cardNode;
        },
      },
      ".elements"
    );
    section.renderer();
  });
});

editProfile.addEventListener("click", () => {
  popupProfile.open();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

addPlace.addEventListener("click", () => {
  popupCard.open();
});

ediAvatar.addEventListener("click", () => {
  popupEditAvatar.open();
});

formProfile.enableValidation();
formPlace.enableValidation();
