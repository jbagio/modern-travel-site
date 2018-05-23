import $ from 'jquery';
import $smoothScroll from 'jquery-smooth-scroll';
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor () {
    this.siteHeader = $('.site-header');
    this.headerTrigger = $('.large-hero__title');
    this.headerLinks = $('.primary-nav a');
    this.pageSections = $('.page-section');
    this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScroll();
  }

  addSmoothScroll () {
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint () {
    let self = this;
    new Waypoint({
      element: self.headerTrigger[0],
      handler: (direction) => {
        if (direction == 'down') {
          $(self.siteHeader).addClass('site-header--dark');
        } else {
          $(self.siteHeader).removeClass('site-header--dark');
          self.headerLinks.removeClass("is-current-link");
        }
      },
    });
  }

  createPageSectionWaypoints () {
    let self = this;
    this.pageSections.each((index, elem) => {
      new Waypoint({
        element: elem,
        handler: (direction) => {
          if (direction == 'down') {
            let matchingLink = elem.getAttribute('data-matching-link');
            self.headerLinks.removeClass('is-current-link');
            $(matchingLink).addClass('is-current-link');
          }
        },
        offset: '18%'
      });

      new Waypoint({
        element: elem,
        handler: (direction) => {
          if (direction == 'up') {
            let matchingLink = elem.getAttribute('data-matching-link');
            self.headerLinks.removeClass('is-current-link');
            $(matchingLink).addClass('is-current-link');
          }
        },
        offset: '-35%'
      });
    });
  }
}

export default StickyHeader;
