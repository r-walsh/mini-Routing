var app = angular.module('miniRouting');

app.controller('productsCtrl', function($routeParams, $scope, productService) {
	if ($routeParams.id === 'shoes') {
		$scope.productData = productService.shoeData;
	} else if ($routeParams.id === 'socks') {
		$scope.productData = productService.sockData;
	}
});