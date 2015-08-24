var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider, $controllerProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'myController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'myController'
  });

  $routeProvider.otherwise({ redirectTo: '/login' });

    $controllerProvider.register('myNavController', function($rootScope, $scope) {
      $scope.username = '';

      $rootScope.$on('onLoginSuccess', function(data, args) {
        console.log(data);
        console.log('getting username ' + args.username);
        $scope.username = args.username;
      });
    });

    $controllerProvider.register('myController', function($rootScope, $scope, $location) {
      var LoginContext = '';

      $scope.credentials = { username: "", password: "" };

      function init() {

        var leaveMessage = "Hover the image!"

        $('#image1').bind('mouseenter', function(){
          $scope.message = "Mouse on house 1.";
          $scope.$apply();
        });

        $('#image2').bind('mouseenter', function(){
          $scope.message = "Mouse on house 2.";
          $scope.$apply();
        });

        $('#image1').bind('mouseleave', function(){
          $scope.message = leaveMessage;
          $scope.$apply();
        });

        $('#image2').bind('mouseleave', function(){
          $scope.message = leaveMessage;
          $scope.$apply();
        });
      }

      $scope.login = function(credentials) {

        var result = checkCredentials($scope.credentials);

        if(result == 1) {
          $rootScope.$broadcast('onLoginSuccess', {username: $scope.credentials.username});
          $location.path('/home');
        } else {
          alert('error at login');
        }
      };

      function checkCredentials(credentials) {
        if (credentials.username !== "foo"
            || credentials.password !== "password") {
          return false;
        } else {
          LoginContext = 'foo';
          $scope.username = 'foo';
          $scope.$apply();
          return true;
        }
      };

      $scope.logout = function() {
        logout();
      }

      function logout() {
        $location.path('#');
      }

      init();
    });
});
