import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  didInsertElement() {
    [].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el) {
      new IsoGrid(el, {
        type: 'scrollable',
        transform: 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
        onGridLoaded() {
          classie.add(document.querySelector('.isometric-grid'), 'grid-loaded');
        }
      });
    });
  }
});
