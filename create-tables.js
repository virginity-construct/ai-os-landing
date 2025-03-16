// Script to create tables in Supabase
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Read SQL file
const sqlScript = fs.readFileSync('./supabase-schema.sql', 'utf8');

// Initialize Supabase client
const supabaseUrl = 'https://ykdnaeltsrbiryrgytjk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrZG5hZWx0c3JiaXJ5cmd5dGprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxMjk1MDIsImV4cCI6MjA1NzcwNTUwMn0._8y78hK9j6WcHtFj1-3vweeHDa16PZali8a_7lTjOmw';
const supabase = createClient(supabaseUrl, supabaseKey);

async function createTables() {
  console.log('Creating tables in Supabase...');
  
  try {
    // Execute the SQL script
    const { data, error } = await supabase.rpc('exec_sql', { 
      query_text: sqlScript 
    });
    
    if (error) {
      console.error('Error executing SQL:', error);
      return;
    }
    
    console.log('Tables created successfully!');
    console.log(data);
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

createTables();
