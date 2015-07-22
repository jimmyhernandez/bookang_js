app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('/',{
      url: '/index',
      templateUrl: '/html/index.html'
    })
    .state('home',{
      url: '/home',
      templateUrl: '/html/home.html',
      controller: 'EmailController'
    })
    .state('email',{
      url: '/email',
      templateUrl: '/html/email.html',
      controller: 'AnotherController'
    });
  
  $urlRouterProvider.otherwise('/');
}]);