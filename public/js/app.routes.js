/**
 * Created by SHERRI on 3/14/15.
 */
// inject ngRoute for all our routing needs
var app = angular.module("routerApp", ["ngRoute"]);
app.config(function($routeProvider) {
// route for the home page
    $routeProvider.when('/', {
        templateUrl: 'public/views/pages/home.html',
        controller: 'homeController',
        controllerAs: 'home'
    })
// route for the about page
        .when('/about', {
            templateUrl: 'public/views/pages/about.html',
            controller: 'aboutController',
            controllerAs: 'about'
        })
// route for the contact page
        .when('/contact', {
            templateUrl: 'public/views/pages/contact.html',
            controller: 'contactController',
            controllerAs: 'contact'
        })
     .otherwise({
    redirectTo: "/"
  });
});
// set our app up to have pretty URLS
//$locationProvider.html5Mode(true);


