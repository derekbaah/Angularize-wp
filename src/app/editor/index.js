import ngMaterial from 'angular-material';
import PostSettings from './settings/settings';

let MODULE_NAME = "AngularizeEditor";

angular.module(MODULE_NAME, [
    ngMaterial,
    'material.svgAssetsCache',
  ])
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
     .primaryPalette('purple')
     .accentPalette('indigo')
  })

    .component('postSettings', PostSettings);

export default MODULE_NAME;