/**
 * Created by guillermo on 11/12/2014.
 */
(function() {
    'use strict';
    /**
     * Configuration module, holds constants, values
     */
    angular.module('app.config', [])
        .constant('USER_ROLES', {
            guest: 'guest',
            user: 'user',
            admin: 'admin'
        })
        .constant('EVENTS', {
            loginRequired: 'event:auth-loginRequired',
            loggedIn: 'event:auth-loggedIn',
            loggedOut: 'event:auth-loggedOut'
        })
        .constant('TOKENS', {
            userData: 'userData',
            bearerToken: 'bearerToken',
            refreshToken: 'refreshToken'
        })
        .constant('BASE_API_PATH', '/api/v1/')

        .constant('API_CONFIG',
        {
            tokenEndpoint: '/oauth/token/',
            client_id: 'mobileV1',
            client_secret: 'abc123456'
        });

    /**
     * Main app module
     */
    angular.module('app', ['ngRoute', 'ngAnimate', 'ngResource', 'app.config', 'app.Users']);
})();