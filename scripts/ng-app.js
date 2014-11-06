angular.module('ng-app', [])
	.controller('ng-controller', ['$scope', function($scope) {
    	$scope.genderMale = "true";
    	$scope.needWords = "true";	
    	$scope.requiredFields = "false";
    	$scope.submit = function(){
    		if ($scope.myForm.name.$error.required ||
    		$scope.myForm.dirtyTask.$error.required ||
    		$scope.myForm.obnoxiousCelebrity.$error.required ||
    		$scope.myForm.jobTitle.$error.required ||
    		$scope.myForm.celebrity.$error.required ||
    		$scope.myForm.hugeNumber.$error.required ||
    		$scope.myForm.hugeNumber.$error.pattern ||
    		$scope.myForm.tediousTask.$error.required ||
    		$scope.myForm.uselessSkill.$error.required ||
    		$scope.myForm.adjective.$error.required) {
    			$scope.requiredFields = "true";
    		} else {
    			$scope.requiredFields = "false";
    			$scope.needWords = "false";
    		};
    	};
    	$scope.startOver = function(){
    		$scope.name = "";
    		$scope.dirtyTask = "";
    		$scope.obnoxiousCelebrity = "";
    		$scope.jobTitle = "";
    		$scope.celebrity = "";
    		$scope.hugeNumber = "";
    		$scope.tediousTask = "";
    		$scope.uselessSkill = "";
    		$scope.adjective = "";
    		$scope.genderMale = "true";
    		$scope.needWords = "true";
    		$scope.requiredFields = "false";
    	};
    }]);

