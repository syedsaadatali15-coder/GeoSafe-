import express from 'express'
import { calculateSafeRoute } from '../services/routeCalculator.js'

const router = express.Router()

router.post('/calculate', async (req, res) => {
  try {
    const { source, destination } = req.body
    if (!source || !destination) {
      return res.status(400).json({ error: 'Source and destination required' })
    }
    const route = await calculateSafeRoute(source, destination)
    res.json(route)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, status: 'Route details' })
})

export default router