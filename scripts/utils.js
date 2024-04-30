import FormValidator from "./FormValidator.js";
import {
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
} from "./script.js";

const formProfile = new FormValidator(formElement, formConfig);
const formPlace = new FormValidator(newPlace, formConfig);

function editNewProfile(evt) {
  evt.preventDefault();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  newProfile.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
}

function addNewPlace(evt) {
  evt.preventDefault();
  newPlace.classList.add("popup_opened");
  document.addEventListener("keydown", closeEsc);
}

newPlace.addEventListener("submit", handleAddCard);

initialCards.forEach((item) => {
  const cardNode = createCard(item.name, item.link);
  elementsArea.append(cardNode);
});

Array.from(closeEditBtn).forEach((item) => {
  item.addEventListener("click", closePopup);
});

formElement.addEventListener("submit", handleProfileFormSubmit);
formElement.addEventListener("submit", handleNewPlaceFormSubmit);

editProfile.addEventListener("click", editNewProfile);
addPlace.addEventListener("click", addNewPlace);

formProfile.enableValidation();
formPlace.enableValidation();