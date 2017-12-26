import Component from '@ember/component';
import layout from './template';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default Component.extend({
  layout,
  didInsertElement() {
    [].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el) {
      new IsoGrid(el, {
        type: 'scrollable',
        transform: 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
        stackItemsAnimation: {
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
        },
        onGridLoaded() {
          classie.add(document.body, 'grid-loaded');
        }
      });
    });
  }
});
