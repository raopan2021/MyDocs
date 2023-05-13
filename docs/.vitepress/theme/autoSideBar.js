const path = require("path");
const dirTree = require("directory-tree");

// const srcPath = path.resolve(__dirname,"../guide");

// const srcDir = dirTree(srcPath,{
//   extensions: /\.md$/,
//   normalizePath: true,
// });

function getSidebar (srcPath,title) {
  // srcPath 是传入的文件夹路径
  // title 是生成路径的标题（文件夹叫做“guide”，但是我希望在侧边栏中，它叫做“开始”）

  // 把传入的目录下的文件解析的指定的格式方便我们处理
  const srcDir = dirTree(srcPath,{
    // 同时处理时我们仅需要留下md格式的文件即可
    extensions: /\.md$/,
    // 配置extensions过滤文件格式
    normalizePath: true,
  });

  // 将index.md放最前面
  let firstIndexMD = {};
  srcDir.children.forEach((item,index) => {
    if (item.name === 'index.md') {
      firstIndexMD = item;
      srcDir.children.splice(index,1)
      return;
    }
  })
  srcDir.children.unshift(firstIndexMD);

  let res = [
    {
      // 如果传入了新的标题，则使用传入的新标题
      text: title == undefined ? srcDir.name : title,
      // 显示折叠按钮
      collapsible: true,
      // 折叠？
      collapsed: false,
      items: toSidebarOption(srcDir.children),
    },
  ];
  // console.log(JSON.stringify(res));

  return res
}

function toSidebarOption (tree = []) {
  // 类型校验，我们需要传入一个数组（必须是数组，否则就乱了）
  if (!Array.isArray(tree)) return [];

  return tree.map((v) => {
    // 判断数组的每一项是不是有children属性，有children则对children递归
    if (v.children !== undefined) {
      return {
        text: v.name,
        // 设置菜单属性（比如能否展开等）
        collapsible: true,
        collapsed: true,
        // 但是我们不知道他有几个子文件夹，所以我们需要通过一个递归函数来解决这个问题
        items: toSidebarOption(v.children),
      };
    } else {
      // 如果没有，那么其可能是空的文件夹或者md文件
      // 使用函数将可能是md文件的.md结尾去掉
      let text = v.name.replace(".md","")
      return {
        // 去掉序号
        // index改成“开始”
        text: text.includes('.') ? text.split('.')[1] : (text == 'index' ? '开始' : text),
        // 传入link属性中，作为我们的访问路径
        // 注意路径是从docs文件夹开始写的绝对路径，不能写成是相对路径的方式
        // 路径path从docs开始截断
        link: v.path.split("docs")[1].replace(".md",""),
      };
    }
  });
}

export { getSidebar };