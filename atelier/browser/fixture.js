import path from 'node:path';
import { test as base, expect } from '@playwright/test';
import { createApp } from '../server/app.js';

export const test = base.extend({
  serverURL: [
    async ({}, use) => {
      const app = createApp({ publicDir: path.resolve('public') });

      await new Promise((resolve) => {
        app.listen(4173, '127.0.0.1', resolve);
      });

      await use('http://127.0.0.1:4173');

      await new Promise((resolve, reject) => {
        app.close((erreur) => (erreur ? reject(erreur) : resolve()));
      });
    },
    { scope: 'worker' }
  ]
});

export { expect };
