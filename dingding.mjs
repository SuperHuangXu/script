#!/usr/bin/env zx
console.log(chalk.blue('钉钉内网穿透'))
const subdomain = await question('请指定子域名(default: kittenbot)：')
const port = await question('请指定端口号(default: 3000)：')

await $`./pierced/mac_64/ding -config=./pierced/mac_64/ding.cfg -subdomain=${subdomain ? subdomain : 'kittenbot'} ${port ? port : 3000}`
