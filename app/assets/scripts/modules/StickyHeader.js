import $ from 'jquery';
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor () {
    this.siteHeader = $('.site-header');
    this.headerTrigger = $('.large-hero__title');
    this.createHeaderWaypoint();
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
        }
      },
    });
  }
}

export default StickyHeader;
