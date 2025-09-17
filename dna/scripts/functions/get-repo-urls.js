/*
 * @license
 * Copyright (c) 2025 tssuite
 *
 * Use of this source code is governed by terms that can be
 * found in the LICENSE file in the root of this package.
 */

// Import Node.js built-in module for working with child processes
import { exec } from 'child_process';
import { promisify } from 'util';

// Convert exec to return a Promise for async/await usage
const execAsync = promisify(exec);

// GitHub organization or user
const org = 'tssuite';

export async function getRepoUrls() {
  try {
    // Use the GitHub CLI to list repositories in JSON format
    const { stdout } = await execAsync(
      `gh repo list ${org} --limit 1000 --json url`,
    );

    // Parse the JSON output
    const repos = JSON.parse(stdout);

    // Map to name + URL and print to console
    return repos.map((repo) => repo.url);
  } catch (error) {
    console.error('Error fetching repositories:', error.message);
  }
}
