import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://ibonkjjeqwafcloaaocj.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlib25ramplcXdhZmNsb2Fhb2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyNjQyMDQsImV4cCI6MTk4Mzg0MDIwNH0.RL1Are0zCZdrsld5WKisIoIqG5SKfijLGgRCeMUuz1M";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*")
        }
    }
}