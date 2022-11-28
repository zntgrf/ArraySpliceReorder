/**
 * ArraySpliceReoder
 * @param pages Array das Inhalte neu einsortieren soll
 * @param splicer Array aus Parametern für die splice Funktion
 * @returns Array das neu geordnet wurde
 */
export default function ArraySpliceReorder<Type>(
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
