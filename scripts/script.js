let formElement = document.querySelector(".popup__container_profile");

let newProfile = document.querySelector(".popup_container-profile");
let newPlace = document.querySelector(".popup_container-place");

let editProfile = document.querySelector(".profile__edit");
let addPlace = document.querySelector(".profile__add");

let placeInput = document.querySelector(".popup__input_place");
let placeSrc = document.querySelector(".popup__input_src");

let nameInput = document.querySelector(".popup__input_name");
let jobInput = document.querySelector(".popup__input_job");

let profileName = document.querySelector(".profile__name");
let profileJob = document.querySelector(".profile__description");

let closeNewPlace = document.querySelector("#closeNewPlace");
let closeProfile = document.querySelector("#closeEditProfile");

function editNewProfile(evt) {
  evt.preventDefault();
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  newProfile.classList.add("popup_opened");
}

function addNewPlace(evt) {
  evt.preventDefault();
  newPlace.classList.add("popup_opened");
}

function closeEditProfile(evt) {
  evt.preventDefault();
  newProfile.classList.remove("popup_opened");
}

function closePlace(evt) {
  evt.preventDefault();
  newPlace.classList.remove("popup_opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  newProfile.classList.remove("popup_opened");
}

/*
function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  newPlace.classList.remove("popup_opened");
} */

formElement.addEventListener("submit", handleProfileFormSubmit);
//formElement.addEventListener("submit", handleNewPlaceFormSubmit);

editProfile.addEventListener("click", editNewProfile);
addPlace.addEventListener("click", addNewPlace);

closeNewPlace.addEventListener("click", closePlace);
closeProfile.addEventListener("click", closeEditProfile);
