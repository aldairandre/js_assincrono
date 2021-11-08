//Consumindo api do github, usando async/await com IIFE
(async () => {
    const axios = require('axios')
    
    const gitHubApi = user => `https://api.github.com/users/${user}`
    
    console.time()
    const p1 = await axios.get(gitHubApi('aldairandre'))
    const p2 = await axios.get(gitHubApi('Antonio-Sitoe'))
    const p3 = await axios.get(gitHubApi('alanabarbosa'))
    console.log(p1.status)
    console.log(p2.status)
    console.log(p3.status)
    Promise.all([p1,p2,p3])
    console.timeEnd()
})()
