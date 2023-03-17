<template>
  <div class="footer_wrapper">
    <div class="content">
      <div class="policy_box">
        <p>关于更多信息或疑问，请及时联络我们国内服务人员。</p>
        <el-link type="info" href="/policy" :underline="false">
          隐私政策
        </el-link>
      </div>
      <div class="menu_box">
        <p>网站地图</p>
        <el-link type="primary" href="/" :underline="false"> 首页 </el-link>
        <el-link type="primary" href="/abort" :underline="false">
          关于
        </el-link>
        <el-link type="primary" href="/solution" :underline="false">
          解决方案
        </el-link>
        <el-link type="primary" href="/contact" :underline="false">
          联系我们
        </el-link>
      </div>
      <div class="contact_box">
        <p>+86 185 2159 5792</p>
        <p>联络时间在 09:00-AM - 06:00-PM</p>
        <p class="address">中国 青岛 / 中国 杭州</p>
      </div>
      <Image src="/images/footer-qcode.png" height="100px" width="100px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from "~~/components/Image.vue";
</script>
<style lang="scss" scoped>
.footer_wrapper {
  background-color: #003153;
  padding-top: 90px;
  height: 100%;
  box-sizing: border-box;
  color: #848e97;
  font-size: 14px;
  .content {
    height: 100%;
    box-sizing: border-box;
    background-color: #f2f5f8;
    display: flex;
    padding: 60px 50px 70px;
    p {
      margin-top: 0;
    }
  }
  .policy_box {
    width: 25%;
  }
  .menu_box {
    margin: 0 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 24px;
    p {
      font-size: 16px;
      font-weight: bold;
      color: #31384d;
    }
  }
  .contact_box {
    margin-right: 30px;
    p:first-child {
      font-size: 30px;
      font-weight: bold;
      color: #31384d;
      margin-bottom: 8px;
    }
    p:nth-child(2) {
      margin-bottom: 8px;
      margin-bottom: 30px;
    }
    .address {
      font-size: 16px;
      font-weight: bold;
      color: #31384d;
    }
  }
}
</style>
