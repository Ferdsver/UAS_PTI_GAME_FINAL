import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // ⬅️ Wajib untuk Netlify agar path bekerja dengan baik
});
