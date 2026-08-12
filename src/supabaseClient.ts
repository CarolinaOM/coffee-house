import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://xcwtircadwqqolxaxhes.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_SheuO03e0PsRzJJ50ruoYA_H5tvL5o-';
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);