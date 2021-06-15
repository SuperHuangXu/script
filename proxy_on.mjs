#!/usr/bin/env zx
$.verbose = false

const service = 'wi-fi'
const host = '192.168.0.155'
// const host = '192.168.31.245'
const port = 1080
console.log(chalk.blue(`开启代理: ${service} ${host}:${port}`))
await $`sudo networksetup -setwebproxy "${service}" "${host}" ${port}`
await $`sudo networksetup -setsecurewebproxy "${service}" "${host}" ${port}`
await $`sudo networksetup -setsocksfirewallproxy "${service}" "${host}" ${port}`
await $`sudo networksetup -setwebproxystate "${service}" on`
await $`sudo networksetup -setsecurewebproxystate "${service}" on`
await $`sudo networksetup -setsocksfirewallproxystate "${service}" on`
console.log(chalk.blue(`开启代理成功 ✌️`))
