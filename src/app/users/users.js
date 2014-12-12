/**
 * Created by guillermo on 11/12/2014.
 */
(function () {
    'use strict';
    angular.module("app.Users", ['services.Users']);
    angular.module("app.Users")
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider
                    // route for the home page
                    .when('/users', {
                        templateUrl: '/app/users/users-list.tpl.html',
                        controller: 'usersController'
                    });
            }
        ])
        .controller('usersController', ['$scope', 'usersService',
            function ($scope, usersService) {
                $scope.users = usersService.getUsers();
            }
        ]);
})();