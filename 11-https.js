const https = require('http')

const server = https.createServer((req, res) => {

    if(req.url === '/'){
        res.end('welcome to our home page')
    }

    if (req.url === '/about'){
        res.end('welcome to our about page')
    }
    
    res.end(`
        <ch1>Oopsa </ch1>
        <P> we can't find your page </p>
        <a href="/"> back home </a>
        `)
})

server.listen(5000)