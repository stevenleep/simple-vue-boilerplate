<template>
  <div class="home">
    <h1>{{ $t("home") }}</h1>

    <section class="card">
      <code>
        <pre>{{ todo }}</pre>
      </code>
    </section>

    <Button ref="startTaskRef" :loading="isLoading" type="primary" @click="randomATask">
      {{ isLoading ? "Loading ..." : "Start a task" }}
    </Button>

    <hr />
    <Button type="primary" @click="handleClick"> {{ $t("home.test.btn") }} </Button>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from "vue";
import { Button } from "ant-design-vue";
import services from "@/services";
import { TodoModel } from "@services/Model/TodoModel";
import { setLanguage } from "@/locales";

const startTaskRef = ref<HTMLButtonElement | null>(null);
const isLoading = ref<boolean>(false);
let todo = reactive<{ value: TodoModel }>({ value: {} as TodoModel });

onMounted(async () => {
  randomATask();
});

function randomATask() {
  isLoading.value = true;

  // 1 - 20 随机
  const random = Math.floor(Math.random() * 20 + 1);
  services.todoService
    .getTodoDetail(random)
    .then((res) => {
      todo.value = res.data;
    })
    .finally(() => {
      isLoading.value = false;
    });
}

function handleClick() {
  setLanguage();
}
</script>

<style scoped lang="less">
.card {
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  font-size: 12px;
}
</style>
