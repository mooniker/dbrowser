angular.
  module('myApp').
  component('zipCodeViewer', {
    // templateUrl: 'zip-code-viewer.template.html',
    template: '<Label>Enter a zip code:</label><input type="text" ng-model="$ctrl.zip"></input><button ng-click="$ctrl.check()">submit</button>' +
        '<provider-card ng-repeat="provider in $ctrl.providers" provider="provider"></provider-card>', // +
    bindings: {
        // headers: '=',
        // test: '@',
        // debug: '&'
    },
    controller: function ZipCodeViewerController ($http) {

        var ctrl = this

        ctrl.providers = {}

        ctrl.check = function () {
            console.log('checking zip', ctrl.zip) // 20814 is good for testing
            $http.get('https://data.medicare.gov/resource/ikq5-jt9b.json?provider_zip_code=' + ctrl.zip)
                .then(function (payload) {
                    console.log(payload)
                    payload.data.forEach(function(deficiency) {
                        // console.log(deficiency.federal_provider_number)
                        var id = deficiency.federal_provider_number
                        if (!ctrl.providers[id]) {
                            ctrl.providers[id] = []
                        }
                        ctrl.providers[id].push(deficiency)
                    })
                }, function (err) {
                    console.error(err)
                })
        }
    }
  })
