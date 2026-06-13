import { useState } from 'react'
import Hero from './components/Hero'
import InteractiveMap from './components/InteractiveMap'
import CivicDashboard from './components/CivicDashboard'
import './styles/App.css'

function App() {
  const [showMap, setShowMap] = useState(false)
  const [userRole, setUserRole] = useState('citizen')

  return (
    <div className="app-container">
      {!showMap ? (
        <Hero onStart={() => setShowMap(true)} />
      ) : userRole === 'authority' ? (
        <CivicDashboard onBack={() => setShowMap(false)} />
      ) : (
        <InteractiveMap onBack={() => setShowMap(false)} />
      )}
    </div>
  )
}

export default App