var swapiModule = function () {
  var rootURL = 'http://swapi.co/api/';

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
    oReq.open('get', url, true);
    oReq.setRequestHeader('User-Agent', 'swapi-javascript');
    oReq.setRequestHeader('Accept', 'application/json');
    oReq.onload = listener;
    oReq.send();
  }

  function getResources(cb) {
    request(rootURL, cb);
  }

  //generic for ALL calls, todo, why optimize now!
  function getResource(u, cb) {

  }

  function singularRequestGenerator(path) {
    return function(id, cb) {
      request(rootURL + path + '/'+id, cb);
    };
  }

  function pluralRequestGenerator(path) {
    return function() {
      if(arguments.length === 1) {
        request(rootURL + path + '/', arguments[0]);
      } else {
        request(rootURL + path + '/?page=' + arguments[0], arguments[1]);
      }
    };
  }

  return {
    getResources:  getResources,
    getPerson:     singularRequestGenerator('people'),
    getPeople:     pluralRequestGenerator('people'),
    getFilm:       singularRequestGenerator('films'),
    getFilms:      pluralRequestGenerator('films'),
    getPlanet:     singularRequestGenerator('planets'),
    getPlanets:    pluralRequestGenerator('planets'),
    getSpecies:    singularRequestGenerator('species'),
    getAllSpecies: pluralRequestGenerator('species'),
    getStarship:   singularRequestGenerator('starships'),
    getStarships:  pluralRequestGenerator('starships'),
    getVehicle:    singularRequestGenerator('vehicles'),
    getVehicles:   pluralRequestGenerator('vehicles')
  };

}();
