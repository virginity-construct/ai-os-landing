// Setup Supabase tables using the REST API
const https = require('https');
const fs = require('fs');

// Supabase credentials
const supabaseUrl = 'https://ykdnaeltsrbiryrgytjk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrZG5hZWx0c3JiaXJ5cmd5dGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMjk1MDIsImV4cCI6MjA1NzcwNTUwMn0._8y78hK9j6WcHtFj1-3vweeHDa16PZali8a_7lTjOmw';

// Function to create the waitlist table
async function createWaitlistTable() {
  console.log('Creating waitlist table...');
  
  const options = {
    hostname: supabaseUrl.replace('https://', ''),
    path: '/rest/v1/rpc/create_waitlist_table',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`
    }
  };
  
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log('Waitlist table created successfully!');
          resolve(data);
        } else {
          console.error(`Error creating waitlist table: ${res.statusCode}`);
          console.error(data);
          reject(new Error(`HTTP Error: ${res.statusCode}`));
        }
      });
    });
    
    req.on('error', (error) => {
      console.error('Error:', error);
      reject(error);
    });
    
    req.write(JSON.stringify({}));
    req.end();
  });
}

// Function to create the investors table
async function createInvestorsTable() {
  console.log('Creating investors table...');
  
  const options = {
    hostname: supabaseUrl.replace('https://', ''),
    path: '/rest/v1/rpc/create_investors_table',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`
    }
  };
  
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log('Investors table created successfully!');
          resolve(data);
        } else {
          console.error(`Error creating investors table: ${res.statusCode}`);
          console.error(data);
          reject(new Error(`HTTP Error: ${res.statusCode}`));
        }
      });
    });
    
    req.on('error', (error) => {
      console.error('Error:', error);
      reject(error);
    });
    
    req.write(JSON.stringify({}));
    req.end();
  });
}

// Execute the setup
async function setup() {
  try {
    console.log('Setting up Supabase tables...');
    
    // Note: These calls will likely fail as we need to create the RPC functions first
    // This is just a demonstration of how we would approach it
    await createWaitlistTable();
    await createInvestorsTable();
    
    console.log('Setup complete!');
  } catch (error) {
    console.error('Setup failed:', error);
  }
}

setup();
