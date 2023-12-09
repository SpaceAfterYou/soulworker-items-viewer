export const urlToUrl = (value: string) => new URL(value, useRequestURL()).href;
