import $ from 'jquery';
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor (elems, offset) {
    this.itemsToReveal = elems;
    this.offset = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially () {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints () {
    let self = this;
    this.itemsToReveal.each((index, elem) => {
      new Waypoint({
        element: elem,
        handler: () => {
          $(elem).addClass('reveal-item--is-visible');
        },
        offset: self.offset
      });
    });
  }
}

export default RevealOnScroll;
