import urlResolve from 'rollup-plugin-url-resolve';

export default {
    input: 'rollup.js',
    output: {
        file: './dist/dist.js',
        format: 'amd',
        exports: 'named'
    },
    external: ['jquery'],
    plugins: [urlResolve({
        cacheManager: '.cache'
    })]
};
