<template>
  <div class="solution_wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>解决方案</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <el-divider />
      <section class="part_content">
        <h1>技术解决方案提供商</h1>
        <p>
          我们提供一批具备丰富实施经验的技术人才和业务专家，他们在各自的领域内拥有深厚的专业知识和技能。
        </p>
        <p>
          在我们的帮助下，客户可以构建先进的IT系统，快速提升核心竞争力，从而在市场竞争中脱颖而出。
        </p>
        <p>
          我们致力于建立长期的合作关系，与客户共同发展、共同成长。无论客户面临何种挑战，我们都将竭尽全力为其提供专业的支持和解决方案。
        </p>
        <Image
          src="/images/technolog_solution_provider.jpg"
          class="solution_image"
          width="800px"
        />
      </section>

      <section class="part_content">
        <h1>应用程序与网页 无缝助力</h1>
        <p>
          应用程序与网页的无缝连接已经成为了现代信息技术领域中的一个重要趋势，为企业和品牌带来更多的商业机会。
        </p>
        <p>
          在App中使用网页的支付功能，用户无需退出应用程序，即可方便地完成支付操作，这样可以节省用户的时间和精力，提高用户的满意度。
        </p>
        <p>
          而企业和品牌也可以通过将应用程序与网页相互连接，更好地进行市场营销和推广，增加用户的转化率和忠诚度。
        </p>
        <Image
          src="/images/solution_web_app.jpg"
          class="solution_image"
          width="800px"
        />
      </section>

      <section class="part_content">
        <h1>网络数据猎手</h1>
        <p>
          网络逆向工程是通过分析和研究软件和系统的行为，来理解其内部机制的技术,可以用于研究恶意软件、逆向工程软件、加密算法破解等领域。
        </p>
        <p>
          爬虫技术可以自动化地从网页中提取数据，并进行处理和分析，可以用于网络数据挖掘、搜索引擎优化、竞争情报收集等领域。
        </p>
        <p>
          而大数据处理则是指处理海量、复杂、异构数据的技术，可以用于数据分析、数据挖掘、机器学习等领域
        </p>
        <Image class="solution_image" width="800px" />
      </section>
      <el-divider />
      <SolutionTab />
    </div>
  </div>
</template>
<script setup lang="ts">
import Image from "~~/components/Image.vue";
import SolutionTab from "~~/components/Solution.vue";
</script>
<style lang="scss" scoped>
.solution_wrapper {
  .content {
    height: 100%;
    padding-bottom: 120px;
    > section:nth-of-type(even) {
      background-color: #f2f5f8;
    }
  }

  .solution_image {
    aspect-ratio: auto 800 / 220;
    margin-top: 60px;
    border-radius: 10px;
  }
  .part_content {
    padding: 50px 50px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #848e97;
    font-size: 16px;
    line-height: 26px;
    h1 {
      color: #34495e;
      font-size: 48px;
      font-weight: 600;
      margin-bottom: 60px;
    }
    p {
      margin-top: 0;
    }
  }
}
</style>
