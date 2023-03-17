<template>
  <div class="contact_wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>联系我们</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <section class="company">
        <p>大小象互联网科技（青岛）有限公司</p>
        <p>电话: +86 185 2159 5792</p>
        <p>Email: gracezou2829@gmail.com</p>
      </section>

      <section class="company">
        <p>大小象互联网科技杭州办事处</p>
        <p>电话: +86 130 6797 9153</p>
        <p>Email: galiathusi1i@gmail.com</p>
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact_wrapper {
  .content {
    padding: 0 50px 90px;
  }
  .company {
    margin-left: 20px;
    margin-bottom: 26px;
    p {
      margin: 0;
      line-height: 26px;
      font-size: 16px;
    }
    p:nth-child(1) {
      font-size: 30px;
      color: #31384d;
      margin: 13px 0;
    }
  }
}
</style>
