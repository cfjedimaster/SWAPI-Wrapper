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
        console.log(err);
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

      let queryObject = undefined;
      let cb = undefined;

      if (arguments.length > 1) {
        queryObject = arguments[0];
        cb = arguments[1];
      } else if (arguments[0]) {
        // If given exactly one argument
        if (typeof arguments[0] === "function") {
          cb = arguments[0];
          queryObject = null;
        } else {
          cb = null;
          queryObject = arguments[0];
        }
      }

      if (queryObject) {
        let searchParams = new URLSearchParams();
        for (let key of Object.keys(queryObject)) {
          let value = queryObject[key];
          searchParams.append(key, value);
        }
        return request(rootURL + path + "/?" + searchParams.toString(), cb);
      }

      return request(rootURL + path + "/", cb);

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
