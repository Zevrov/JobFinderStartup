var fetch = require('node-fetch');

const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGithub() {

    let resultCount = 1, onPage = 0;
    const allJobs = [];

    while(resultCount > 0) {
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();
        allJobs.push(...jobs);
        resultCount = jobs.length;
        console.log('got', resultCount, 'jobs');
        onPage++;
    }

    console.log('got', allJobs.length, 'jobs total');
}

fetchGithub();

module.exports = fetchGithub;
// var CronJob = require('cron').CronJob;
// var job = new CronJob('* * * * * *', function() {
//   console.log('You will see this message every second');
// }, null, true, 'America/Los_Angeles');