import express from 'express'
import router from './router/index.route';
import 'dotenv/config'

const app = express()

app.use(router)
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})