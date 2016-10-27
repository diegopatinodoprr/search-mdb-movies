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
        return $http.get("http://localhost:3000/popular?page=" + page);
      },
      search: function(query, page){
        return $http.get("http://localhost:3000/search?q=" + query + "&page=" + page);
      },
      info: function(id){
        return $http.get("http://localhost:3000/info/" + id);
      },
      getTorrent:function(title)
      {
        return $http.get("http://localhost:3000/torrent?title=" + title); 
      }
    };
  });
