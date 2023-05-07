// 计数排序
// 传入一个数组，和数组的最大值
// 数组只能是正整数【】
function countingSort (arr,maxValue) {
  // 新建一个空的临时数组，数组长度为 maxValue + 1
  var tempArr = new Array(maxValue + 1);

  // 遍历数组
  for (var i = 0; i < arr.length; i++) {
    // 先将新数组的项，归0
    if (!tempArr[arr[i]]) {
      tempArr[arr[i]] = 0;
    }
    //有？++
    tempArr[arr[i]]++;
  }

  let sortedIndex = 0;
  for (var j = 0; j < maxValue + 1; j++) {
    // 存在值？
    while (tempArr[j] > 0) {
      // 给第0（sortedIndex）项重新赋值
      arr[sortedIndex] = j;
      sortedIndex++;
      tempArr[j]--;
    }
  }

  console.log(arr);

  return arr;
}

let array = [5,9,3,11,6,4,96,3]

countingSort(array,96)