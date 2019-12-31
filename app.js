const express = require('express')
const os = require('os');

const PORT = 8000
const app = express()
app.get('/', (req, res) => {
    console.log(' reached here ! ');
    res.send(`Final test Jenkins CI/CD, Docker Registry, Rancher Compose CLI, Rancher -> Jenkins Notification, I'm run on ${os.hostname()}`)
})
app.listen(PORT)
console.log(`Running on http://0.0.0.0:${PORT}`);