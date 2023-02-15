#! /usr/bin/env node
// 不将环境改为node会运行报错
const program = require("commander");
const chalk = require("chalk");
const checkFileName = require("./checkFileName");

program.name("jackson").usage(`<command> [option]`);
program.version(`jackson ${require("../package.json").version}`);
program
  .command("create <project-name>") // 增加创建指令
  .description("create a new project") // 添加描述信息
  .option("-f, --force", "overwrite target directory if it exists") // 强制覆盖
  .action((projectName, cmd) => {
    // 处理用户输入create 指令附加的参数
    console.log(projectName, cmd);
    checkFileName(projectName, cmd);
  });
program
  .command("config [value]") // config 命令
  .description("inspect and modify the config")
  .option("-g, --get <key>", "get value by key")
  .option("-s, --set <key> <value>", "set option[key] is value")
  .option("-d, --delete <key>", "delete option by key")
  .action((value, keys) => {
    // value 可以取到 [value] 值，keys会获取到命令参数
    console.log(value, keys);
  });
// 使用 cyan 颜色
program.on("--help", function () {
  // 前后两个空行调整格式，更舒适
  console.log();
  console.log(
    `Run ${chalk.cyan(
      "jackson <command> --help"
    )} for detailed usage of given command.`
  );
  console.log();
});
// 解析输入要放倒最后一行
program.parse(process.argv);
