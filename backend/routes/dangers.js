import express from 'express'

const router = express.Router()

router.post('/report', (req, res) => {
  try {
    const { location, category } = req.body
    if (!location || !category) {
      return res.status(400).json({ error: 'Location and category required' })
    }
    res.json({ success: true, message: 'Safety report submitted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.get('/active', (req, res) => {
  res.json([{ id: 1, location: 'Shamshabad', category: 'Tire deflation', reports: 15, severity: 'high' }])
})

router.get('/heatmap', (req, res) => {
  res.json({ message: 'Heatmap data' })
})

export default router