const cron = require('node-cron');
const seedData = require('./SeedData.js');

const cronJob = cron.schedule('0 9 * * *', async () => {
    const response = await seedData();
    console.log(response);
});

module.exports = cronJob;