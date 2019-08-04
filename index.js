const lessToJs = require('less2js');
const loaderUtils = require('loader-utils');
const validateOptions = require('schema-utils');
const pkg = require('./package.json');

const defaultOptions = {
    camelCase: true,
};
const schema = {
    type: 'object',
    properties: {
        camelCase: {
            type: ['boolean']
        }
    }
};
const LOADER_NAME = pkg.name;

module.exports = function(content, map, meta) {
    this.cacheable(true);
    const callback = this.async();
    const userOptions = loaderUtils.getOptions(this);
    const options = {};

    Object.assign(options, defaultOptions, userOptions);

    validateOptions(schema, options, LOADER_NAME);

    const { camelCase } = options;

    lessToJs(this.resourcePath, {
        stripPrefix: true,
        camelCase,
    }).then((result) => {
        callback(null, `module.exports = ${JSON.stringify(result)};\n`, map, meta);
    });
}
