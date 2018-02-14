const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const https = require('https');

app.listen(process.env.PORT, () => {
    console.log(`server was listening at ${process.env.PORT} port`);
    setInterval(() => { 
        console.log('asf');
        https.get('https://ward-api.herokuapp.com/') 
    }, 240000);
});