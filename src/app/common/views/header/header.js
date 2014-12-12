/**
 * Created by guillermo on 11/12/2014.
 */
(function() {
    'use strict';
    angular.module('app').controller('headerController', ['$scope',
        function($scope) {
            $scope.title = "Header Title";

            $scope.navList = [{path: '/users', title: 'Users'}];
        }]);
})();