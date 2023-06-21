import { capitalizeFirstLetter, initializeItems } from "."

describe("Utils", () => {
    describe("initializeItems() method", () => {
        test("checks correct number of items", () => {
            const items = initializeItems(5);
            
            expect(items.length).toBe(5);
        });

        test("checks correct names of the products", () => {
            const items = initializeItems(3);
            
            expect(items[0].name).toBe("Milk");
            expect(items[1].name).toBe("Cheese");
            expect(items[2].name).toBe("Eggs");
        });
    });

    describe("capitalizeFirstLetter() method", () => {
        test.each([
            ["test", "Test"],
            ["TEST", "Test"],
            ["tEST", "Test"],
            ["foo", "Foo"],
            ["FOO", "Foo"],
            ["fOO", "Foo"],
          ])('checks that with input (%s) the output is (%s)', (a, expected) => {
            expect(capitalizeFirstLetter(a)).toBe(expected);
          });
      });
})