'use strict';

/**
 * @ngdoc service
 * @name cineAngularApp.serviceajax
 * @description
 * # serviceajax
 * Factory in the cineAngularApp.
 */
 angular.module('cineAngularApp')
 .factory('serviceajax', function ($http) {


    // Public API here
    
    return {
      popular: function (page) {
        return $http.get("/popular?page=" + page);
      },
      search: function(query, page){
        return $http.get("/search?q=" + query + "&page=" + page);
      },
      info: function(id){
        return $http.get("/info/" + id);
      },
      getTorrent:function(title)
      {
        return $http.get("/torrent?title=" + title);
      }
    };
  });
