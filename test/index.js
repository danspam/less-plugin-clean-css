const assert = require('assert');

describe('LessPluginCleanCSS', function () {
    it('should work as less plugin', function () {
        const less = require('less');
        const LessPluginCleanCSS = require('..');

        const cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});

        const lessString = 'body { color: #f00; }';

        return less.render(lessString, { plugins: [cleanCSSPlugin] })
            .then(function (result) {
                assert.equal(result.css, 'body{color:red}');
            });
    });

    it('should generate sourcemaps', function () {
        const less = require('less');
        const LessPluginCleanCSS = require('..');

        const cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});

        const lessString = 'body { color: #f00; }';

        return less.render(lessString, { plugins: [cleanCSSPlugin], sourceMap: { outputSourceFiles: true } })
            .then(function (result) {
                assert.equal(result.css,'body{color:red}');
                assert.equal(result.map, '{"version":3,"sources":["input"],"names":[],"mappings":"AAAA,KAAO,MAAA","sourcesContent":["body { color: #f00; }"]}');
            });
    });
});
