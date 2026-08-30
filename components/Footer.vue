<template>
  <div class="footer_wrapper">
    <div class="content">
      <div class="content_main">
        <div class="policy_box">
          <p>关于更多信息或疑问，请及时联络我们国内服务人员。</p>
          <el-link type="info" href="/policy" :underline="false">
            隐私政策
          </el-link>
        </div>
        <div class="menu_box">
          <p>网站地图</p>
          <el-link type="primary" href="/" :underline="false"> 首页 </el-link>
          <el-link type="primary" href="/about" :underline="false">
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
      <div class="copyright">
        <span>© {{ year }} {{ site.name }}</span>
        <a
          v-if="site.icp"
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener"
        >
          {{ site.icp }}
        </a>
        <a
          v-if="site.police"
          :href="`http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${site.police}`"
          target="_blank"
          rel="noopener"
        >
          京公网安备 {{ site.police }} 号
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Image from "~~/components/Image.vue";

const { site } = useAppConfig();
const year = new Date().getFullYear();
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
    flex-direction: column;
    padding: 60px 50px 40px;
    p {
      margin-top: 0;
    }
  }
  .content_main {
    display: flex;
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
  .copyright {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px solid #dfe5ec;
    display: flex;
    flex-wrap: wrap;
    gap: 8px 20px;
    font-size: 13px;
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: #31384d;
      }
    }
  }
}
</style>
