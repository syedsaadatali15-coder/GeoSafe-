import { motion } from 'framer-motion'
import { MapPin, AlertCircle, Users, Zap } from 'lucide-react'
import { useState } from 'react'
import '../styles/Hero.css'

function Hero({ onStart }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleStart = () => {
    setIsLoading(true)
    setTimeout(() => onStart(), 800)
  }

  return (
    <div className="hero-container">
      <div className="hero-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <nav className="navbar glass">
        <div className="nav-content">
          <div className="logo">
            <AlertCircle size={28} style={{ color: 'var(--neon-cyan)' }} />
            <span>GeoSafe</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <motion.div className="hero-content" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <motion.h1 className="hero-title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}>
          Navigate Safer,
          <br />
          <span className="gradient-text">Every Step Counts</span>
        </motion.h1>

        <motion.p className="hero-subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 1 }}>
          GeoSafe uses graph-based danger scoring to guide you through the <span className="highlight">safest routes</span> in Hyderabad. Real-time reporting. Real protection.
        </motion.p>

        <motion.div className="features-grid" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          {[
            { icon: MapPin, title: 'Smart Routing', desc: 'Graph-based danger scoring' },
            { icon: AlertCircle, title: 'Live Reports', desc: 'Real-time citizen feedback' },
            { icon: Users, title: 'Community Driven', desc: 'Crowd power for safety' },
            { icon: Zap, title: '100% Free', desc: 'Open source. No costs.' },
          ].map((feature, idx) => (
            <motion.div key={idx} className="feature-card glass" whileHover={{ y: -5 }}>
              <feature.icon size={32} style={{ color: 'var(--neon-cyan)' }} />
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="cta-section" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
        <motion.button className="btn btn-primary cta-btn" onClick={handleStart} disabled={isLoading} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {isLoading ? <><span className="spinner"></span>Loading...</> : <><MapPin size={20} />Start Navigation</>}
        </motion.button>
      </motion.div>

      <footer className="hero-footer">Built with ❤️ for safer cities | GeoSafe © 2025</footer>
    </div>
  )
}

export default Hero