export default {
    input: 'rollup.js',
    // dest: './dist/bundle.cjs.js',
    // format: 'cjs'
    watch: {
        exclude: ['path/to/file/which/you/want/to/ignore']
    },
    output: {
        file: './dist/bundle.cjs.js'
    }
}
