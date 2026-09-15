import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { validateMessage, replyTo } from '../public/js/brain.js';

describe('validateMessage', () => {
  it('refuse une chaîne vide', () => {
    assert.equal(validateMessage('   ').ok, false);
  });

  it('nettoie les espaces', () => {
    assert.deepEqual(validateMessage('  salut  '), { ok: true, value: 'salut' });
  });

  it('accepte 280 caractères', () => {
    assert.equal(validateMessage('a'.repeat(280)).ok, true);
  });

  it('refuse 281 caractères', () => {
    assert.equal(validateMessage('a'.repeat(281)).ok, false);
  });
});

describe('replyTo', () => {
  it('répond pareil aux majuscules', () => {
    assert.equal(replyTo('SALUT'), replyTo('salut'));
  });

  it('répond autrement à une phrase inconnue que pour aide', () => {
    assert.notEqual(replyTo('une phrase inconnue'), replyTo('aide'));
  });
});
