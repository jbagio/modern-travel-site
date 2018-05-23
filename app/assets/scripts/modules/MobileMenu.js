import $ from 'jquery';

class MobileMenu {
  constructor () {
    this.siteHeader = $('.site-header');
    this.menuIcon = $('.site-header__menu-icon');
    this.menuContent = $('.site-header__menu-content');
    this.events();
  }

  events () {
    // "this" will be menuIcon (dom target of the click event handler function)
    // so bind must be point it to our object
    this.menuIcon.click(this.toggleTheMenu.bind(this));
  }

  toggleTheMenu () {
    this.siteHeader.toggleClass('site-header--is-expanded');
    this.menuContent.toggleClass('site-header__menu-content--is-visible');
    this.menuIcon.toggleClass('site-header__menu-icon--close-x');
  }
}

export default MobileMenu;
