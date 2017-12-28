'use strict';

const fsx = require('fs-extra');

const randomGenerator = module.exports = {};

// Set the absolute path to the assets/array.json in this project here:
let STORAGE_PATH = '/Users/moonmayor/Third/random-person-generator/';
STORAGE_PATH += 'assets/array.json';

// Names go in here:
const nameArray = [
  'Rob',
  'Shannon',
  'Jacob',
  'Kerry',
  'David',
  'Seth',
  'Matt',
  'Jeff',
  'Cameron',
  'Nicholas',
  'Anthony',
  'Catherine',
  'Andrew',
  'Pedja',
  'Phelan',
  'Fred',
  'Dalton',
];

let unusedArray = [];

randomGenerator.loadMemory = () => {
  fsx.readJSON(STORAGE_PATH)
    .then(array => {
      unusedArray = array;
    })
    .then(() => {
      randomGenerator.randomName();
    })
    .catch(error => {
      console.error(error);
    });
};


randomGenerator.randomName = (randomNumberGenerator) => {
  if (randomNumberGenerator === undefined) {
    randomNumberGenerator = Math.random;
  }

  if (!nameArray.length){
    throw new Error('you must load the nameArray');
  }
  let randomIndex = Math.ceil(randomNumberGenerator() * nameArray.length);
  let name = nameArray[randomIndex]
  return name;
};
