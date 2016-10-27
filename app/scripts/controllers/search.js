'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp')
  .controller('SearchCtrl', function ($scope, $routeParams, serviceajax) {
        $scope.query = $routeParams.query;
        $scope.currentPage = 1;
        $scope.totalPages = 0;

        var loadMovies = function(){
            serviceajax.search($scope.query, $scope.currentPage).success(function(data){
                $scope.movies = data.results;
                $scope.totalPages = data.total_pages;
            });
        };

        $scope.pageChanged = function(){
            loadMovies();
        };
        
        loadMovies();
    });