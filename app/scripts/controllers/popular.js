'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the cineAngularApp
 */
 angular.module('cineAngularApp')
 .controller('PopularCtrl', function ($scope,serviceajax) {

 	$scope.currentPage = 1;
 	$scope.totalPages = 0;

 	var loadMovies = function(){
 		$scope.loading = true;
 		serviceajax.popular($scope.currentPage).success(function(data){
 			$scope.movies = data.results;
 			$scope.totalPages = data.total_pages;
 			$scope.loading = false;
 		});
 	};

 	$scope.pageChanged = function(){
 		loadMovies();
 	};
 	loadMovies();
 });


 