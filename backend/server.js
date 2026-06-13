import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/routes.js'
import dangers from './routes/dangers.js'
import dashboard from './routes/dashboard.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/routes', routes)
app.use('/api/dangers', dangers)
app.use('/api/dashboard', dashboard)

app.get('/api/health', (req, res) => {
  res.json({ status: 'GeoSafe Backend is running ✅' })
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal Server Error' })
})

app.listen(PORT, () => {
  console.log(`🚀 GeoSafe Backend running on http://localhost:${PORT}`)
})