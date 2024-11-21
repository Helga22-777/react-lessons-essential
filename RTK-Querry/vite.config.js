import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});

//! for scripts. combine commands
//"concurrently": "^9.1.0",

//! data base. mini server
//"json-server": "^1.0.0-beta.3",
