#!/usr/bin/env zx
console.log(chalk.blue('钉钉内网穿透'))
const subdomain = await question('请指定子域名(default: kittenbot)：')
const port = await question('请指定端口号(default: 3000)：')

let piercedPath = ''
let cfgPath = ''

if (os.platform() === 'win32') {
  piercedPath = 'windows_64/ding.exe'
  cfgPath = 'windows_64/ding.cfg'
}
if (os.platform() === 'darwin') {
  piercedPath = 'mac_64/ding'
  cfgPath = 'mac_64/ding.cfg'
}
if (os.platform() === 'linux') {
  piercedPath = 'linux/ding'
  cfgPath = 'linux/ding.cfg'
}

await $`./pierced/${piercedPath} -config=./pierced/${cfgPath} -subdomain=${subdomain ? subdomain : 'kittenbot'} ${port ? port : 3000}`
