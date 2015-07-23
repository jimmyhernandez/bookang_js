app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('home',{
      url: '/home',
      templateUrl: '/html/home.html',
      controller: 'EmailController'
    })
    .state('email',{
      url: '/email/:id',
      templateUrl: '/html/email.html',
      controller: 'AnotherController'
    });
  
  $urlRouterProvider.otherwise('/home');
}]);