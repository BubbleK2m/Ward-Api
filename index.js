const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const http = require('http');

app.listen(process.env.PORT, () => {
    console.log(`server was listening at ${process.env.PORT} port`);
    // setInterval(() => http.get("https://localhost"), 300000);
});