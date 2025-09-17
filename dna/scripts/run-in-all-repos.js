/*
 * @license
 * Copyright (c) 2025 tssuite
 *
 * Use of this source code is governed by terms that can be
 * found in the LICENSE file in the root of this package.
 */

import { exec } from 'child_process';
import { existsSync, readFileSync } from 'fs';
import { readdir } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';
import { promisify } from 'util';
import { blue, green, red, yellow } from './functions/colors.js';

const execAsync = promisify(exec);

// Get the shell command from command-line arguments
const args = process.argv;

if (args.length < 4) {
  const usage = red('Usage:');
  const scriptName = green('node run-with-all-repos.js');
  const path = yellow('path');
  const command = blue('command');
  console.log(`${usage} ${scriptName} ${path} ${command}`);

  process.exit(1);
}

const dir = args[2];
const commandParts = args.slice(3);
const command = [];

// Exit if dir cannot be found on file system
if (!existsSync(dir)) {
  console.error(red('❌ Directory ') + blue(dir) + red(' does not exist.'));
  process.exit(1);
}

for (const part of commandParts) {
  if (part.includes(' ')) {
    command.push(`"${part}"`);
  } else {
    command.push(part);
  }
}

const baseDir = join(cwd(), dir);

function istssuiteRepo(dir) {
  try {
    // Read package.json file
    const pkgFile = join(dir, 'package.json');
    const pkgJson = JSON.parse(readFileSync(pkgFile, 'utf-8'));
    return pkgJson.name.startsWith('@tssuite/');
  } catch (err) {
    return false;
  }
}

try {
  // Read the contents of the current directory
  const entries = await readdir(baseDir, { withFileTypes: true });

  // Filter only directories
  const directories = entries.filter((entry) => {
    const isDir = entry.isDirectory();
    if (!isDir) return false;

    const istssuiteDir = istssuiteRepo(join(baseDir, entry.name));
    if (!istssuiteDir) return false;

    return true;
  });

  if (directories.length === 0) {
    console.log(red('⚠️ No tssuite repos found in ' + baseDir));
    process.exit(0);
  }

  // Execute the command in each subdirectory
  for (const dir of directories) {
    const dirPath = join(baseDir, dir.name);
    console.log(`\n▶️ Running command in: ${dirPath}`);

    try {
      const { stdout, stderr } = await execAsync(command.join(' '), {
        cwd: dirPath,
      });
      if (stdout) console.log(`✅ Output:\n${stdout}`);
      if (stderr) console.error(`⚠️ Error output:\n${stderr}`);
    } catch (err) {
      console.error(`❌ Failed in ${dirPath}:`, err.message);
    }
  }
} catch (err) {
  console.error('❌ Error reading directory:', err);
  process.exit(1);
}
