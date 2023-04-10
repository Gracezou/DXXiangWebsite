<template>
  <div class="home">
    <div class="home_header">
      <Header />
    </div>
    <ElCarousel trigger="click" :height="carouselHeight">
      <ElCarouselItem>
        <Image src="/images/carousel_1.jpg" />
        <div class="title_wrapper">
          <h2>技术解决方案提供商</h2>
          <p>
            我们提供一批行业内实施经验丰富的技术人才和业务专家，凭借行业经验和全方位的专业技能，坚持以客户服务为中心，无论客户面临何种挑战，我们都将竭尽全力为其提供专业的支持和解决方案。
          </p>
        </div>
      </ElCarouselItem>
      <ElCarouselItem>
        <Image src="/images/carousel_2.jpg" />
        <div class="title_wrapper">
          <h2>应用程序与网页无缝助力</h2>
          <p>
            应用程序与网页的无缝连接已经成为了现代信息技术发展的一个重要趋势，对于企业和用户来说，都具有重要的意义。不仅可以提高用户的使用体验，同时也可以为企业和品牌带来更多的商业机会。当应用程序与网页紧密结合时，它们可以实现更多的功能，更方便地让用户获取信息和服务。
          </p>
        </div>
      </ElCarouselItem>
      <ElCarouselItem>
        <Image src="/images/carousel_3.jpg" />
        <div class="title_wrapper">
          <h2>网络数据猎手</h2>
          <p>
            可以自动化地从网页中提取数据，并进行处理和分析，可以用于网络数据挖掘、搜索引擎优化、竞争情报收集等领域。而大数据处理则是指处理海量、复杂、异构数据的技术，可以用于数据分析、数据挖掘、机器学习等领域
          </p>
        </div>
      </ElCarouselItem>
    </ElCarousel>
    <section class="part_content main">
      <h1>网络技术驱动：引领未来</h1>
      <p>
        网络技术驱动着我们的数字生活，它不仅改变了我们的工作和生活方式，而且对于经济和社会的发展也有着深远的影响。
      </p>
      <p>
        通过网络技术的不断创新和应用，我们可以实现更高效、更智能、更便捷的生产和服务方式，创造更多的价值和机会。
      </p>
      <p>
        例如，通过云计算、大数据、人工智能等网络技术的应用，可以提高生产和服务效率，降低成本，优化商业模式和创新产品；
      </p>
      <p>
        通过网络技术的支持，可以实现教育、医疗、金融、交通等领域的数字化和智能化，为人们提供更好的生活和服务体验。
      </p>
    </section>
    <section class="part_content">
      <h1>一站式需求解决</h1>
      <p>
        大小象科技依托集团公司雄厚的基础设施和行业实力，整合引入一批行业内实施经验丰富的技术人才和业务专家，
      </p>
      <p>
        凭借行业经验和全方位的专业技能，坚持以客户服务为中心，帮助客户构建先进的IT系统快速增强核心竞争力。
      </p>
      <p>
        业务范围涵盖咨询、产品研发、信息技术服务、系统集成、业务流程外包等方面，涉及银行、证券、基金、保险、移动、政府等多个行业。
      </p>

      <Image
        src="/images/one_stop_solution.jpg"
        class="content_image"
        width="800px"
      />
    </section>
    <section class="part_content solution">
      <h1>成功的解决方案</h1>
      <SolutionTab />
    </section>
    <section class="logan part_content">
      <Image src="/images/parallax_home.jpg" class="logan_image" />
      <p>我们将继续致力于用移动互联网技术感知未来...</p>
    </section>
    <section class="part_content partner">
      <h1>客户及合作伙伴</h1>
    </section>
  </div>
</template>
<script setup lang="ts">
import Header from "~~/components/Header.vue";
import Image from "~~/components/Image.vue";
import SolutionTab from "~~/components/Solution.vue";
import { ElCarousel, ElCarouselItem, ElAffix } from "element-plus";
const carouselHeight = ref(
  process.client ? window.innerHeight + "px" : "400px"
);
process.client &&
  (window.onresize = function () {
    carouselHeight.value = window.innerHeight + "px";
  });
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  position: relative;
  .home_header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  .el-carousel__item {
    height: 100%;
    //q: 让 title_wrapper 居中偏左展示
    .title_wrapper {
      position: absolute;
      margin: 0 auto;
      top: 50%;
      left: 50%;
      transform: translate(-100%, -50%);
      width: 45%;
      text-align: left;
      color: #fff;
      h2 {
        font-size: 60px;
        margin-bottom: 14px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 14px;
      }
    }
  }
  section.part_content {
    padding: 120px 0;
    text-align: center;
    font-size: 16px;
    h1 {
      margin-top: 0;
      font-size: 36px;
      color: #34495e;
    }
    p {
      margin-top: 0;
      color: #848e97;
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 14px;
    }
  }
  .part_content.main {
    padding: 150px 0;
    h1 {
      font-size: 48px;
      margin-bottom: 54px;
    }
  }
  .logan.part_content {
    position: relative;
    padding: 0;
    height: 320px;
    p {
      position: absolute;
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 36px;
      color: #fff;
    }
  }
  > section:nth-of-type(even) {
    padding-top: 60px;
    background-color: #f2f5f8;
  }
  .content_image {
    aspect-ratio: auto 800 / 220;
    margin-bottom: 20px;
    border-radius: 10px;
    :deep(.image-slot) {
      background-color: #fff;
    }
  }
}
</style>
