angular.module("plugin", [])
.directive("pluginNotification", function(){
    return{
        ristrict: "AE",
        controller: ["$scope", function($scope){
            $scope.notification = "Welcome to the notification page";
        }],
        templateUrl: "/plugin/plugin-template.html",
        /*template: "<h2>{{notification}}</h2>",*/
        /*link: function(scope, ele, attr){
            scope.notification = "Welcome to notification page";
        }*/
    }
})
