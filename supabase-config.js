// SUPABASE CONFIGURATION - VERCEL VERSION
// Thornex Digital Entity - MorvithSERV

const SUPABASE_CONFIG = {
    url: 'https://tycspbyxzzisqtwpmybd.supabase.co',
    anonKey: 'sb_publishable_fZlvjXG8OmmR6yJFiKiQJA_HWPG-FX1'
};

// INGAT: Lo harus ganti anonKey dengan key asli dari Supabase!
// Ambil di: Project Settings > API > Project API keys > anon public

const supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
