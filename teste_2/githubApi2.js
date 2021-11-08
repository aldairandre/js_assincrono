//Consumindo api do github, usando promise com o modulo axios.

const axios = require('axios')

const gitHubApi = 'https://api.github.com/users/octocat/orgs' 

axios.get(gitHubApi).then(res => console.log(res.data))

console.log('Teste')