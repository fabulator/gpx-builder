const { setupTestFrameworkScriptFile, ...config } = require('@socifi/jest-config')('build');

module.exports = { ...config, transform: { '.*': 'babel-jest' } };
