import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import uiBootstrap from 'angular-bootstrap-npm';
import { HomeController, AboutController, skillsCtrl, contactCtrl } from './controllers/controllers';



angular.module('starterkit', [uirouter, ngResource, uiBootstrap, 'ngAnimate']).config(routing);


routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function routing($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/ngApp/views/home.html',
      controller: HomeController,
      controllerAs: 'controller'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/ngApp/views/about.html',
      controller: AboutController,
      controllerAs: 'controller'
    })
    .state('notFound', {
      url: '/notFound',
      templateUrl: '/ngApp/views/notFound.html'
    })
    .state('skills', {
      url: '/skills',
      templateUrl: '/ngApp/views/skills.html',
      controller: skillsCtrl,
      controllerAs: 'controller'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/ngApp/views/contact.html',
      controller: contactCtrl,
      controllerAs: 'controller'

    });
  $urlRouterProvider.otherwise('/notFound');
  $locationProvider.html5Mode(true);
  

  

}
