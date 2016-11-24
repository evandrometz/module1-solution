// (function () {
// 'use strict';
//
// angular.module('LunchCheckerApp', [])
//
// .controller('LunchCheckerController', LunchCheckerController);
//
// LunchCheckerController.$injector = ['$scope']
// function LunchCheckerController($scope) {
//   //$scope.foods = "List comma, separated dishes ,you usually have for lunch";
// $scope.foods = "List comma separated dishes you usually have for lunch";
// $scope.state = "";
//
// console.log($scope.foods);
//
//   $scope.count = function () {
//     var splitedFoods = $scope.foods.split(',');
//
//     if(splitedFoods.length>3)
//     {
//         $scope.state = "Too Much!";
//     }
//     else if (splitedFoods.length<=3)
//     {
//       $scope.state = "Enjoy!";
//     }
//     else if (splitedFoods.length==0)
//     {
//       $scope.state = "Please enter data first";
//     }
//
//   };
// }
//
// })();


(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$injector = ['$scope']
function LunchCheckController ($scope) {
  $scope.foods = "";
  $scope.totalValue = 0;
  $scope.state = "";


  $scope.count = function () {
      var splitedFoods = $scope.foods.split(',');

      for (var i = 0; i < splitedFoods.length; i++)
      {
        if(angular.equals(splitedFoods[i], ""))
        {
          splitedFoods.splice(i, 1);
          i--;
        }
      }

      if(splitedFoods.length>3)
      {
          $scope.state = "Too Much!";
      }
      else if (splitedFoods.length<=3)
      {
        $scope.state = "Enjoy!";
      }
      if(splitedFoods.length === 0)
      {
        $scope.state = "Please enter data first";
      }

    };

};


})();
