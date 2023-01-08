<template>
  <Menu v-model:selectedKeys="activeMenuKeys" theme="dark" mode="inline">
    <Menu.Item key="1">
      <RouterLink to="/">
        <UserOutlined />
        <span> Home </span>
      </RouterLink>
    </Menu.Item>
    <Menu.Item key="2">
      <RouterLink to="/about">
        <UserOutlined />
        <span> About </span>
      </RouterLink>
    </Menu.Item>
  </Menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Menu } from "ant-design-vue";
import { UserOutlined } from "@ant-design/icons-vue";

const activeMenuKeys = ref<string[]>(["1"]);
</script>
