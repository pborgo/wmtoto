module.exports = function () {
    var module = 'wmtoto';

    var config = {
        files: {
            indexHtml: 'index.html'
        },
        options: {
            angularTemplateCache: getAngularTemplateCacheOptions,
            minifyHtml: getMinifyHtmlOptions
        },
        paths: {
            app: './app/',
            bower: './bower-components/',
            root: './'
        },
        queries: {
            all: '**/*.*',
            css: '**/*.css',
            cssSourcemap: '**/*css.map',
            html: '**/*.html',
            js: '**/*.js',
            jsSourcemap: '**/*.js.map',
            less: '**/*.less',
            sourcemap: '**/*.map'
        }
    };

    return config;

    function getAngularTemplateCacheOptions() {
        return {
            module: module,
            standAlone: false,
            root: 'app/'
        };
    }

    function getMinifyHtmlOptions() {
        return {
            empty: true
        };
    }
};