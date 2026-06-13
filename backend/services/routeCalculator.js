export async function calculateSafeRoute(source, destination) {
  return {
    source,
    destination,
    distance: 15.3,
    duration: 28,
    safetyScore: 87,
    color: 'green',
    waypoints: [[17.3850, 78.4867], [17.3900, 78.4900], [17.3950, 78.4950], [17.4000, 78.5000]],
    recommendations: ['Avoid traveling alone', 'Keep phone charged', 'Share location'],
  }
}

export function calculateDangerScore(dangerFactors) {
  let score = 0
  const weights = { crimeIncidents: 2.5, crowdReport: 1.5, noLighting: 1.2, desertedArea: 1.8, policeDistance: 0.5 }
  for (const [key, factor] of Object.entries(dangerFactors)) {
    if (weights[key]) score += weights[key] * factor
  }
  return score
}

export function getRouteColor(safetyScore) {
  if (safetyScore > 70) return 'green'
  if (safetyScore > 40) return 'yellow'
  return 'red'
}