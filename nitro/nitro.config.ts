//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  runtimeConfig: {
    nytKey: 'foo',
  },
  routeRules: {
    '/api/*': {
      cors: true,
      headers: { 'access-control-allow-methods': 'GET' },
    },
  },
});
