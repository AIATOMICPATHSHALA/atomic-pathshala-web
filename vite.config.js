import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getHtmlInputs() {
  const inputs = {};
  
  // Include root index.html if it exists
  const rootIndex = path.resolve(__dirname, 'index.html');
  if (fs.existsSync(rootIndex)) {
    inputs['main'] = rootIndex;
  }
  
  // Scan all directories for code.html
  const files = fs.readdirSync(__dirname);
  for (const file of files) {
    const fullPath = path.join(__dirname, file);
    if (fs.statSync(fullPath).isDirectory()) {
      const codeHtmlPath = path.join(fullPath, 'code.html');
      if (fs.existsSync(codeHtmlPath)) {
        // Use folder name as key to ensure uniqueness
        inputs[file] = codeHtmlPath;
      }
    }
  }
  
  return inputs;
}

export default defineConfig({
  root: __dirname,
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlInputs(),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
