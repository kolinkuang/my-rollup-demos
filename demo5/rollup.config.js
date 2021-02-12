import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'rollup.js',
    output: {
        file: './js/dist_cjs.js',
        format: 'iife',
        name: 'result',
        exports: 'named'
    },
    plugins: [
        commonjs(),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        })
    ]
}
