import express from 'express';
import login from './api/login'

const app = express()
const port = 8080

app.listen(port, () => console.log(`App listening on port ${port}!`))

app.use(express.static('frontend'))

app.get('/api',login)

