// Busquemos el formulario en el DOM
let formElement = document.querySelector(".popup__container");

let newProfile = document.querySelector(".popup_container-profile");
let newPlace = document.querySelector(".popup_container-place");

let editProfile = document.querySelector(".profile__edit_btn");
let addPlace = document.querySelector(".profile__add_btn");

let placeInput = document.querySelector(".popup__input_place");
let placeSrc = document.querySelector(".popup__input_src");

let nameInput = document.querySelector(".popup__input_name");
let jobInput = document.querySelector(".popup__input_job");

let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__description");

let closePlace = document.querySelector("#closeNewPlace");
let closeProfile = document.querySelector("#closeEditProfile");

function handleEditProfile(evt) {
  evt.preventDefault();
  newProfile.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function handleaddPlace(evt) {
  evt.preventDefault();
  newPlace.classList.add("popup_opened");
}

function handleCloseEditProfile(evt) {
  evt.preventDefault();
  newProfile.classList.remove("popup_opened");
}

function handleClosePlace(evt) {
  newPlace.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  newProfile.classList.remove("popup_opened");
  // Obtén los valores de cada campo desde la propiedad de valor correspondiente

  // Selecciona los elementos donde se introducirán los valores de los campos

  // Inserta nuevos valores utilizando el textContent
  // propiedad del método querySelector()
}
function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  newPlace.classList.remove("popup_opened");
}
// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega

formElement.addEventListener("submit", handleProfileFormSubmit);
formElement.addEventListener("submit", handleNewPlaceFormSubmit);

editProfile.addEventListener("click", handleEditProfile);
addPlace.addEventListener("click", handleaddPlace);

closePlace.addEventListener("click", handleClosePlace);
closeProfile.addEventListener("click", handleCloseEditProfile);
