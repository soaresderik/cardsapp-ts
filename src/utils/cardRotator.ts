export default function cardRotator(
  inputs: string[],
  highCard: string | null
): string[] {
  // main order
  const cards = [2, "A", "K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3];
  const suits = ["H", "D", "C", "S"];

  if (highCard) {
    // alter order by rotate card value
    cards.unshift(...cards.splice(cards.indexOf(highCard[0])));
    suits.unshift(...suits.splice(suits.indexOf(highCard[1])));
  }

  const output = inputs
    .sort((a, b): any => cards.indexOf(a[0]) > cards.indexOf(b[0]))
    .sort((a, b) => suits.indexOf(a[1]) - suits.indexOf(b[1]));

  return output;
}
