<template>
  <div class="contact_wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: localePath('/') }">
        {{ $t("breadcrumb.home") }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t("breadcrumb.contact") }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <section class="company">
        <p>{{ $t("contact.qingdao.name") }}</p>
        <p>{{ $t("contact.qingdao.phone") }}</p>
        <p>{{ $t("contact.qingdao.email") }}</p>
      </section>

      <section class="company">
        <p>{{ $t("contact.hangzhou.name") }}</p>
        <p>{{ $t("contact.hangzhou.phone") }}</p>
        <p>{{ $t("contact.hangzhou.email") }}</p>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
const localePath = useLocalePath();
</script>
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
