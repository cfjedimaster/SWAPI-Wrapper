var swapiModule = function () {
	var rootURL = "http://swapi.co/api/";
     
	function request(url, cb) {
		
		function listener() {
			if(oReq.readyState != 4) return;
			if(oReq.status != 200) {
				//this will be the error handler	
			} else {
				cb(JSON.parse(oReq.responseText));
			}
		
		}
		
		var oReq = new XMLHttpRequest();
		oReq.open("get",url,true);
		oReq.onload = listener;
		oReq.send();
		
	}

	function getResources(cb) {
		request(rootURL, cb);
	}

	//generic for ALL calls, todo, why optimize now!
	function getResource(u, cb) {
		
	}
	
	function getFilm(id, cb) {
		request(rootURL + 'films/'+id, cb);
	}
	
	function getFilms() {
		//Support no page
		if(arguments.length === 1) {
			request(rootURL + 'films/', arguments[0]);
		} else {
			request(rootURL + 'films/?page='+arguments[0], arguments[1]);			
		}
	}

	function getPerson(id, cb) {
		request(rootURL + 'people/'+id, cb);
	}
	
	function getPeople() {
		//Support no page
		if(arguments.length === 1) {
			request(rootURL + 'people/', arguments[0]);
		} else {
			request(rootURL + 'people/?page='+arguments[0], arguments[1]);			
		}
	}

	function getPlanet(id, cb) {
		request(rootURL + 'planets/'+id, cb);
	}
	
	function getPlanets() {
		//Support no page
		if(arguments.length === 1) {
			request(rootURL + 'planets/', arguments[0]);
		} else {
			request(rootURL + 'planets/?page='+arguments[0], arguments[1]);			
		}
	}
	
	function getSpecies(id, cb) {
		request(rootURL + 'species/'+id, cb);
	}
	
	function getAllSpecies() {
		//Support no page
		if(arguments.length === 1) {
			request(rootURL + 'species/', arguments[0]);
		} else {
			request(rootURL + 'species/?page='+arguments[0], arguments[1]);			
		}
	}
	
	function getStarship(id, cb) {
		request(rootURL + 'starships/'+id, cb);
	}
	
	function getStarships() {
		//Support no page
		if(arguments.length === 1) {
			request(rootURL + 'starships/', arguments[0]);
		} else {
			request(rootURL + 'starships/?page='+arguments[0], arguments[1]);			
		}
	}

	function getVehicle(id, cb) {
		request(rootURL + 'vehicles/'+id, cb);
	}
	
	function getVehicles() {
		//Support no page
		if(arguments.length === 1) {
			request(rootURL + 'vehicles/', arguments[0]);
		} else {
			request(rootURL + 'vehicles/?page='+arguments[0], arguments[1]);			
		}
	}

	return {
		getResources: getResources,
		getPerson:getPerson,
		getPeople:getPeople,
		getFilm:getFilm,
		getFilms:getFilms,
		getPlanet:getPlanet,
		getPlanets:getPlanets,
		getSpecies:getSpecies,
		getAllSpecies:getAllSpecies,
		getStarship:getStarship,
		getStarships:getStarships,
		getVehicle:getVehicle,
		getVehicles:getVehicles
	};
	
}();