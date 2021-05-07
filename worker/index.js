var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github');

// fetch Github jobs
new CronJob('*/1 * * * *', fetchGithub, null, true, 'America/Los_Angeles');