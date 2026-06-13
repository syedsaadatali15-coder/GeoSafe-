import { AlertCircle, TrendingUp, Users, MapPin } from 'lucide-react'
import '../styles/CivicDashboard.css'

function CivicDashboard({ onBack }) {
  const peakDangerNodes = [
    { id: 1, location: 'Shamshabad Toll Plaza', reports: 45, severity: 'high', incidents: ['Tire deflation', 'Robbery'] },
    { id: 2, location: 'Jubilee Hills Road', reports: 32, severity: 'medium', incidents: ['Harassment', 'Dim lighting'] },
    { id: 3, location: 'Miyapur Underpass', reports: 28, severity: 'medium', incidents: ['Auto violence', 'Deserted'] },
  ]

  return (
    <div className="civic-dashboard">
      <div className="dashboard-header glass">
        <div className="header-content">
          <h1>Authority Safety Dashboard</h1>
          <p>Real-time danger nodes and community reports</p>
        </div>
        <button className="btn btn-secondary" onClick={onBack}>← Exit</button>
      </div>

      <div className="dashboard-grid">
        <div className="stats-section">
          <div className="stat-card glass"><AlertCircle size={24} /><div><h3>Total Reports</h3><p className="stat-value">347</p></div></div>
          <div className="stat-card glass"><TrendingUp size={24} /><div><h3>Peak Nodes</h3><p className="stat-value">12</p></div></div>
          <div className="stat-card glass"><Users size={24} /><div><h3>Contributors</h3><p className="stat-value">2,145</p></div></div>
          <div className="stat-card glass"><MapPin size={24} /><div><h3>Safe Routes</h3><p className="stat-value">89%</p></div></div>
        </div>

        <div className="peak-nodes-section">
          <h2>Peak Danger Nodes</h2>
          <div className="nodes-list">
            {peakDangerNodes.map((node) => (
              <div key={node.id} className="node-card glass">
                <div className="node-header">
                  <h3>{node.location}</h3>
                  <span className={`severity-badge severity-${node.severity}`}>{node.severity.toUpperCase()}</span>
                </div>
                <p>📊 {node.reports} reports</p>
                <div className="incidents-list">{node.incidents.map((i, idx) => <span key={idx} className="incident-tag">{i}</span>)}</div>
                <button className="btn btn-primary action-btn">Take Action</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CivicDashboard