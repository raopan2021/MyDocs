const path = require("path");
const dirTree = require("directory-tree");

// const srcPath = path.resolve(__dirname,"../guide");

// const srcDir = dirTree(srcPath,{
//   extensions: /\.md$/,
//   normalizePath: true,
// });

function toSidebarOption (tree = []) {
  // 类型校验，我们需要传入一个数组（必须是数组，否则就乱了）
  if (!Array.isArray(tree)) return [];

  return tree.map((v) => {
    // 之后判断数组的每一项是不是有children属性，
    // 那么把它的children传入继续递归，并且设置其菜单的其他属性（比如能否展开等）
    if (v.children !== undefined) {
      return {
        text: v.name,
        collapsible: true,
        collapsed: true,
        // 但是我们不知道他有几个子文件夹，所以我们需要通过一个递归函数来解决这个问题
        items: toSidebarOption(v.children),
      };
    } else {
      // 如果没有，那么其可能是空的文件夹或者md文件
      // 使用函数将可能是md文件的.md结尾去掉，再将路径path从docs开始截断
      // 注意路径是从docs文件夹开始写的绝对路径，不能写成是相对路径的方式
      return {
        text: v.name.replace(".md",""),
        // 传入link属性中，作为我们的访问路径
        link: v.path.split("docs")[1].replace(".md",""),
      };
    }
  });
}

function autoGetSidebarOptionBySrcDir (srcPath,title) {
  const srcDir = dirTree(srcPath,{
    extensions: /\.md$/,
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

  return [
    {
      // 如果传入了新的标题，则使用传入的新标题
      text: title == undefined ? srcDir.name : title,
      // 默认展开
      collapsible: true,
      collapsed: true,
      items: toSidebarOption(srcDir.children),
    },
  ];
}

export { autoGetSidebarOptionBySrcDir };