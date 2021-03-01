/*
 * @Author: your name
 * @Date: 2021-02-25 10:44:41
 * @LastEditTime: 2021-02-25 16:26:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pl-vite\src\server.js
 */
const koa = require('koa')

function createServer() {
    const app = new koa()
    const context = {
        app,
        root: process.cwd(),
    }
    const resolvePlugin = []
    resolvePlugin.forEach(plugin => plugin())
    return app
}

createServer().listen(4000, () => {
    console.log(koa, 'vite start 4000 --', process.cwd())
})
