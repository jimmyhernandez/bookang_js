app.controller('AnotherController',['$scope','$stateParams','content',function($scope,$stateParams,content){
  console.log($stateParams.id);
  console.log(content.getEmailMessageById($stateParams.id));
  $scope.message = content.getEmailMessageById($stateParams.id);
}]);