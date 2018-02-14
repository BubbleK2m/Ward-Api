const dotenv = require('dotenv');
dotenv.config();

const os = require('os');
const http = require('http');
const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`server was listening at ${process.env.PORT} port`);
    console.log(os.hostname());
});