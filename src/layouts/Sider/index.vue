<template>
  <Layout.Sider
    v-model:collapsed="siderTriggerStore.collapsed"
    class="sider"
    :trigger="null"
    collapsible
  >
    <div class="logo" @click="handleClickLogo" />
    <SiderMenu />
  </Layout.Sider>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { Layout } from "ant-design-vue";
import { Paths } from "@/configs";
import { useSiderTriggerStore } from "@/store/sider";
import SiderMenu from "./Menu.vue";

const siderTriggerStore = useSiderTriggerStore();
const router = useRouter();

const handleClickLogo = () => {
  router.push(Paths.Root);
};
</script>

<style lang="less" scoped>
.sider {
  overflow: auto;
  height: 100vh;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  cursor: pointer;
}
</style>
