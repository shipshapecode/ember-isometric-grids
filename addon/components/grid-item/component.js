import Component from '@ember/component';
import layout from './template';
import { scheduleOnce } from '@ember/runloop';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Component.extend({
  layout,
  tagName: 'li',
  classNames: ['grid__item'],
  mouseEnter() {
    this._expandSubItems();
  },
  mouseLeave() {
    this._collapseSubItems();
  },
  _expandSubItems() {
    scheduleOnce('afterRender', this, function() {
      const itemLink = this.element.querySelector('a');
      const subItems = [].slice.call(itemLink.querySelectorAll('.layer'));
      const subItemsTotal = subItems.length;

      itemLink.style.zIndex = this.element.style.zIndex = this.gridItemsTotal;

      subItems.forEach((subitem, pos) => {
        dynamics.stop(subitem);
        dynamics.animate(subitem, this._stackItemsAnimation.properties(pos), this._stackItemsAnimation.options(pos, subItemsTotal));
      });
    });
  },

  _collapseSubItems(item) {
    scheduleOnce('afterRender', this, function() {
      const element = this.element;
      const itemLink = this.element.querySelector('a');
      [].slice.call(itemLink.querySelectorAll('.layer')).forEach((subitem, pos) => {
        dynamics.stop(subitem);
        dynamics.animate(subitem, {
          translateZ: 0 // enough to reset any transform value previously set
        }, {
          duration: 100,
          complete() {
            itemLink.style.zIndex = element.style.zIndex = 1;
          }
        });
      });
    });
  },

  _stackItemsAnimation: {
    properties(pos) {
      return {
        translateZ: (pos + 1) * 50,
        rotateZ: getRandomInt(-3, 3)
      };
    },
    options(pos, itemstotal) {
      return {
        type: dynamics.bezier,
        duration: 500,
        points: [{ 'x': 0, 'y': 0, 'cp': [{ 'x': 0.2, 'y': 1 }] }, {
          'x': 1,
          'y': 1,
          'cp': [{ 'x': 0.3, 'y': 1 }]
        }]
        //delay: (itemstotal-pos-1)*40
      };
    }
  }
});
