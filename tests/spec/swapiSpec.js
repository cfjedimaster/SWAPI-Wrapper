describe("SWAPI", function() {
  var originalTimeout;
  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 3 * 1000;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it("should be able to get Resources via callback", function(done) {
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

  it("should be able to get Resources via promise", function(done) {
    swapiModule.getResources().then(function(data) {
      expect(data.films).toBeDefined();
      expect(data.people).toBeDefined();
      expect(data.planets).toBeDefined();
      expect(data.species).toBeDefined();
      expect(data.starships).toBeDefined();
      expect(data.vehicles).toBeDefined();

      done();
    });
  });

  var personKeys = [
    "birth_year",
    "created",
    "edited",
    "eye_color",
    "films",
    "gender",
    "hair_color",
    "height",
    "homeworld",
    "mass",
    "name",
    "skin_color",
    "species",
    "starships",
    "url",
    "vehicles"
  ];

  it("should be able to get a Person via callback", function(done) {
    swapiModule.getPerson(2, function(person) {
      for (var i = 0, len = personKeys.length; i < len; i++) {
        expect(person[personKeys[i]]).toBeDefined();
      }

      done();
    });
  });

  it("should be able to get a Person via a promise", function(done) {
    swapiModule.getPerson(2).then(function(person) {
      for (var key of personKeys) {
        expect(person[key]).toBeDefined();
      }

      done();
    });
  });

  var peopleKeys = ["count", "next", "previous", "results"];

  it("should be able to get People via callback", function(done) {
    swapiModule.getPeople(function(people) {
      for (var i = 0, len = peopleKeys.length; i < len; i++) {
        expect(people[peopleKeys[i]]).toBeDefined();
      }

      done();
    });
  });

  it("should be able to get the second page of People via callback", function(done) {
    swapiModule.getPeople(2, function(people) {
      for (var i = 0, len = keys.length; i < len; i++) {
        expect(people[peopleKeys[i]]).toBeDefined();
      }

      expect(people.previous).toMatch("page=1");

      done();
    });
  });

  it("should be able to get People via promise", function(done) {
    swapiModule.getPeople().then(function(people) {
      for (var key of people) {
        expect(people[peopleKeys[i]]).toBeDefined();
      }

      done();
    });
  });

  it("should be able to get the second page of People via promise", function(done) {
    swapiModule.getPeople(2).then(function(people) {
      for (var key of people) {
        expect(people[peopleKeys[i]]).toBeDefined();
      }

      expect(people.previous).toMatch("page=1");

      done();
    });
  });
});
