const formElement = document.querySelector(".popup__container_profile");

const newProfile = document.querySelector(".popup_container-profile");
const newPlace = document.querySelector(".popup_container-place");

const editProfile = document.querySelector(".profile__edit");
const addPlace = document.querySelector(".profile__add");

const placeInput = document.querySelector(".popup__input_place");
const placeSrc = document.querySelector(".popup__input_src");

const nameInput = document.querySelector(".popup__input_name");
const jobInput = document.querySelector(".popup__input_job");

const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");

const closeEditBtn = document.querySelectorAll(".popup__close");

const newPlaceNameInput = newPlace.querySelector(".popup__input_place");
const newPlaceLinkInput = newPlace.querySelector(".popup__input_src");

const imagePopup = document.getElementById("image-popup");

const elementsArea = document.querySelector(".elements");

const initialCards = [
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

function closePopup(evt) {
  evt.preventDefault();
  newProfile.classList.remove("popup_opened");
  newPlace.classList.remove("popup_opened");
  imagePopup.classList.remove("popup_opened");
}

Array.from(closeEditBtn).forEach((item) => {
  item.addEventListener("click", closePopup);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  newProfile.classList.remove("popup_opened");
}

function handleNewPlaceFormSubmit(evt) {
  evt.preventDefault();
  newPlace.classList.remove("popup_opened");
}

formElement.addEventListener("submit", handleProfileFormSubmit);
formElement.addEventListener("submit", handleNewPlaceFormSubmit);

editProfile.addEventListener("click", editNewProfile);
addPlace.addEventListener("click", addNewPlace);

//closeNewPlace.addEventListener("click", closePlace);
//closeProfile.addEventListener("click", closeEditProfile);

function handleAddCard(evt) {
  evt.preventDefault();

  const cardNode = createCard(newPlaceNameInput.value, newPlaceLinkInput.value);

  elementsArea.prepend(cardNode);
  newPlace.classList.remove("popup_opened");
}

function createCard(name, link) {
  const template = document.querySelector(".template");
  const templadeNode = template.content.querySelector(".elements__card");
  const cardNode = templadeNode.cloneNode(true);

  cardNode.querySelector(".elements__image").src = link;
  cardNode.querySelector(".elements__image").alt = "Imagen de : " + name;
  cardNode.querySelector(".elements__image-description-title").textContent =
    name;

  cardNode
    .querySelector(".elements__image-delete-btn")
    .addEventListener("click", () => {
      cardNode.remove();
    });

  const likeBtn = cardNode.querySelector(".elements__image-like-btn");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("elements__image-like-btn-active");
  });
  cardNode.querySelector(".elements__image").addEventListener("click", () => {
    imagePopup.classList.add("popup_opened");
    imagePopup.querySelector(".popup__image").src = link;
    imagePopup.querySelector(".popup__image-title").textContent = name;
  });
  return cardNode;
}

newPlace.addEventListener("submit", handleAddCard);

initialCards.forEach((item) => {
  const cardNode = createCard(item.name, item.link);
  elementsArea.append(cardNode);
});
