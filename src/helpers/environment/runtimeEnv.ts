import { environmentCommandsConfiguration, environments, OptEnvironmentKey } from "./constants";

export function isEnvironment(env: OptEnvironmentKey): boolean {
  // @ts-ignore
  return environmentCommandsConfiguration[env].commands.includes(environments.NODE_ENV as string);
}

export const isDevelopment = isEnvironment("development");
export const isProduction = isEnvironment("production");
export const isTest = isEnvironment("test");

export function getEnvironmentWithDefault(key: string, defaultValue: string): string {
  return getEnvironment(key) || defaultValue;
}

export function getEnvironment(key: string): string {
  return environments[key];
}

export function getEnvironmentOrThrow(key: string): string {
  const value = getEnvironment(key);

  if (!value) {
    throw new Error(`Environment variable ${key} is not defined`);
  }

  return value;
}
