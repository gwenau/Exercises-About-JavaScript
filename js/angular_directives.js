(function() {

  var app = angular.module('jsApp', []);

  app.controller('JsController', ["$scope", function($scope) {

    $scope.total = {
      id: 12321,
      purchase_type: "Gift",
      recipient_name: "Andy",
      price: 400,
      total_length: 1
    }

  }])
})();