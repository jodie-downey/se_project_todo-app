import Popup from "./Popup.js";

class PopupwithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".popup__form");
  }

  //_getInputValues() {}

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (evt) => {
      console.log("submitted");
    });
  }
}

export default PopupwithForm;
