import Express from 'express';
const app = Express();
const port = 3002;
import * as dotenv from 'dotenv';
dotenv.config()

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
