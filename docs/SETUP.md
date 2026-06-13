# GeoSafe Setup Guide

## Installation

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:3000`

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```
Runs on `http://localhost:5000`

## Features

### 1. Interactive Map
- Hyderabad street mapping
- Color-coded routes
- Emergency markers
- Real-time updates

### 2. Safety Scoring Algorithm
- Graph-based node evaluation
- Multi-factor assessment
- Real-time updates

### 3. Community Reports
- Safety reporting form
- Incident mapping
- Reward system

### 4. Authority Dashboard
- Peak danger nodes
- Real-time statistics
- Action management

### 5. Emergency SOS
- Quick alerts
- Location sharing
- Emergency contacts

## API Endpoints

### Routes
- `POST /api/routes/calculate` - Calculate safe route
- `GET /api/routes/:id` - Get route details

### Dangers
- `POST /api/dangers/report` - Submit report
- `GET /api/dangers/active` - Active reports
- `GET /api/dangers/heatmap` - Danger heatmap

### Dashboard
- `GET /api/dashboard/peak-nodes` - Peak nodes
- `GET /api/dashboard/statistics` - Statistics
