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

        it('when passed ["Jill", "Jane"] it should return "Hello Jill and Jane"', () => {
            expect(greet(['Jill', 'Jane'])).toBe("Hello Jill and Jane");
        });

        it('when passed ["Jill", "Jane", "Jerry"] it should return "Hello Jill, Jane, and Jerry"', () => {
            expect(greet(['Jill', 'Jane', 'Jerry'])).toBe("Hello Jill, Jane, and Jerry");
        });

        it("when passed ['Amy', 'BRIAN', 'Charlotte'] it should return 'Hello, Amy and Charlotte. AND HELLO BRIAN!'", () => {
            expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe('Hello, Amy and Charlotte. AND HELLO BRIAN!');
        });

        it("when passed ['Amy', 'Brian, Charlotte'] it should return 'Hello Amy, Brian and Charlotte'", () => {
            expect(greet(['Amy', 'Brian, Charlotte'])).toBe('Hello Amy, Brian, and Charlotte');
        });

        it('when passed ["Bob", "\"Charlie, Dianne\""] should return "Hello, Bob and Charlie, Dianne."', () => {
            expect(greet(["Bob", "\"Charlie, Dianne\""])).toBe("Hello, Bob and Charlie, Dianne.")
        })
    });
});