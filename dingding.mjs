#!/usr/bin/env zx
console.log(chalk.blue('钉钉内网穿透'))
let subdomain = await question('请指定子域名(default: kittenbot)：')
const port = await question('请指定端口号(default: 3000)：')

let piercedPath = ''
let cfgPath = ''

if (os.platform() === 'win32') {
  piercedPath = 'windows_64/ding.exe'
  cfgPath = '\"./pierced/windows_64/ding.cfg\"'
  subdomain = '\"' + subdomain + '\"'
}
if (os.platform() === 'darwin') {
  piercedPath = 'mac_64/ding'
  cfgPath = './pierced/mac_64/ding.cfg'
}
if (os.platform() === 'linux') {
  piercedPath = 'linux/ding'
  cfgPath = './pierced/linux/ding.cfg'
}

await $`./pierced/${piercedPath} -config=${cfgPath} -subdomain=${subdomain ? subdomain : 'kittenbot'} ${port ? port : 3000}`
