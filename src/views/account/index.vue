<template>
  <div class="account">
    <h1>This is an account page</h1>

    <Form
      ref="profileRef"
      :model="profile"
      :rules="loginFormRules"
      name="custom-validation"
      @validate="handleValidate"
      @finish="onFinish"
      @finish-failed="onFinishFailed"
    >
      <Form.Item label="username" has-feedback name="username">
        <Input
          id="username"
          v-model:value="profile.username"
          placeholder="Please enter a 3-16 length of username"
          :maxlength="16"
        />
      </Form.Item>
      <Form.Item label="password" has-feedback name="password">
        <Input
          id="password"
          v-model:value="profile.password"
          :maxlength="20"
          placeholder="Please enter a 6-20 length of password"
        />
      </Form.Item>
      <Form.Item>
        <Button :disabled="disabledSubmit" type="primary" html-type="submit"> Submit </Button>
      </Form.Item>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { Button, Form, Input } from "ant-design-vue";
import { loginFormRules } from "@/views/account/schema";

/**
 * Ref or Constants
 */
const profileRef = ref<HTMLFormElement>();

/**
 * Hooks
 */
const router = useRouter();

/**
 * State
 */
const profile = reactive({ username: "", password: "" });
const fieldValidateResult = reactive<{
  username: boolean;
  password: boolean;
}>({
  username: false,
  password: false,
});
const disabledSubmit = computed(() => {
  return !fieldValidateResult.username || !fieldValidateResult.password;
});

/**
 * Methods
 */
// @ts-ignore
const handleValidate = (field, status): void => {
  fieldValidateResult[field as "username" | "password"] = status;
};
const onFinish = (e: Event) => {
  console.log("onFinish", profile, e);

  // Do Something ...

  router.replace({ path: "/" });
};
const onFinishFailed = () => {
  console.log("onFinishFailed", profile);
};
</script>

<style scoped lang="less">
.account {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: antiquewhite;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
