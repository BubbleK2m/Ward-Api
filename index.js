const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const http = require('http');

app.listen(process.env.PORT, () => {
    console.log(`server was listening at ${process.env.PORT} port`);
    setInterval(() => {
        console.log('asdff');
        http.get('https://ward-api.herokuapp.com')
    }, 300000);
});