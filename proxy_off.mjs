#!/usr/bin/env zx
$.verbose = false

const service = 'wi-fi'

console.log(chalk.blue(`关闭代理: ${service}`))
await $`sudo networksetup -setwebproxystate ${service} off`
await $`sudo networksetup -setsecurewebproxystate "${service}" off`
await $`sudo networksetup -setsocksfirewallproxystate "${service}" off`
console.log(chalk.blue(`关闭代理成功 ✌️`))
