import { reactive } from "vue";

export enum ProfileMenu {
  Profile = "profile",
  Settings = "settings",
  Logout = "logout",
}
export type ProfilesMenuKey = ProfileMenu | keyof typeof ProfileMenu;
export const profileMenus = reactive([
  {
    title: "Profile",
    key: ProfileMenu.Profile,
    onClick: async () => {},
  },
  {
    title: "Settings",
    key: ProfileMenu.Settings,
    onClick: async () => {},
  },
  {
    title: "Logout",
    key: ProfileMenu.Logout,
    onClick: async () => {
      console.log("logout");
      // TODO: logout
    },
  },
]);

export function getProfileMenuRecordRaw(
  key: ProfilesMenuKey,
): (typeof profileMenus)[number] | undefined {
  return profileMenus.find((item) => item.key === key);
}

export function executeProfileMenuAction(key: ProfilesMenuKey, ...args: any[]) {
  const record = getProfileMenuRecordRaw(key);
  if (record && record.onClick) {
    // @ts-ignore
    return record.onClick(...args);
  }
}
