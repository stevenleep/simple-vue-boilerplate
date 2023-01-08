<template>
  <section class="header-tools-container">
    <LanguagePicker />
    <UserDropdown />
  </section>
</template>

<script setup lang="ts">
import { UserDropdown, LanguagePicker } from "./components";
</script>

<style lang="less" scoped>
.header-tools-container {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
