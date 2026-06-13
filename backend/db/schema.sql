CREATE TABLE streets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  start_lat DECIMAL(10, 8),
  start_lng DECIMAL(11, 8),
  end_lat DECIMAL(10, 8),
  end_lng DECIMAL(11, 8),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE danger_factors (
  id SERIAL PRIMARY KEY,
  street_id INT REFERENCES streets(id),
  type VARCHAR(100),
  severity INT,
  count INT DEFAULT 1,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE safety_reports (
  id SERIAL PRIMARY KEY,
  location_name VARCHAR(255),
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  category VARCHAR(100),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE incidents (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  category VARCHAR(100),
  affected_area VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);