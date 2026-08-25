import { sortCharacters } from "./sort.js";

test('should sort characters by health descending', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  const result = sortCharacters(input);

  expect(result).toEqual(expected);
});
