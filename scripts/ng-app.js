angular.module('ng-app', [])
    .controller('ng-controller', ['$scope', function($scope) {
    	$scope.genderMale = "true";
    	$scope.needWords = "true";
    	$scope.submit = function(){
    		$scope.needWords = "false";
    	};
    	$scope.startOver = function(){
    		$scope.needWords = "true";
    	};
    }]);

