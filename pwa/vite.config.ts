import { vitePlugin as remix } from '@remix-run/dev';
import * as child from 'child_process';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import Icons from 'unplugin-icons/vite';

const commitHash = child.execSync('git rev-parse --short HEAD').toString();

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
  ],
  define: {
    __COMMIT_HASH__: JSON.stringify(commitHash),
  },
});
