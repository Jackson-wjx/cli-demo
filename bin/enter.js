#! /usr/bin/env node
// console.log("hello demo");
// commander —— 命令行指令配置
const figlet = require("figlet");
console.log(
    "\r\n" +
      figlet.textSync("Jackson王", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 80,
        whitespaceBreak: true,
      })
  );
// chalk —— 命令行美化工具
const chalk = require("chalk");
const Inquirer = require("inquirer");
console.log(`hello ${chalk.blue("world")}`);
console.log(chalk.blue.bgRed.bold("Hello world!"));
console.log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);


const ora = require("ora");
const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);


new Inquirer.prompt([
    {
      name: "vue",
      // 多选交互功能
      // 单选将这里修改为 list 即可
      type: "checkbox",
      message: "Check the features needed for your project:",
      choices: [
        {
          name: "Babel",
          checked: true,
        },
        {
          name: "TypeScript",
        },
        {
          name: "Progressive Web App (PWA) Support",
        },
        {
          name: "Router",
        },
      ],
    },
  ]).then((data) => {
    console.log(data);
  });
const program = require("commander");
program.name("cli-demo").usage(`<command> [option]`);
program.version(`cli-demo ${require("../package.json").version}`);
// 解析用户执行时输入的参数
// process.argv 是 nodejs 提供的属性
// npm run server --port 3000
// 后面的 --port 3000 就是用户输入的参数
program.parse(process.argv);

