Star Wars API Wrapper
===

A simple wrapper to the [Star Wars API](http://swapi.co/). Include the library and then make calls to the various API end points. Current methods are:

* getResources - Returns a list of all available resources. Not really useful for this library.
* getPerson(id) - Returns one person.
* getPeople([page]) - Returns everyone, paged. Defaults to page 1.
* getFilm(id) - Returns one film.
* getFilms([page]) - Returns all films, paged. Defaults to page 1.
* getPlanet(id) - Returns a planet.
* getPlanets([page]) - Returns all plaents, paged. Defaults to page 1.
* getSpecies(id) - Returns one species.
* getAllSpecies([page]) - Returns all species, paged. Defaults to page 1.
* getStarship(id) - Returns a starship.
* getStarships([page]) - Returns all starships, paged. Defaults to page 1.
* getVehicle(id) - Returns a vehicle.
* getVehicles([page]) - Returns all vehicles, paged. Defaults to page 1.

Every method above takes a callback argument. Examples:

	//get all vehicles
	swapiModule.getVehicles(function(data) {
		console.log("Result of getVehicles", data);
	});
	//get all vehicles, page 2
	swapiModule.getVehicles(2, function(data) {
		console.log("Result of getVehicles (page 2)", data);
	});

	//get one vehicle (assumes 4 works)
	swapiModule.getVehicle(4,function(data) {
		console.log("Result of getVehicle/4", data);
	});

To be done: I know I can optimize the code a bit. I'll do that. I also want to add a caching layer. Finally, it needs some proper unit tests.

History
===

* Added unit tests and a grunt task. Also a minified version.
* Replaced `XMLHttpRequest()` with `fetch()`
* Updated the base URL to use `https`
