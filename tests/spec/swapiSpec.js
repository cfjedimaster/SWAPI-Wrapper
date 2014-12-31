describe("SWAPI", function() {

	it("should be able to get Resources", function(done) {
		swapiModule.getResources(function(data) {
			expect(data.films).toBeDefined();
			expect(data.people).toBeDefined();
			expect(data.planets).toBeDefined();
			expect(data.species).toBeDefined();
			expect(data.starships).toBeDefined();
			expect(data.vehicles).toBeDefined();
			done();
		});
	});

	it("should be able to get a Person", function(done) {
		swapiModule.getPerson(2,function(person) { 
			var keys = ["birth_year", "created", "edited", "eye_color", "films", 
			"gender", "hair_color", "height", "homeworld", "mass", "name", 
			"skin_color", "species", "starships", "url", "vehicles"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(person[keys[i]]).toBeDefined();
			}

			done();
		});

	});

	it("should be able to get People", function(done) {
		
		swapiModule.getPeople(function(people) {
			var keys = ["count", "next", "previous", "results"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(people[keys[i]]).toBeDefined();
			}

			done();
		});

	});

	it("should be able to get the second page of People", function(done) {
		
		swapiModule.getPeople(2, function(people) {
			var keys = ["count", "next", "previous", "results"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(people[keys[i]]).toBeDefined();
			}
			expect(people.previous).toMatch("page=1");
			done();
		});

	});

	it("should be able to get a Film", function(done) {

		swapiModule.getFilm(1,function(film) {
			var keys = ["title", "episode_id", "opening_crawl", "director",
			"producer", "characters", "planets", "starships", "vehicles", 
			"species", "created", "edited", "url"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(film[keys[i]]).toBeDefined();
			}

			done();
		});

	});

	it("should be able to get Films", function(done) {
		
		swapiModule.getFilms(function(films) {
			var keys = ["count", "next", "previous", "results"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(films[keys[i]]).toBeDefined();
			}

			done();
		});

	});

	//There is only one page of films currently.
	it("should be able to get a page of Films", function(done) {
		
		swapiModule.getFilms(1, function(films) {
			var keys = ["count", "next", "previous", "results"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(films[keys[i]]).toBeDefined();
			}
			done();
		});

	});

	it("should be able to get a Starship", function(done) {

		swapiModule.getStarship(2,function(ship) {
			var keys = ["MGLT", "created", "edited", "cargo_capacity", "cost_in_credits", 
			"crew", "films", "hyperdrive_rating", "length", "manufacturer", 
			"max_atmosphering_speed", "model", "name", "passengers", "pilots",
			"starship_class", "url"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(ship[keys[i]]).toBeDefined();
			}

			done();
		});

	});

	it("should be able to get Starships", function(done) {
		
		swapiModule.getStarships(function(starships) {
			var keys = ["count", "next", "previous", "results"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(starships[keys[i]]).toBeDefined();
			}

			done();
		});

	});

	it("should be able to get the second page of Starships", function(done) {
		
		swapiModule.getStarships(2, function(starships) {
			var keys = ["count", "next", "previous", "results"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(starships[keys[i]]).toBeDefined();
			}
			expect(starships.previous).toMatch("page=1");
			done();
		});

	});

	it("should be able to get a Vehicle", function(done) {

		swapiModule.getVehicle(4,function(vehicle) {
			var keys = ["consumables", "created", "edited", "cargo_capacity", "cost_in_credits", 
			"crew", "films", "length", "manufacturer", 
			"max_atmosphering_speed", "model", "name", "passengers", "pilots",
			"vehicle_class", "url"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(vehicle[keys[i]]).toBeDefined();
			}

			done();
		});

	});

	it("should be able to get Vehicles", function(done) {
		
		swapiModule.getVehicles(function(vehicles) {
			var keys = ["count", "next", "previous", "results"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(vehicles[keys[i]]).toBeDefined();
			}

			done();
		});

	});

	it("should be able to get the second page of Vehicles", function(done) {
		
		swapiModule.getVehicles(2, function(vehicles) {
			var keys = ["count", "next", "previous", "results"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(vehicles[keys[i]]).toBeDefined();
			}
			expect(vehicles.previous).toMatch("page=1");
			done();
		});

	});

	it("should be able to get a Species", function(done) {

		swapiModule.getSpecies(1,function(species) {
			var keys = ["created", "edited", "url", "average_height", "average_lifespan",
			"classification", "designation", "eye_colors", "films", "hair_colors", "homeworld",
			"language", "name", "people", "skin_colors"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(species[keys[i]]).toBeDefined();
			}

			done();
		});

	});

	it("should be able to get all Species", function(done) {
		
		swapiModule.getAllSpecies(function(species) {
			var keys = ["count", "next", "previous", "results"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(species[keys[i]]).toBeDefined();
			}

			done();
		});

	});

	it("should be able to get the second page of Species", function(done) {
		
		swapiModule.getAllSpecies(2, function(species) {
			var keys = ["count", "next", "previous", "results"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(species[keys[i]]).toBeDefined();
			}
			expect(species.previous).toMatch("page=1");
			done();
		});

	});

	it("should be able to get a Planet", function(done) {

		swapiModule.getPlanet(4,function(planet) {
			var keys = ["created", "edited", "url", "climate", "diameter", "films", 
			"gravity", "name", "orbital_period", "population", "residents", "rotation_period", 
			"surface_water", "terrain"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(planet[keys[i]]).toBeDefined();
			}

			done();
		});

	});

	it("should be able to get Planets", function(done) {
		
		swapiModule.getPlanets(function(planets) {
			var keys = ["count", "next", "previous", "results"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(planets[keys[i]]).toBeDefined();
			}

			done();
		});

	});

	it("should be able to get the second page of Planets", function(done) {
		
		swapiModule.getPlanets(2, function(planets) {
			var keys = ["count", "next", "previous", "results"];
			for(var i=0, len=keys.length; i<len; i++) {
				expect(planets[keys[i]]).toBeDefined();
			}
			expect(planets.previous).toMatch("page=1");
			done();
		});

	});

});
