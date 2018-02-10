const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`server was listening at ${process.env.PORT} port`);
});