angular.
  module('myApp').
  component('providerCard', {
    // templateUrl: 'zip-code-viewer.template.html',
    templateUrl: 'provider-card.template.html',
    bindings: {
        provider: '<',
        // provider: '@',
        // debug: '&'
    },
    // controller: function ProviderCardController ($http) {

    // }
  })
