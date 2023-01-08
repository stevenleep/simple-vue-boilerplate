import { composeLocaleMessage } from "@/locales/helper";

const enUSLocaleModule = import.meta.globEager<Record<string, string>>("./en-us/**/*.ts");

export default composeLocaleMessage("en-us", enUSLocaleModule);
