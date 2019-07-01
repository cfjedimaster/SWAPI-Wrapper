Star Wars API Wrapper
===

A simple wrapper to the [Star Wars API](http://swapi.co/). Include the library and then make calls to the various API end points. Current methods are:

* getResources - Returns a list of all available resources. Not really useful for this library.
* getPerson(id) - Returns one person.
* getPeople([{[page: _page number_], [search: _search string_]}]) - Returns everyone, paged. Defaults to page 1.
* getFilm(id) - Returns one film.
* getFilms([{[page: _page number_], [search: _search string_]}]) - Returns all films, paged. Defaults to page 1.
* getPlanet(id) - Returns a planet.
* getPlanets([{[page: _page number_], [search: _search string_]}]) - Returns all planets, paged. Defaults to page 1.
* getSpecies(id) - Returns one species.
* getAllSpecies([{[page: _page number_], [search: _search string_]}]) - Returns all species, paged. Defaults to page 1.
* getStarship(id) - Returns a starship.
* getStarships([{[page: _page number_], [search: _search string_]}]) - Returns all starships, paged. Defaults to page 1.
* getVehicle(id) - Returns a vehicle.
* getVehicles([{[page: _page number_], [search: _search string_]}]) - Returns all vehicles, paged. Defaults to page 1.

Every method that returns multiple results, e.g., getPeople(), take an optional object as their first argument with two optional properties:

* page: an integer,
* search: a search string

Every method above takes a callback argument as their final argument. Examples:

	// get all vehicles
	swapiModule.getVehicles(function(data) {
		console.log("Result of getVehicles", data);
	});
	
	// get all vehicles, page 2
	swapiModule.getVehicles({page: 2}, function(data) {
		console.log("Result of getVehicles (page 2)", data);
	});

	// get one vehicle (assumes 4 works)
	swapiModule.getVehicle(4,function(data) {
		console.log("Result of getVehicle/4", data);
	});
	
	// get all results for people with search string "r2"
	swapiModule.getPeople({search: "r2"}, function(data) {
	    console.log("All results that match "r2", data);
	});

To be done: I know I can optimize the code a bit. I'll do that. I also want to add a caching layer. Finally, it needs some proper unit tests.

*** Unit tests not updated for re-structured code ***

History
===

* Added unit tests and a grunt task. Also a minified version.
* Replaced `XMLHttpRequest()` with `fetch()`
* Updated the base URL to use `https`
* Added promise support
* Update Jasmine test
