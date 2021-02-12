import babel from 'rollup-plugin-babel';

export default [{
    input: 'rollup.js',
    output: {
        file: './dist/dist.es5.js',
        format: 'iife'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            plugins: ['external-helpers']
        })
    ]
}]
