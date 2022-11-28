import { describe, expect, test } from '@jest/globals';
import arraySpliceReorder from '../lib/arraySpliceReorder';

describe('reorder strings', () => {
  test('reoder 3 items', () => {
    const arrayStrings = ['1', '2', '3'];
    const reorder = arraySpliceReorder(arrayStrings, [-1, 0]);
    expect(reorder).toEqual(['3', '1', '2']);
  });
  test('reoder 0 items', () => {
    const arrayStrings: string[] = [];
    const reorder = arraySpliceReorder(arrayStrings, [-1, 0]);
    expect(reorder).toEqual([]);
  });
});
