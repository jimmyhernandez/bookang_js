app.controller('EmailController',['$scope','content',function($scope,content){
  console.log('Values from ContentService: '+ content.getConfiguration());
  $scope.content = content.getConfiguration();
  $scope.messages = content.getEmailMessages();
  
}]);