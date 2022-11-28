import { describe, expect, test } from '@jest/globals';
import * as path from 'path';
import PdfMerger from 'pdf-merger-js';
import arraySpliceReorder from '../lib/arraySpliceReorder';

describe('random tests', () => {
  test('reoder a pdf', async () => {
    const sites: Array<string> = [];
    const sitesCount: number = 35;

    for (let i = 1; i <= sitesCount; i++) {
      sites.push(`${i}`);
    }
    const reorderSites = arraySpliceReorder(sites, [-1, 0, 0, -1]);

    async function generate(splitter: string[]): Promise<Boolean> {
      try {
        const pdfmerge = new PdfMerger();
        await pdfmerge.add(`${__dirname}/testfiles/file.pdf`, splitter);

        await pdfmerge.save(`${__dirname}/testfiles/${Date.now()}.pdf`);

        return true;
      } catch (error) {
        return false;
      }
    }
    const output = await generate(reorderSites);

    expect(output).toBeTruthy();
  });
});
