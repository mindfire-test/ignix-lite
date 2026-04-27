import { existsSync, copyFileSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const corePath = join(__dirname, '../packages/core');
const distPath = join(corePath, 'dist');

const src = join(distPath, 'ignix-lite.css');
const dest = join(corePath, 'ignix-lite.min.css');

if (existsSync(src)) {
  copyFileSync(src, dest);
  console.log('CSS moved to root');
} else {
  console.error('ignix-lite.css not found');
}

rmSync(distPath, { recursive: true, force: true });
console.log('dist cleaned');
