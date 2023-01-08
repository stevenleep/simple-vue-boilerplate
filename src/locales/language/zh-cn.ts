import { composeLocaleMessage } from "@/locales/helper";

const zhCNLocaleModule = import.meta.globEager<Record<string, string>>("./zh-cn/**/*.ts");

export default composeLocaleMessage("zh-cn", zhCNLocaleModule);
