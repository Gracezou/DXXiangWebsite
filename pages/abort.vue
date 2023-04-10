<template>
  <div class="abort_wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>关于我们</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <el-divider />
      <section class="part_content">
        <h1>互联网信息服务科技公司</h1>
        <Image
          src="/images/internet_company.jpg"
          class="company_image"
          width="960px"
        />
        <p>大小象科技公司是一家专注于信息技术领域的公司。</p>
        <p>
          主要致力于网站和应用程序开发、大数据爬虫分析和逆向工程等领域的研发与应用。
        </p>
      </section>
      <section class="part_content">
        <h1>技术领先 服务至上</h1>
        <Image
          src="/images/technology_first.jpg"
          class="tech_image"
          width="800px"
        />
        <p>
          我们一直秉承“技术领先、服务至上”的经营理念，不断推进技术创新和进步。
        </p>
        <p>
          可以为客户提供最优质的服务和产品，帮助客户实现业务数字化和智能化，提高客户的核心竞争力。
        </p>
        <p>
          我们的网站和应用程序开发业务涵盖了多个行业，包括电商、金融、医疗等，
        </p>
        <p>
          为客户提供定制化从需求分析到设计开发的一站式服务，为客户实现业务数字化和智能化，提高业务效率和用户体验。
        </p>
      </section>
      <section class="part_content">
        <h1>高效的专业团队</h1>
        <Image src="/images/team.jpg" class="tech_image" width="800px" />
        <p>
          我们拥有一支优秀的技术团队，包括资深的程序员、工程师和数据研究员。
        </p>
        <p>
          拥有扎实的技术功底和丰富的项目实践经验,我们坚持以客户为中心，不断创新和进取，致力于为客户提供最优质的产品和服务。
        </p>
        <p>
          在未来，我们将继续发扬团队的优秀传统，积极探索信息技术的应用和发展，为客户和社会做出更大的贡献。
        </p>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import Image from "~~/components/Image.vue";
</script>
<style lang="scss">
.abort_wrapper {
  .content {
    height: 100%;
    > section:nth-of-type(even) {
      background-color: #f2f5f8;
    }
  }
  .part_content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 0;

    h1 {
      margin: 0;
      padding-top: 60px;
      padding-bottom: 50px;
      font-size: 48px;
      font-weight: 300;
    }
  }
  .company_image {
    width: 960px;
    aspect-ratio: auto 960 / 400;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .tech_image {
    width: 800px;
    aspect-ratio: auto 800 / 220;
    margin-bottom: 20px;
    border-radius: 10px;
  }
  .team_image_box {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>
