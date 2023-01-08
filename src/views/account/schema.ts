export const loginFormRules = {
  username: [
    {
      required: true,
      message: "Please input your username!",
      trigger: "change",
    },
    {
      min: 3,
      max: 16,
      message: "Length should be 3 to 16",
      trigger: "change",
    },
  ],
  password: [
    {
      required: true,
      message: "Please input your password!",
      trigger: "change",
    },
    {
      min: 6,
      max: 20,
      message: "Length should be 6 to 20",
      trigger: "change",
    },
  ],
} as const;
