/*
 * @license
 * Copyright (c) 2025 tssuite
 *
 * Use of this source code is governed by terms that can be
 * found in the LICENSE file in the root of this package.
 */

export function pullRequestUrl() {
  const json = execSync('gh pr view --json url', {
    encoding: 'utf-8',
  }).trim();

  const parsed = JSON.parse(json);
  const url = parsed.url;
  return url;
}
