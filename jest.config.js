const { setupTestFrameworkScriptFile, ...config } = require('@socifi/jest-config')();

module.exports = { ...config, transform: { '.*': 'babel-jest' } };
