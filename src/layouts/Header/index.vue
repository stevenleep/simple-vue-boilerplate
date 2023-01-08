<template>
  <Layout.Header class="layout-header">
    <section class="layout-navbar">
      <MenuFoldOutlined
        v-if="!siderTriggerStore.collapsed"
        class="trigger"
        @click="siderTriggerStore.open"
      />
      <MenuUnfoldOutlined v-else class="trigger" @click="siderTriggerStore.close" />
      <Breadcrumb />
    </section>
    <HeaderRightTools />
  </Layout.Header>
</template>

<script setup lang="ts">
import { Layout } from "ant-design-vue";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";
import { useSiderTriggerStore } from "@/store/sider";
import { Breadcrumb } from "./components";
import HeaderRightTools from "./HeaderRightTools.vue";

const siderTriggerStore = useSiderTriggerStore();
</script>

<style lang="less" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 64px;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .layout-navbar {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .trigger {
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1da57a;
  }
}
</style>
