<template setup>
  <div class="outDiv">
    <div class="tort">
      <span>
        如果有什么疑问，或写的不清楚的，或是侵权了，请邮件告知我，谢谢！
      </span>
      <br>
      <el-tag>raopan2021@outlook.com</el-tag>
      <br>
      <el-tag>942720506@qq.com</el-tag>
    </div>
  </div>
</template>

<style>
.outDiv {
  padding: 0 64x;
  margin-top: 32px;
}

.tort {
  max-width: 1152px;
  padding: 0 24px;
  text-align: right;
}

@media (min-width: 640px) {
  .tort {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .tort {
    padding: 0 64px;
  }
}

@media (min-width: 1280px) {
  .tort {
    margin: 0 auto;
    padding: 0;
  }
}
</style>