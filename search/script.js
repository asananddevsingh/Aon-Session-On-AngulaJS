(function (angular) {
    angular.module('searchApp', [])
        .controller('searchCtrl', ['$scope', 'claimsDataService', function ($scope, claimsDataService) {
            $scope.claimsData = claimsDataService;
        }])
        .factory('claimsDataService', [function () {
            return window.claimsData
    }])
})(window.angular)
