const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios');

try {
  const serverAddress = core.getInput('server-address');
  const scriptName = core.getInput('script-name');
  const password = core.getInput('password');


  axios.get(`http://${serverAddress}:5123/runScript/${scriptName}?blocking=true`, {
      headers: {"Authorization" : password}
  })
    .then(function (response) {
        // handle success
        console.log("Success");
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error TODO
        console.log("Error catched");
        console.log(error);
        core.setFailed(error);
    })
  
} catch (error) {
    console.log("Error occurred");
  core.setFailed(error.message);
}