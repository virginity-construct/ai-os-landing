-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL,
  use_case TEXT,
  profession TEXT,
  work_email TEXT,
  social_links TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create investors table
CREATE TABLE IF NOT EXISTS investors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL,
  name TEXT,
  company TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Set up Row Level Security (RLS)
-- Enable RLS on tables
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE investors ENABLE ROW LEVEL SECURITY;

-- Create policies for waitlist table
CREATE POLICY "Allow anonymous insert to waitlist" ON waitlist
  FOR INSERT WITH CHECK (true);
  
CREATE POLICY "Allow service role select on waitlist" ON waitlist
  FOR SELECT USING (auth.role() = 'service_role');

-- Create policies for investors table
CREATE POLICY "Allow anonymous insert to investors" ON investors
  FOR INSERT WITH CHECK (true);
  
CREATE POLICY "Allow service role select on investors" ON investors
  FOR SELECT USING (auth.role() = 'service_role');
