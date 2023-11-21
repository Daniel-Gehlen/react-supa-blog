import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://excjncldkxfgkcjxttqp.supabase.co/rest/v1',
  headers: {
    common: {
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4Y2puY2xka3hmZ2tjanh0dHFwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTkzMDczOSwiZXhwIjoyMDE1NTA2NzM5fQ.TfRLF1txpkQnJaRaZ5EWZ0s0qltbAfHna1XJ1aSM0Jo',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4Y2puY2xka3hmZ2tjanh0dHFwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTkzMDczOSwiZXhwIjoyMDE1NTA2NzM5fQ.TfRLF1txpkQnJaRaZ5EWZ0s0qltbAfHna1XJ1aSM0Jo'
    },
  },
});
