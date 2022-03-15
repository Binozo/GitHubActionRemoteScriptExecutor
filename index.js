const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

try {
  const serverAddress = core.getInput('server-address');
  const scriptName = core.getInput('script-name');
  const password = core.getInput('password');


  axios.get(`${serverAddress}:5123/run?password=${password}&script=${scriptName}`)
    .then(function (response) {
        // handle success
        console.log("Success");
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        core.setFailed(error);
    })
  
} catch (error) {
  core.setFailed(error.message);
}