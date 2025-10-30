import { afterEach, vi } from 'vitest';

afterEach(() => {
  vi.unstubAllEnvs();
});

// #1727, #2905 for some reason Jest and Vitest evaluate modules twice if some consuming
// module gets mocked
// const isTestEnv = typeof jest !== 'undefined' || typeof vi !== 'undefined'

// @ts-expect-error: The reason is little up.
global.vi = {};
