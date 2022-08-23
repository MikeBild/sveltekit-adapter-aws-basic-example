import { browser, dev } from '$app/env';

export const hydrate = dev;
export const router = browser;
export const prerender = true;
