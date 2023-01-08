<template>
  <Dropdown trigger="hover" placement="bottomRight" @click.prevent>
    <div class="language-picker-container">
      <span>简体中文</span>
      <DownOutlined />
    </div>
    <template #overlay>
      <Menu @click="handleClick">
        <Menu.Item key="1">中文简体</Menu.Item>
        <Menu.Item key="2">中文繁体</Menu.Item>
        <Menu.Item key="3">English</Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, Menu } from "ant-design-vue";
import { MenuInfo } from "ant-design-vue/lib/menu/src/interface";
import { DownOutlined } from "@ant-design/icons-vue";
const handleClick = (event: MenuInfo) => {
  console.log("click", event);
};
</script>
<style lang="less" scoped>
.language-picker-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-right: 4px;
  }
}
</style>
