# 🛡️ GeoSafe - Graph-Based Safety Navigation System

## Vision
A smart navigation platform that guides users through the **safest** routes using graph-based danger scoring, real-time crowd reporting, and AI assistance.

### Key Features
✅ **Interactive Leaflet Map** (Hyderabad-centered)
✅ **Graph-Based Danger Scoring** (Street nodes + weighted dangers)
✅ **Real-Time Crowd Reporting** (Citizens report unsafe conditions)
✅ **Voice-Activated SOS** (Emergency button with quick actions)
✅ **SafeRoute Guardian AI** (Chat assistant with case studies)
✅ **Civic Authority Dashboard** (Peak danger nodes visualization)
✅ **100% Free & Open Source** (Leaflet.js + OpenStreetMap + OSRM)

## Tech Stack

### Frontend
- **React 19** + Vite (Ultra-fast development)
- **Leaflet.js + react-leaflet** (Interactive mapping)
- **Framer Motion** (Smooth animations)
- **lucide-react** (Premium icons)
- **CSS Modules** (Neon glassmorphism design)

### Backend
- **Node.js + Express.js** (Lightweight & scalable)
- **PostgreSQL** (Structured data storage)
- **Graph-Based Danger Scoring Algorithm** (Simple math, powerful results)

## Quick Start

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:3000
```

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
npm run dev
# Runs on http://localhost:5000
```

## Graph-Based Danger Scoring Algorithm

```
Each street segment = Node in graph
Danger factors (weights):
  • Crime incidents from Hyderabad database
  • Real-time citizen reports
  • Lighting conditions
  • Crowd density
  • Distance from police stations

Score Calculation:
  score = Σ(danger_weight * factor_value)

Color Decision:
  score > 70    → 🟢 GREEN (Safe)
  40 ≤ score ≤ 70 → 🟡 YELLOW (Caution)
  score < 40    → 🔴 RED (Unsafe)
```

## Features

### 1. Interactive Map
- Real-time Hyderabad street mapping
- Color-coded routes (Green/Yellow/Red)
- Emergency markers (Police, Hospitals, Booths)
- Incident overlays
- Zoom & drag capabilities

### 2. Safety Scoring
- Graph-based node evaluation
- Multi-factor danger assessment
- Real-time score updates
- Comparative route analysis

### 3. Community Reports
- Safety assessment form
- Drag-to-pin incident reporting
- Reward points & badges
- Leaderboard system

### 4. Authority Dashboard
- Peak danger node visualization
- Real-time statistics
- Incident clustering
- Action management

### 5. Emergency SOS
- Voice-activated button
- Quick call to police
- Location sharing
- Emergency contact list

## Data Integration (10 Hyderabad Incidents)
1. Shamshabad Disha case - Isolated toll plazas
2. Jubilee Hills gang rape - Late-night risks
3. Shared auto violence - Miyapur/Gachibowli
4. Cyberabad techie case - Remote locations
5. Trafficking incidents - High-risk zones
6. Malkajgiri incident - Deserted areas
7. Malakpet incident - Trafficking hotspot
8. Kondurg incident - Remote transport
9. Lingampally incident - Late-night commute
10. Saroornagar incident - Crowd safety

## API Endpoints

### Routes
- `POST /api/routes/calculate` - Calculate safe route
- `GET /api/routes/:id` - Get route details

### Dangers
- `POST /api/dangers/report` - Submit safety report
- `GET /api/dangers/active` - Get active reports
- `GET /api/dangers/heatmap` - Get danger heatmap

### Dashboard
- `GET /api/dashboard/peak-nodes` - Peak danger nodes
- `GET /api/dashboard/statistics` - Safety statistics

## Project Structure
```
GeoSafe/
├── frontend/          # React 19 + Vite
│   ├── src/
│   ├── components/
│   ├── styles/
│   └── vite.config.js
│
├── backend/           # Node.js + Express
│   ├── routes/
│   ├── services/
│   ├── db/
│   └── server.js
│
└── docs/
    └── API.md
```

## Development Roadmap

### Phase 1 (Current) ✅
- Project setup
- UI components
- Map integration
- Backend API

### Phase 2 🎯
- Database connectivity
- Real-time incident feed
- AI Guardian implementation
- Community rewards

### Phase 3 📱
- Mobile app (React Native)
- Voice activation
- Advanced analytics
- Government integration

## License
MIT License - Open Source for all

---

**Built with ❤️ for safer cities** 🛡️