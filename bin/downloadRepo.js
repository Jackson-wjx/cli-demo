// 引入
const download = require("download-git-repo");
// 使用 download-git-repo 下载模板
module.exports = function (gitRepo, projectName) {
  download(
    // 下载目标，格式为：仓库地址:用户名/仓库名字#分支'https://github.com:userName/storeName#master'
    gitRepo,
    // 下载完成后的项目名称，也就是文件夹名
    projectName,
    // { clone: true }, 
    // 下载结束后的回调
    (err) => {
      // 如果错误回调不存在，就表示下载成功了
      console.log(err ? `下载失败！${err}` : "下载成功！");
    }
  );
};
