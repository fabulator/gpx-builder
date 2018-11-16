module.exports = {
    extends: [
        '@socifi',
    ],
    plugins: [
        'typescript', // fix for Webstorm, otherwise it does not parse ts files
    ],
    rules: {
        'no-redeclare': 0,
        'no-shadow': 0,
        'no-dupe-args': 0,
    },
};
