import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import { AlertCircle, MapPin, Navigation, Phone } from 'lucide-react'
import { useState } from 'react'
import '../styles/InteractiveMap.css'

function InteractiveMap({ onBack }) {
  const [route, setRoute] = useState(null)
  const [safetyScore, setSafetyScore] = useState(null)
  const [showSOS, setShowSOS] = useState(false)
  const hyderabadCenter = [17.3850, 78.4867]

  const markers = [
    { id: 1, lat: 17.3850, lng: 78.4867, title: 'Hyderabad Central Police' },
    { id: 2, lat: 17.4408, lng: 78.6335, title: 'Gachibowli Emergency Booth' },
  ]

  const calculateRoute = () => {
    const mockRoute = [
      [17.3850, 78.4867],
      [17.3900, 78.4900],
      [17.3950, 78.4950],
      [17.4000, 78.5000],
    ]
    setRoute(mockRoute)
    setSafetyScore(87)
  }

  return (
    <div className="map-container">
      <MapContainer center={hyderabadCenter} zoom={13} className="leaflet-map">
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
        {route && <Polyline positions={route} color={safetyScore > 70 ? '#10b981' : '#f59e0b'} weight={4} opacity={0.8} />}
        {markers.map((marker) => (
          <Marker key={marker.id} position={[marker.lat, marker.lng]}>
            <Popup>{marker.title}</Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="control-panel glass">
        <h2>Find Safe Route</h2>
        <div className="input-group"><MapPin size={20} /><input type="text" placeholder="From..." /></div>
        <div className="input-group"><Navigation size={20} /><input type="text" placeholder="To..." /></div>
        <button className="btn btn-primary" onClick={calculateRoute}>Calculate Route</button>
        {safetyScore && (
          <div className={`safety-score score-${safetyScore > 70 ? 'safe' : 'caution'}`}>
            <h3>Safety Score: {safetyScore}/100</h3>
            <p>{safetyScore > 70 ? '🟢 Safe' : '🟡 Caution'}</p>
          </div>
        )}
      </div>

      <button className="btn btn-danger sos-btn glow" onClick={() => setShowSOS(!showSOS)}><AlertCircle size={24} /></button>
      {showSOS && (
        <div className="sos-menu glass">
          <button className="sos-option"><Phone size={20} /> Call Police</button>
          <button className="sos-option">Share Location</button>
          <button className="sos-option">Find Nearest Help</button>
        </div>
      )}
      <button className="btn btn-secondary back-btn" onClick={onBack}>← Back</button>
    </div>
  )
}

export default InteractiveMap