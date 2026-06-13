import express from 'express'

const router = express.Router()

router.get('/peak-nodes', (req, res) => {
  res.json([
    { id: 1, location: 'Shamshabad Toll Plaza', reports: 45, severity: 'high', coordinates: [17.65, 78.45] },
    { id: 2, location: 'Jubilee Hills', reports: 32, severity: 'medium', coordinates: [17.35, 78.5] },
  ])
})

router.get('/statistics', (req, res) => {
  res.json({ totalReports: 347, peakNodes: 12, activeContributors: 2145, safeRoutePercentage: 89 })
})

export default router