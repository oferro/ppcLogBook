/**
 * @author OferR
 */

console.log("JS file in on");

var app = angular.module("logBookApp", []);

app.controller("flights", function($scope, $http) {
	var res, req;
	req = 'select * from users';
	$http.get(req,res).success(function(data) {
		$scope.users = data;
	});
});

/*
app.directive("movie", function() {
	return {
		restrict : "AE",
		templateUrl : "movie-template.html"
	};
});
*/
