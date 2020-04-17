const combinations: any = function*(elements: any, length: number) {
  for (let i = 0; i < elements.length; i++) {
    if (length === 1) {
      yield [elements[i]];
    } else {
      const remaining: any = combinations(
        elements.slice(i + 1, elements.length),
        length - 1
      );
      for (const next of remaining) {
        yield [elements[i], ...next];
      }
    }
  }
};

const fullHouse = (arr: string[]) => {
  const countObj: any = {};
  for (const x of arr) {
    countObj[x[0]] = (countObj[x[0]] || 0) + 1;
  }
  const vals = Object.values(countObj);
  if ((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)) {
    return true;
  }
  return false;
};

export default function allFullHouses(arr: string[]): string[] {
  const newArr: string[][] = [];
  if (arr.length < 5) return [];

  arr.forEach((a) => {
    // if occurrance was add so ignore then and go to next
    if (!newArr.flat().includes(a)) {
      /* filter to all repeated values cards (not suits)
         and push complete value */
      const filtered = arr.filter((x) => x[0] === a[0]);
      if (filtered.length > 1) newArr.push(filtered);
    }
  });

  // combine all possibility and filter fullhouse cases
  return [...combinations(newArr.flat(), 5)].filter(fullHouse);
}
