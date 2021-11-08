//Consumindo api do github, usando callback assincrono, essa é a forma antiga.

const request = require('request')

const gitHubApi = 'https://api.github.com/users/octocat/orgs' 

request(gitHubApi,{headers: {'User-Agent': 'node.js'}},(err,res,body) => {
    console.log(JSON.parse(body))
})

console.log('Teste')