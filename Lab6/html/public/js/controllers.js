angular.module('mainCtrl', []).controller('mainController', function($scope) 
{
	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

angular.module('loginCtrl', []).controller('loginController', function($scope) 
{
	$scope.message = 'Need to let these hoes login over here';
});