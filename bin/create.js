#! /usr/bin/env node
// 不将环境改为node会运行报错
const program = require("commander");
const chalk = require("chalk");

program.name("cli-demo").usage(`<command> [option]`);
program.version(`cli-demo ${require("../package.json").version}`);
program
    .command("create <project-name>") // 增加创建指令
    .description("create a new project") // 添加描述信息
    .option("-f, --force", "overwrite target directory if it exists") // 强制覆盖
    .action((projectName, cmd) => {
        // 处理用户输入create 指令附加的参数
        console.log(projectName, cmd);
    });
// 使用 cyan 颜色
program.on("--help", function () {
    // 前后两个空行调整格式，更舒适
    console.log();
    console.log(
      `Run ${chalk.cyan(
        "cli-demo <command> --help"
      )} for detailed usage of given command.`
    );
    console.log();
  });
// 解析输入要放倒最后一行 
program.parse(process.argv);