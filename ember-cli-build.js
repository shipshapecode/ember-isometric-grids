/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  app.import('vendor/modernizr.custom.js');
  app.import('vendor/imagesloaded.pkgd.min.js');
  app.import('vendor/masonry.pkgd.min.js');
  app.import('vendor/dynamics.min.js', {
    type: 'vendor',
    prepend: true
  });
  app.import('vendor/classie.js');
  app.import('vendor/animOnScroll.js');
  app.import('vendor/main.js');

  return app.toTree();
};
