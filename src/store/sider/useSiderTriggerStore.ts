import { defineStore } from "pinia";

export const useSiderTriggerStore = defineStore("siderTrigger", {
  state: () => ({
    collapsed: false,
  }),
  actions: {
    toggle() {
      this.collapsed = !this.collapsed;
    },
    setCollapsed(collapsed: boolean) {
      this.collapsed = collapsed;
    },
    close() {
      this.setCollapsed(false);
    },
    open() {
      this.setCollapsed(true);
    },
  },
});
