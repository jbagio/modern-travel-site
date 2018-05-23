import $ from 'jquery';

class Modal {
  constructor () {
    this.openModalButton = $('.open-modal');
    this.closeModalButton = $('.modal__close');
    this.modal = $('.modal');
    this.events();
  }

  events () {
    this.openModalButton.click(this.openModal.bind(this));
    this.closeModalButton.click(this.closeModal.bind(this));
    $(document).keyup(this.keyPress.bind(this));
  }

  keyPress (e) {
    if (e.keyCode === 27) {
      this.closeModal();
    }
  }

  openModal () {
    this.modal.addClass('modal--is-visible');
    return false; // prevent auto scrolling to top caused by href=#
  }

  closeModal () {
    this.modal.removeClass('modal--is-visible');
  }
}

export default Modal;
