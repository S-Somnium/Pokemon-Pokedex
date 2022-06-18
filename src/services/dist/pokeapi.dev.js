"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColor = exports.getPokemon = exports.getPageOfPokemons = void 0;

var getPageOfPokemons = function getPageOfPokemons(page) {
  var numberOfPokemons;
  return regeneratorRuntime.async(function getPageOfPokemons$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          numberOfPokemons = 20;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('https://pokeapi.co/api/v2/pokemon?limit=' + numberOfPokemons + '&offset=' + page * numberOfPokemons).then(function (response) {
            return response.json();
          }));

        case 3:
          return _context.abrupt("return", _context.sent);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getPageOfPokemons = getPageOfPokemons;

var getPokemon = function getPokemon(pokemon) {
  return regeneratorRuntime.async(function getPokemon$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon).then(function (response) {
            return response.json();
          }));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getPokemon = getPokemon;

var getColor = function getColor(type) {
  switch (type) {
    case "normal":
      return "#a8a878";

    case "fire":
      return "#f08030";

    case "water":
      return "#6890f0";

    case "grass":
      return "#78c850";

    case "electric":
      return "#f8d030";

    case "ice":
      return "#98d8d8";

    case "fighting":
      return "#c03028";

    case "poison":
      return "#a040a0";

    case "ground":
      return "#e0c068";

    case "flying":
      return "#a890f0";

    case "psychic":
      return "#f85888";

    case "bug":
      return "#a8b820";

    case "rock":
      return "#b8a038";

    case "ghost":
      return "#705898";

    case "dark":
      return "#705848";

    case "dragon":
      return "#7038f8";

    case "steel":
      return "#b8b8d0";

    case "fairy":
      return "#f0b6bc";
  }
};

exports.getColor = getColor;