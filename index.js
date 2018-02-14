const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const os = require('os');
const http = require('http');

app.listen(process.env.PORT, () => {
    console.log(`server was listening at ${process.env.PORT} port`);
    console.log(os.hostname());
});