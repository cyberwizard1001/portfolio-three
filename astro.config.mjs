// @ts-check
import { defineConfig } from 'astro/config';

// Set DEPLOY_TARGET=cloudflare in the Cloudflare Workers project's "Variables and secrets" build
// settings — this is a Workers Builds project, not classic Pages, so CF_PAGES isn't set there.
const isCloudflare = process.env.DEPLOY_TARGET === 'cloudflare' || process.env.CF_PAGES === '1';

export default defineConfig({
  site: isCloudflare ? 'https://nirmalkarthikeyan.com' : 'https://cyberwizard1001.github.io',
  base: isCloudflare ? '/' : '/portfolio-three/',
});
