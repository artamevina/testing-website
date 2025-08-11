import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rsajpeudpsqsptnwiaoz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzYWpwZXVkcHNxc3B0bndpYW96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ4MzU3NTMsImV4cCI6MjA3MDQxMTc1M30.kSKvSI88LS7iNB5nOEu_wlPypEJ53ZMeUwXm9vlN18A'

export const supabase = createClient(supabaseUrl, supabaseKey)