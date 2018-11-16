if (process.env.NODE_ENV === 'test') {
    const config = require('@socifi/babel-config')('commonjs');
    module.exports = {
        presets: config.presets,
        plugins: config.plugins,
    };
    return;
}

const config = require('@socifi/babel-config')(false);

module.exports = {
    presets: config.presets,
    plugins: config.plugins.filter(plugin => plugin !== '@babel/plugin-transform-runtime'),
};
