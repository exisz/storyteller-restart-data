#!/usr/bin/env node
import fs from 'node:fs/promises';
const manifest = JSON.parse(await fs.readFile('manifest.json', 'utf8'));
for (const file of Object.values(manifest.files)) {
  JSON.parse(await fs.readFile(file, 'utf8'));
}
console.log('RESTART data validation ok');
