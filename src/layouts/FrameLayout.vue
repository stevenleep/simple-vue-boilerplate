<template>
  <Layout>
    <AppLayoutSider />
    <Layout>
      <AppLayoutHeader />
      <AppLayoutContent />
    </Layout>
  </Layout>
</template>

<script lang="ts" setup>
import { Layout } from "ant-design-vue";
/**
 * Components
 */
import AppLayoutSider from "./Sider/index.vue";
import AppLayoutHeader from "./Header/index.vue";
import AppLayoutContent from "./Content/index.vue";
</script>
