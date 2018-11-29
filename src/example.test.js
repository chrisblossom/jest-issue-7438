import path from 'path';

/**
 * uncomment this to show all tests passing
 */
// require('./example');

const example = () => require('./example').example();

describe('example', () => {
    const realCwd = process.cwd();

    beforeEach(() => {
        /**
         * jest.config.js already has 'resetModules: true'
         */
        // jest.resetModules();
    })

    afterEach(() => {
        process.chdir(realCwd);
    });

    test('first', () => {
        const cwd = path.resolve(__dirname, 'first');

        process.chdir(cwd);

        const result = example();

        expect(result).toEqual(cwd);
    });

    test('second', () => {
        const cwd = path.resolve(__dirname, 'second');

        process.chdir(cwd);

        const result = example();

        expect(result).toEqual(cwd);
    });
});
