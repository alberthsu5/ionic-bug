angular.module('starter', ['ionic', 'ngRoute', 'ngAnimate'])

.config(function ($compileProvider){
    // Needed for routing to work
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.config(function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {controller:'StartCtrl', templateUrl:'templates/start.html'}).
        otherwise({redirectTo:'/'});
    })

.controller('StartCtrl', function($scope) {
    $scope.headerTitle = 'Test';

    $scope.leftButtons = [
        {
            type: 'button-clear',
            content: '<i class="icon ion-ios7-search"></i>',
            tap: function(e) {
                alert('left button clicked');
            }
        }
    ];

    $scope.rightButtons = [
        {
            type: 'button-clear',
            content: 'Foo',
            tap: function(e) {
                alert('right button clicked');
            }
        }
    ];
});