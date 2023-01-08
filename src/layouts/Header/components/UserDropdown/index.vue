<template>
  <Dropdown trigger="hover" placement="bottomRight" @click.prevent>
    <div class="user-profile-container">
      <span>Nickname</span>
      <div class="avatar"></div>
    </div>

    <template #overlay>
      <Menu @click="handleClick">
        <Menu.Item v-for="profileMenuItem in profileMenus" :key="profileMenuItem.key">
          <span>{{ profileMenuItem.title }}</span>
        </Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
import { Dropdown, Menu } from "ant-design-vue";
import { MenuInfo } from "ant-design-vue/lib/menu/src/interface";
import { profileMenus, executeProfileMenuAction, ProfileMenu } from "./profileMenu";
import { useRouter } from "vue-router";
import { Paths } from "@/configs";

const router = useRouter();

const handleClick = (event: MenuInfo) => {
  const dispatchResult = executeProfileMenuAction(event.key as ProfileMenu);
  if (dispatchResult) {
    dispatchResult.then(() => {
      if (event.key === ProfileMenu.Logout) {
        router.replace({ path: Paths.Login });
      }
    });
  }
};
</script>

<style lang="less" scoped>
.user-profile-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  .avatar {
    width: 28px;
    height: 28px;
    background: rgb(62, 62, 62);
    border-radius: 50%;
    margin-left: 10px;
  }
}
</style>
