import AxeBuilder from '@axe-core/playwright';
import { test, expect } from './fixture.js';

test('envoyer salut affiche deux messages', async ({ page, serverURL }) => {
  await page.goto(serverURL);

  await page.getByLabel('Votre message').fill('salut');
  await page.getByRole('button', { name: 'Envoyer' }).click();

  await expect(page.getByRole('button', { name: 'Envoyer' })).toBeDisabled();
  await expect(page.getByRole('status')).toHaveText('Cap Web écrit…');
  await expect(page.getByRole('listitem')).toHaveCount(2);
});

test('la page ne contient pas de violation axe', async ({ page, serverURL }) => {
  await page.goto(serverURL);

  const resultats = await new AxeBuilder({ page }).analyze();

  expect(resultats.violations).toEqual([]);
});
