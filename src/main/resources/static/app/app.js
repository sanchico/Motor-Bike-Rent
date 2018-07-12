/* Metronic App */
var app = angular.module("ProjectApp", ['ui.router','ngStorage']); //introduce los modulos ui-ruoter y ngStorage en la app

app.constant('urls', {
    BASE: 'http://localhost:8080',
    USER_SERVICE_API : 'http://localhost:8080/api/admin/user/',
    MOTORBIKE_SERVICE_API : 'http://localhost:8080/api/admin/motorbike/'
});

/* Configure locationProvider */
app.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
});

/* Setup App Main Controller */
app.controller('ProjectApp', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        $scope.$on('$viewContentLoaded', function() {
            // App.initComponents(); // init core components
            // Layout.init(); // Init entire layout(header, footer, sidebar,
            // etc) on page load if the partials included in server side
            // instead of loading with ng-include directive
        });
    }
]);

app.config(['$stateProvider', '$urlRouterProvider', //ui-router
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/'
            })
            .state('users-list', {
                url: '/users-list.html',
                templateUrl: 'partials/modules/users/list',
                controller: 'UserController',
                controllerAs:'ctrl',
                resolve: {
                    users: function ($q, UserService) {
                        console.log('Load all users');
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            })
          
        .state('motorbikes-list', {
                url: '/motorbikes-list.html',
                templateUrl: 'partials/modules/motorbikes/list',
                controller: 'MotorbikeController',
                controllerAs:'ctrl',
                resolve: {
                    users: function ($q, UserService) {
                        console.log('Load all motorbikes');
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            })
        .state('bookings-list', {
                url: '/rentals-list.html',
                templateUrl: 'partials/modules/booking/list',
                controller: 'BookingController',
                controllerAs:'ctrl',
                resolve: {
                    users: function ($q, UserService) {
                        console.log('Load all rentals');
                        var deferred = $q.defer();
                        UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                        return deferred.promise;
                    }
                }
            })
            .state('users-edit', {
                url: '/users-edit.html?id',
                templateUrl: 'partials/modules/users/edit',
                controller: 'UserController',
                controllerAs:'ctrl',
                resolve: {
                    user: function ($q, UserService) {
                    }
                }
            })
            .state('logout', {
                url: '/logout',
                controller: function($scope) {
                    window.location.reload();
                }
            });
        $urlRouterProvider.otherwise('/');
}]);

