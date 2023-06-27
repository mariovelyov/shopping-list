import { capitalizeFirstLetter, initializeItems } from "."

describe("Utils", () => {
describe('initializeItems', () => {
  it('should return an array of items with the specified length', () => {
    const totalNumber = 5;
    const result = initializeItems(totalNumber);
    expect(result.length).toBe(totalNumber);
  });

  it('should initialize items with unique IDs', () => {
    const totalNumber = 10;
    const result = initializeItems(totalNumber);
    const ids = result.map((item) => item.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(totalNumber);
  });

  it('should initialize items with names from the PRODUCT_NAMES array', () => {
    const totalNumber = 3;
    const result = initializeItems(totalNumber);
    const names = result.map((item) => item.name);
    const expectedNames = ['Milk', 'Cheese', 'Eggs'];
    expect(names).toEqual(expectedNames);
  });

  it('should initialize items with amount between 1 and 5 (inclusive)', () => {
    const totalNumber = 8;
    const result = initializeItems(totalNumber);
    const amounts = result.map((item) => parseInt(item.amount, 10));
    for (const amount of amounts) {
      expect(amount).toBeGreaterThanOrEqual(1);
      expect(amount).toBeLessThanOrEqual(5);
    }
  });
});


      describe('capitalizeFirstLetter', () => {
        it('should capitalize the first letter of a word', () => {
          const result = capitalizeFirstLetter('hello');
          expect(result).toBe('Hello');
        });
      
        it('should handle empty strings', () => {
          const result = capitalizeFirstLetter('');
          expect(result).toBe('');
        });
      
        it('should handle single-letter strings', () => {
          const result = capitalizeFirstLetter('a');
          expect(result).toBe('A');
        });
      
        it('should handle already capitalized words', () => {
          const result = capitalizeFirstLetter('World');
          expect(result).toBe('World');
        });
      
        it('should capitalize the first letter and convert the rest to lowercase', () => {
          const result = capitalizeFirstLetter('eXaMpLe');
          expect(result).toBe('Example');
        });
      }); 
})