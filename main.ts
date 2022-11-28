import PdfMerger from 'pdf-merger-js';

/**
 * ArraySpliceReoder
 * @param pages Array das Inhalte neu einsortieren soll
 * @param splicer Array aus Parametern für die splice Funktion
 * @returns Array das neu geordnet wurde
 */
function ArraySpliceReoder<Type>(
  pages: Type[],
  splicer: Array<number>
): Type[] {
  let newOrder: Type[] = [];
  while (pages.length > 0) {
    for (const spliceNumber of splicer) {
      newOrder = [...newOrder, ...pages.splice(spliceNumber, 1)];
    }
  }
  return newOrder;
}

async function generate(splitter: string[]) {
  const pdfmerge = new PdfMerger();
  await pdfmerge.add('inside.pdf', splitter);

  await pdfmerge.save(`${Date.now()}.pdf`);
}

const sites: Array<string> = [];
const sitesCount: number = 35;

for (let i = 1; i <= sitesCount; i++) {
  sites.push(`${i}`);
}
const splitted = ArraySpliceReoder(sites, [-1, 0, 0, -1]);
console.log('split:', splitted.length);
console.log('array:', splitted);

generate(splitted);
