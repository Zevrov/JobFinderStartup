var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github');

// fetch Github jobs
new CronJob('*/1 * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');