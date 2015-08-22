var app = angular.module("app", ['ngRoute'])

app.config(function($routeProvider) {

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });

  $routeProvider.otherwise({ redirectTo: '/login' });

});

app.factory("AuthenticationService", function($location, LoginContext) {
  return {
    login: function(credentials, successCallback, errorCallback) {
        if (credentials.username !== "foo" || credentials.password !== "password") {
          if(errorCallback) {
            errorCallback();
          }
        } else {
        if(successCallback) {
          successCallback();
        }
        LoginContext = 'foo';
      }
    },
    logout: function() {
      $location.path('/login');
    }
  };
});

app.controller("LoginController", function($scope, $location, AuthenticationService, LoginContext) {
  $scope.credentials = { username: "", password: "" };

  $scope.login = function() {
    AuthenticationService.login($scope.credentials, function() {
      $location.path('/home');
    }, function() {
      alert('error at login');
    });
  }
});

app.controller("NavbarController", function($scope, $location, AuthenticationService, LoginContext) {
  $scope.username = LoginContext;
});

app.controller("HomeController", function($scope, AuthenticationService) {
  $scope.title = "Awesome Home";
  $scope.message = "Mouse Over these images to see a directive at work!";

  $scope.logout = function() {
    AuthenticationService.logout();
  };
});

app.value("LoginContext", "");

app.directive("showsMessageWhenHovered", function() {
  return {
    restrict: "A", // A = Attribute, C = CSS Class, E = HTML Element, M = HTML Comment
    link: function(scope, element, attributes) {
      var originalMessage = scope.message;
      element.bind("mouseenter", function() {
        scope.message = attributes.message;
        scope.$apply();
      });
      element.bind("mouseleave", function() {
        scope.message = originalMessage;
        scope.$apply();
      });
    }
  };
});