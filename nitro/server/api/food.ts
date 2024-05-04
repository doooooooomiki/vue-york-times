export default defineEventHandler(async (event) => {
  const data = await $fetch(`/food.json`, {
    baseURL: 'https://api.nytimes.com/svc/topstories/v2',
    params: {
      'api-key': useRuntimeConfig(event).nytKey,
    },
  });

  return data;
});
