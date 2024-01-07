export const urlToUrl = (value: string) => {
  const { app } = useRuntimeConfig();
  const { origin } = useRequestURL();

  return new URL(value, new URL(app.baseURL, origin)).href;
};
