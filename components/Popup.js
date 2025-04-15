class Popup {
  constructor(popup) {}

  open() {}

  close() {}

  _handleEscapeClose() {}

  setEventListeners() {
    "click", () => {};
  }
}

class PopupwithForm extends Popup {
  constructor(popup, callbackfunction) {}

  _getInputValues() {}

  setEventListeners() {}
}


export default Popup;