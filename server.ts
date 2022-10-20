import Express from 'express';
const app = Express();
import * as dotenv from 'dotenv';
const cors = require('cors');
dotenv.config()
const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
    console.log('kek')
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
