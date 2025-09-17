/*
 * @license
 * Copyright (c) 2025 tssuite
 *
 * Use of this source code is governed by terms that can be
 * found in the LICENSE file in the root of this package.
 */

export const isMainUpToDate = () => {
  try {
    execSync('git fetch origin main');
    const localHash = execSync('git rev-parse main').toString().trim();
    const remoteHash = execSync('git rev-parse origin/main').toString().trim();
    return localHash === remoteHash;
  } catch (error) {
    console.error(red('Error checking branch status:'), error);
    return false;
  }
};
