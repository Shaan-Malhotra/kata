const greet = require("./kata");

describe('greet', () => {
    describe('returning a name with a hello greeting', () => {
        it('when passed Bob, it should return Hello Bob', () => {
            expect(greet("Bob")).toBe("Hello Bob");
        });

        it('when passed 2, it should return 2', () => {
            expect(fizzBuzz(2)).toBe(2);
        });
    });
});