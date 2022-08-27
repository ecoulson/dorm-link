module.exports = {
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest'],
    },
    resolver: `${__dirname}/test/resolver.ts`,
    setupFilesAfterEnv: ['./test/jest-setup.ts'],
    testEnvironment: 'jsdom',
};
