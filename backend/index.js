const connectToMongo=require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
const port = 5000



app.use(cors())
//available routes
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('Hello Universe!')
})

app.listen(port, () => {
  console.log(`enotebook backend listening on port ${port}`)
})