<template>
  <Layout.Content class="layout-content">
    <RouterView />
  </Layout.Content>
</template>

<script lang="ts" setup>
import { Layout } from "ant-design-vue";
</script>

<style scoped lang="less">
.layout-content {
  margin: 16px;
  overflow: auto;
  max-height: calc(100vh - 16px - 16px - 64px);
}
</style>
