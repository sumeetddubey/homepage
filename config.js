/**
 * Created by sumeetdubey on 2/19/16.
 */
(function(){
    var app = angular.module("HomePage");
    app.config(function($routeProvider){
      $routeProvider
          .when("/",{
              templateUrl: "views/home.view.html"
          })
    })
})();