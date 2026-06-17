// @ts-check
import { defineConfig } from 'astro/config';

// Cloudflare Pages sets CF_PAGES=1 during its build, so this detects which target is building.
const isCloudflare = process.env.CF_PAGES === '1';

export default defineConfig({
  site: isCloudflare ? 'https://nirmalkarthikeyan.com' : 'https://cyberwizard1001.github.io',
  base: isCloudflare ? '/' : '/portfolio-three/',
});
