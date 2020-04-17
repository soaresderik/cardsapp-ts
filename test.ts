const combinations: any = function*(elements: any, length: number) {
  for (let i = 0; i < elements.length; i++) {
    if (length === 1) {
      yield [elements[i]];
    } else {
      let remaining: any = combinations(
        elements.slice(i + 1, elements.length),
        length - 1
      );
      for (let next of remaining) {
        yield [elements[i], ...next];
      }
    }
  }
};

console.log(combinations([1, 2, 3, 4, 5], 3));
