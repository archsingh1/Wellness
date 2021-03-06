var providerp01App = angular.module('providerp01App', []);

providerp01App.factory('providerFactory', function($http){
	var providerFactory={} ;
	
	providerFactory.getData = function(){
		return $http.get('dataFiles/provider_p01.js');
	}
	
	return providerFactory;
});

providerp01App.controller('providerp01Controller', function($scope, providerFactory){
	$scope.provider; 
	providerFactory.getData().success(function(data){
		$scope.provider = data ; 
		
		
		
	}) ;//End providerFactory.getData()
});//End providerp01Controller

providerp01App.directive('providerpageDir', function(){
	return{
		restrict:'A',
		scope:true,
		controller:function($scope){
				$scope.expProv = true;
				$scope.credProv = true;
				$scope.detailsProv = true;
				
				$scope.showCred = function(event){
					event.preventDefault();
					$scope.credProv= true;
					$scope.expProv = true;
					$scope.detailsProv = true;
				}	//End showImg
				
				$scope.showExp=function(event){
					event.preventDefault();
					$scope.credProv= false;
					$scope.expProv = false;
					$scope.detailsProv = true;
				}
				
				$scope.showDetails=function(event){
					event.preventDefault();
					$scope.credProv= false;
					$scope.expProv = true;
					$scope.detailsProv = false;
				}
		}//End Controller function
	}//end return
	
}); //End providerpageDir directive

















