'use strict';

/**
 * @ngdoc function
 * @name cineAngularApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the cineAngularApp
 */
angular.module('cineAngularApp')
  .controller('InfoCtrl', function ($scope, $routeParams, serviceajax) {
        var id = $routeParams.id;
        serviceajax.info(id).success(function(data){
            $scope.movie = data;
        })
        $scope.findTorrent=function()
        {
        	serviceajax.getTorrent(this.movie.original_title).success(function(_toorents)
        	{
        		$scope.torrents=_toorents;
        	})
        }
  });