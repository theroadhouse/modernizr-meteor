Package.describe({
  summary: "Modernizr repackaged for Meteor"
});

Package.on_use(function (api) {
  api.add_files('modernizr.js', 'client');
});

