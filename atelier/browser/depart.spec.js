import { test, expect } from './fixture.js';

test('la référence démarre sans erreur JavaScript', async ({ page, serverURL }) => {
  const erreurs = [];
  page.on('pageerror', erreur => erreurs.push(erreur.message));
  await page.goto(serverURL);
  await expect(page.getByRole('heading', { level: 1, name: 'Cap Web' })).toBeVisible();
  await expect(page.getByRole('status')).toBeAttached();
  expect(erreurs).toEqual([]);
});
