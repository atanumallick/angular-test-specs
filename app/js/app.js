/**
*  Module
*
* Description
*/
angular.module('angularUnitTest', []).

controller('mainCtrl', ['$scope', function ($scope) {
	$scope.initialize = function () {
		$scope.pageHeader = {
			title : "Main Page"
		};
	}

	$scope.initialize();
}]).

filter('reverse', [function(){
	return function(str){
		return str.split('').reverse().join('');
	}
}]).

filter('sort', [function(){
	return function(str){
		return str.split('').sort().join('');
	}
}]);