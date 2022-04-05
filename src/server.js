const app = require('./app.js');
const cronJob = require('./utils/CronJob.js');

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    cronJob.start();
});