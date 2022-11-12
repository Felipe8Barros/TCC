import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://llazegfygbyvxfimjiqq.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsYXplZ2Z5Z2J5dnhmaW1qaXFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgwMzkxNzgsImV4cCI6MTk4MzYxNTE3OH0.3_RWCNC11Mdte_32kIUOgbU28-57Bdp0nbBDnK5fz7U"

// Better put your these secret keys in .env file
export const supabase = createClient(supabaseUrl, supabaseKey, {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false // Prevents Supabase from evaluating window.location.href, breaking mobile
});
