const seedData = require('./utils/SeedData.js');

console.log('Fetching articles, please wait...');
seedData().then(console.log);
