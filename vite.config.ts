import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc'

const environment = loadEnv(process.env.NODE_ENV, process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: environment.VITE_BASE_URL || '/',
})
