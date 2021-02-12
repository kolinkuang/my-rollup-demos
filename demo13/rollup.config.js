import scss from 'rollup-plugin-scss'

export default {
    input: 'index.js',
    plugins: [
        scss({
            output: './dist/css/style.css'
        })
    ]
}
