import cardRotator from "@/utils/cardRotator";
import fullHouse from "@/utils/fullHouse";

describe("Input - 7D, AS, QH, 9S, 6D and Rotation 2H", () => {
  const result = cardRotator(["7D", "AS", "QH", "9S", "6D"], "2H");

  it("High Card should be QH", () => {
    expect(result[0]).toBe("QH");
  });

  it("Result ordered should return QH, 7D, 6D, AS, 9S", () => {
    expect(result).toEqual(["QH", "7D", "6D", "AS", "9S"]);
  });

  it("Fullhouse combination should be none", () => {
    const full = fullHouse(result);
    expect(full.length).toBe(0);
  });
});

describe("Input - 7D, AS, QH, 9S, 6D and Rotation 10C", () => {
  const result = cardRotator(["7D", "AS", "QH", "9S", "6D"], "10C");

  it("High Card should be AS", () => {
    expect(result[0]).toBe("AS");
  });

  it("Result ordered should return AS, 9S, QH, 7D, 6D", () => {
    expect(result).toEqual(["AS", "9S", "QH", "7D", "6D"]);
  });

  it("Fullhouse combinations should be none", () => {
    const full = fullHouse(result);
    expect(full.length).toBe(0);
  });
});

describe("Input - AS, AD, AC, KH, KS and Rotation 2H", () => {
  const result = cardRotator(["AS", "AD", "AC", "KH", "KS"], "2H");

  it("High Card should be KH", () => {
    expect(result[0]).toBe("KH");
  });

  it("Result ordered should return KH, AD, AC, AS, KS", () => {
    expect(result).toEqual(["KH", "AD", "AC", "AS", "KS"]);
  });

  it("Fullhouse combinations should be length 1", () => {
    const full = fullHouse(result);
    expect(full.length).toBe(1);
  });
});

describe("Input - 2H, 2D, 2C, 2S, 3H, 3D, 3C and Rotation 2H", () => {
  const result = cardRotator(["2H", "2D", "2C", "2S", "3H", "3D", "3C"], "2H");

  it("High Card should be 2H", () => {
    expect(result[0]).toBe("2H");
  });

  it("Result ordered should return 2H, 3H, 2D, 3D, 2C, 3C, 2S", () => {
    expect(result).toEqual(["2H", "3H", "2D", "3D", "2C", "3C", "2S"]);
  });

  it("Fullhouse combinations should be length 18", () => {
    const full = fullHouse(result);
    expect(full.length).toBe(18);
  });
});
