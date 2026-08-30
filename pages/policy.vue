<template>
  <div class="policy_wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: localePath('/') }">
        {{ $t("breadcrumb.home") }}
      </el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t("breadcrumb.policy") }}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <p>{{ $t("policy.p1") }}</p>
      <p>{{ $t("policy.p2") }}</p>
      <p>{{ $t("policy.p3") }}</p>
      <p>{{ $t("policy.p4") }}</p>
      <p>{{ $t("policy.p5") }}</p>
      <p>{{ $t("policy.disclaimerTitle") }}</p>
      <p>{{ $t("policy.disclaimer") }}</p>
      <p>{{ $t("policy.lawTitle") }}</p>
      <p>{{ $t("policy.law") }}</p>
      <p>{{ $t("policy.updateTitle") }}</p>
      <p>{{ $t("policy.update") }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
const localePath = useLocalePath();
</script>
<style lang="scss" scoped>
.policy_wrapper {
  p {
    font-size: 16px;
    line-height: 26px;
    color: #848e97;
    word-wrap: normal;
  }
  .content {
    padding: 20px 50px 60px;
    background-color: #f2f5f8;
  }
}
</style>
