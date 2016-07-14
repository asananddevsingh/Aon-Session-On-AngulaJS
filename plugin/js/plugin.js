angular.module("plugin", [])
.directive("pluginNotification", function(){
    return{
        ristrict: "AE",
        scope:false,
        controller: function($scope){
            $scope.notification = "Welcome to notification page";
        },
        template: "<h2>{{notification}}</h2>",
        /*link: function(scope, ele, attr){
            scope.notification = "Welcome to notification page";
        }*/
    }
})
