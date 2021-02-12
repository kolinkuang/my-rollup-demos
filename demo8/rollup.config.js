export default {
    input: 'rollup.js',
    output: {
        file: './dist/dist.js',
        format: 'amd',
        exports: 'named'
    },
    external: ['jquery'],
    // paths: {
    //     // 在这里我们要使用cdn上的jquery文件，paths属性的值可以是一个对象或用法与external属性方法相似的方法（只是返回的不是boolean值而是文件的地址）。若使用对象来表示，则key值为需要引入的模块名称，value值为对应的文件地址
    //     jquery: 'https://cdn.bootcss.com/jquery/3.2.1/jquery.js'
    // }
}
