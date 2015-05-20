
angular.module('alphabet.controllers')

.controller('RecognizeCtrl', function($scope, $timeout, $state, Letters) {
	$scope.date = new Date();
	$scope.letters = Letters.all();
	$scope.searchedLetter = '';
	$scope.rounds = [];
	$scope.pieces = [];
	$scope.already = {};
	$scope.score = 0;
	$scope.begin = true;
	$scope.end = false;
	$scope.win = false;
	$scope.current = null;
	$scope.type = 'majuscule';
	
	$timeout(function(){
		$scope.begin = false;
	}, 1000);
	
	$scope.randomLetter = function(){
		var line = Math.floor((Math.random() * $scope.letters.length));
		var letter = Math.floor((Math.random() * $scope.letters[line].length));
		$scope.searchedLetter = $scope.letters[line][letter][$scope.type];
		if($scope.searchedLetter == '' || angular.isDefined($scope.already[$scope.searchedLetter])){
			$scope.randomLetter();
		}else{
			$scope.already[$scope.searchedLetter] = true;
		}
	};
	
	$scope.newRound = function(){
		$scope.current = $scope.rounds.length;
		$scope.randomLetter();
		$scope.rounds.push({
				'type': $scope.type,
				'letter': $scope.searchedLetter,
				'attempts': 1,
				'begin': $scope.date.getTime(),
				'end': null
		});
	};
	
	$scope.letterTouched = function(letter){
		if($scope.current !== null && !$scope.loose && !$scope.win && !$scope.begin && !$scope.end){
			console.log('LETTER TOUCHED');
			console.log(letter[$scope.type]);
			console.log($scope.rounds[$scope.current]);
			if($scope.rounds[$scope.current].end == null){
				if(letter[$scope.rounds[$scope.current].type] == $scope.rounds[$scope.current].letter){
					$scope.rounds[$scope.current].end = $scope.date.getTime();
					$scope.score = parseInt($scope.score) + 1;
					if($scope.score < 10){
						$scope.pieces.push({
							'top': 32 - 2 * $scope.pieces.length,
							'margin': Math.floor((Math.random() * 20))
						});
						$scope.newRound();
						$scope.win = Math.floor((Math.random() * 3) + 1);
						$timeout(function(){
							$scope.win = false;
						}, 1000);
					}else{
						$scope.win = Math.floor((Math.random() * 3) + 1);
						$timeout(function(){
							$scope.win = false;
							$scope.end = true;
							$timeout(function(){
								$scope.end = false;
								$state.go('home');
							}, 5000);
						}, 1000);
					}
				}else{
					$scope.loose = true;
					$timeout(function(){
						$scope.loose = false;
					}, 1000);
				}
			}
		}
	}
	
	if($scope.current == null){
		$scope.newRound();
	}
});
