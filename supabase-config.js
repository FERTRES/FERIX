// SUPABASE CONFIGURATION - VERCEL VERSION
// Thornex Digital Entity - MorvithSERV

const SUPABASE_CONFIG = {
    url: 'https://tycspbyxzzisqtwpmybd.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5Y3NwYnl4enppc3F0d3BteWJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczNjkzOTIsImV4cCI6MjA5Mjk0NTM5Mn0.Sujr-jJqiRj0CBC1FBKL4SEGnpuc_ljoivmhQYviG_8'
};

// INGAT: Lo harus ganti anonKey dengan key asli dari Supabase!
// Ambil di: Project Settings > API > Project API keys > anon public

const supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
