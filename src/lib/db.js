import { createClient } from '@supabase/auth-helpers-sveltekit'
import { env } from '$env/dynamic/public'

export const supabase = createClient(
    "https://ykhqaotqugdtidnepnfq.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlraHFhb3RxdWdkdGlkbmVwbmZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEwNDM3MDcsImV4cCI6MTk4NjYxOTcwN30.lJcEJ89HFoJ9U5vwDX1VXh_O2zyhBmxHWSyLGSDaPDA"
    )