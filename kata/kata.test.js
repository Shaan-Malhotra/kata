const greet = require("./kata");

describe('greet', () => {
    describe('returning a name with a hello greeting', () => {
        it('when passed Bob, it should return Hello Bob', () => {
            expect(greet("Bob")).toBe("Hello Bob");
        });

        it('when passed null, it should return "Hello my friend.', () => {
            expect(greet(null)).toBe("Hello my friend");
        });

        it('when passed BOB, it should return "HELLO BOB.', () => {
            expect(greet("BOB")).toBe("HELLO BOB");
        });

    });
});