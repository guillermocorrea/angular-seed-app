/**
 * Created by guillermo on 11/12/2014.
 */
(function () {
    'use strict';
    angular.module("services.Users", []);
    angular.module("services.Users").factory('usersService',
        function () {
            return {
                getUsers: function () {
                    return [
                        {id: 1, nameFirst: 'John',nameLast: 'Doe'},
                        {id: 2, nameFirst: 'Mike',nameLast: 'Doe'},
                        {id: 3, nameFirst: 'Andrew',nameLast: 'Doe'},
                        {id: 4, nameFirst: 'Natalia',nameLast: 'Doe'}
                    ];
                }
            };
        }
    );
})();