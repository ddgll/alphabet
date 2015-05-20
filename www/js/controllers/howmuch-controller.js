
angular.module('alphabet.controllers')

.controller('HowmuchCtrl', function($scope, $timeout, $state, Animals, Digits) {
	$scope.date = new Date();
	$scope.animals = Animals.all();
	$scope.searchedAnimal = '';
	$scope.rounds = [];
	$scope.pieces = [];
	$scope.images = [];
	$scope.already = {};
	$scope.alreadyCells = {};
	$scope.score = 0;
	$scope.nb = 0;
	$scope.begin = true;
	$scope.end = false;
	$scope.win = false;
	$scope.current = null;
	$scope.letters = Digits.all();
	
	$timeout(function(){
		$scope.begin = false;
	}, 1000);

	$scope.max = 0;
	$scope.randomAnimal = function(){
		var index = Math.floor((Math.random() * $scope.animals.length));
		$scope.searchedAnimal = $scope.animals[index];
		if($scope.searchedAnimal == '' || angular.isDefined($scope.already[$scope.searchedAnimal])){
			console.log('error' + JSON.stringify($scope.searchedAnimal));
		}
		if($scope.already[$scope.searchedAnimal] > 3){
			$scope.max++;
			if($scope.max < 6){
				$scope.randomAnimal();
			}
		}else{
			if(angular.isDefined($scope.already[$scope.searchedAnimal])){
				$scope.already[$scope.searchedAnimal]++;
			}else{
				$scope.max = 0;
				$scope.already[$scope.searchedAnimal] = 1;
			}
		}
	};
	
	$scope.randomCell = function(){
		var index = Math.floor((Math.random() * 9));
		if($scope.alreadyCells[index] === 1){
			$scope.max++;
			console.log('CELL DEJA : ' + index);
			return $scope.randomCell();
		}else{
			console.log(index + ' tire !');
			$scope.alreadyCells[index] = 1;
			return index;
		}
	};
	
	$scope.randomImages = function(){
		$scope.images = [];
		var top = null;
		var left = null;
		var key = null;
		var imagesAlready = {};
		for(var i = 0; i < $scope.nb; i++){
			switch($scope.randomCell()){
			 case 0: top = 0; left = 0; break;
			 case 1: top = 20; left = 0; break;
			 case 2: top = 40; left = 0; break;
			 case 3: top = 0; left = 10; break;
			 case 4: top = 20; left = 10; break;
			 case 5: top = 40; left = 10; break;
			 case 6: top = 0; left = 20; break;
			 case 7: top = 20; left = 20; break;
			 case 8: top = 40; left = 20; break;
			}
			$scope.images.push('width: 8%; position: absolute; top: ' + top + '%; left: ' + left + '%;');
		}
	}
	
	$scope.newRound = function(){
		$scope.nb = Math.floor((Math.random() * 9) + 1);
		$scope.randomImages();
		$scope.alreadyCells = {};
		//$scope.already = {};
		$scope.current = $scope.rounds.length;
		$scope.randomAnimal();
		$scope.rounds.push({
				'nb': $scope.nb,
				'animal': $scope.searchedAnimal,
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
				if(letter['minuscule'] == $scope.rounds[$scope.current].nb){
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
