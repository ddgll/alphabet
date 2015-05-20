angular.module('starter.services', [])

.factory('Digits', function() {
  // Might use a resource here that returns a JSON array
  var digits = [
                 [
                	{'minuscule': '1', 'majuscule': '1'},
                 	{'minuscule': '2', 'majuscule': '2'},
                 	{'minuscule': '3', 'majuscule': '3'},
                 	{'minuscule': '4', 'majuscule': '4'},
                 	{'minuscule': '5', 'majuscule': '5'},
                 	{'minuscule': '6', 'majuscule': '6'},
                 	{'minuscule': '7', 'majuscule': '7'},
                 	{'minuscule': '8', 'majuscule': '8'},
                 	{'minuscule': '9', 'majuscule': '9'},
                 	{'minuscule': '0', 'majuscule': '0'},
                ],
  ];

  return {
    all: function() {
      return digits;
    }
  };
})

.factory('Letters', function() {
	  // Might use a resource here that returns a JSON array
	  var letters = [
	                 [
	                	{'minuscule': 'a', 'majuscule': 'A'},
	                 	{'minuscule': 'z', 'majuscule': 'Z'},
	                 	{'minuscule': 'e', 'majuscule': 'E'},
	                 	{'minuscule': 'r', 'majuscule': 'R'},
	                 	{'minuscule': 't', 'majuscule': 'T'},
	                 	{'minuscule': 'y', 'majuscule': 'Y'},
	                 	{'minuscule': 'u', 'majuscule': 'U'},
	                 	{'minuscule': 'i', 'majuscule': 'I'},
	                 	{'minuscule': 'o', 'majuscule': 'O'},
	                 	{'minuscule': 'p', 'majuscule': 'P'},
	                ],
	                [
	            		{'minuscule': 'q', 'majuscule': 'Q'},
		             	{'minuscule': 's', 'majuscule': 'S'},
		             	{'minuscule': 'd', 'majuscule': 'D'},
		             	{'minuscule': 'f', 'majuscule': 'F'},
		             	{'minuscule': 'g', 'majuscule': 'G'},
		             	{'minuscule': 'h', 'majuscule': 'H'},
		             	{'minuscule': 'j', 'majuscule': 'J'},
		             	{'minuscule': 'k', 'majuscule': 'K'},
		             	{'minuscule': 'l', 'majuscule': 'L'},
		             	{'minuscule': 'm', 'majuscule': 'M'},
		            ],
		            [
		        		{'minuscule': 'w', 'majuscule': 'W'},
			         	{'minuscule': 'x', 'majuscule': 'X'},
			         	{'minuscule': 'c', 'majuscule': 'C'},
			         	{'minuscule': 'v', 'majuscule': 'V'},
			         	{'minuscule': 'b', 'majuscule': 'B'},
			         	{'minuscule': 'n', 'majuscule': 'N'},
			         	{'minuscule': '', 'majuscule': ''},
			         	{'minuscule': '', 'majuscule': ''},
			         	{'minuscule': '', 'majuscule': ''},
			         	{'minuscule': '', 'majuscule': ''},
			        ],
	  ];

	  return {
	    all: function() {
	      return letters;
	    }
	  };
})

.factory('Animals', function() {
  // Might use a resource here that returns a JSON array
  var animals = [
		  {"code": "chat", "title": "Combien vois-tu de chat ?"},
		  {"code": "cochon", "title": "Combien vois-tu de cochon ?"},
		  {"code": "elephant", "title": "Combien vois-tu d'éléphant ?"},
		  {"code": "pingouin", "title": "Combien vois-tu de pingouin ?"},
		  {"code": "tortue", "title": "Combien vois-tu de tortue ?"},
  ];

  return {
	all: function() {
	        return animals;
	}
  };
});
