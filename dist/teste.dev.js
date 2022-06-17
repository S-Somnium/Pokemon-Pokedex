"use strict";

var getPageOfPokemons = function getPageOfPokemons(page) {
  var pokemons;
  return regeneratorRuntime.async(function getPageOfPokemons$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!isNaN(page)) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=' + page).then(function (response) {
            return response.json();
          }));

        case 4:
          pokemons = _context.sent;

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};