Package.describe({
  name: "pba:jquery-svg-class",
  summary: "extends jquery's add/remove/has/toggle class manipulation to SVGElement",
  environments: ['client'] ,
  git:"git@github.com:paulbalomiri/meteor-jquery-svg-class.git",
  version: '0.0.0'
});

Package.on_use(function(api) {
  api.use( 'jquery@1.0.0', 'client');
  api.add_files('jquery-svg-class.js','client');
  return 
});

