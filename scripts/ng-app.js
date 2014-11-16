angular.module('madLibsApp', ['ngAnimate'])
	.controller('MainCtrl', ['$scope', function($scope) {
    	$scope.genderMale = true;
    	$scope.needWords = true;	
    	$scope.requiredFields = false;
    	$scope.submit = function(){

            var words = ['name',
            'dirtyTask', 
            'obnoxiousCelebrity', 
            'jobTitle', 
            'celebrity', 
            'hugeNumber', 
            'hugeNumber',
            'tediousTask', 
            'uselessSkill', 
            'adjective']

            $scope.requiredFields = false;
            for (var i=0; i<words.length; i++) {
                if ($scope.myForm[words[i]].$error.required || $scope.myForm[words[i]].$error.pattern) {
                    $scope.requiredFields = true;
                }
            }
            $scope.needWords = $scope.requiredFields;
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
    		$scope.genderMale = true;
    		$scope.needWords = true;
    		$scope.requiredFields = false;
    	};
    }]);

