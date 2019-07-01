var swapiModule = (function() {
  var rootURL = "https://swapi.co/api/";

  function request(url, cb) {
    return fetch(url)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        if (typeof cb === "function") {
          cb(data);
        }

        return data;
      })
      .catch(function(err) {
        ce.log(err);
      });
  }

  function getResources(cb) {
    return request(rootURL, cb);
  }

  function singularRequestGenerator(path) {
    return function(id, cb) {
      return request(rootURL + path + "/" + id + "/", cb);
    };
  }

  function pluralRequestGenerator(path) {
    return function() {
      var page = arguments[0];
      var cb = arguments[1];

      if (page > 0) {
        return request(rootURL + path + "/?page=" + page, cb);
      } else {
        return request(rootURL + path + "/", cb);
      }
    };
  }

  return {
    getResources: getResources,
    getPerson: singularRequestGenerator("people"),
    getPeople: pluralRequestGenerator("people"),
    getFilm: singularRequestGenerator("films"),
    getFilms: pluralRequestGenerator("films"),
    getPlanet: singularRequestGenerator("planets"),
    getPlanets: pluralRequestGenerator("planets"),
    getSpecies: singularRequestGenerator("species"),
    getAllSpecies: pluralRequestGenerator("species"),
    getStarship: singularRequestGenerator("starships"),
    getStarships: pluralRequestGenerator("starships"),
    getVehicle: singularRequestGenerator("vehicles"),
    getVehicles: pluralRequestGenerator("vehicles")
  };
})();
