import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hupvsaxcjrhfkjjixrwm.supabase.co'
const supabaseKey = 'sb_publishable_SnOOZc8cx0m5aEtsWODE8A_Yy0NpA5Z'

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)