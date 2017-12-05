angular.module("app").controller("ctrl", function($scope) {
  $scope.test = "Get to tha choppa!";
  $scope.input = "This is the initial value";
  $scope.cars = [
    "Toyota Camry",
    "Nissan Xterra",
    "Ford Mustang",
    "Nissan Altima"
  ];
  $scope.me = {
    name: "Shea",
    age: 34,
    location: "NRH, Tx"
  };
  $scope.logger = car => console.log($scope.select);
});
