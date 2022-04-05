const app = require('./app.js');
const { port } = require('./config/constants.js');
const cronJob = require('./utils/CronJob.js');

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    cronJob.start();
});