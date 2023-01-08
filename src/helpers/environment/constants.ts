export const environments = import.meta.env;

export const environmentCommandsConfiguration = {
  development: {
    commands: ["development", "dev", "local", "offline", "localdev"],
  },
  production: {
    commands: ["production", "prod", "live", "server", "online", "release"],
  },
  test: {
    commands: ["test", "testing", "qa", "qualityassurance", "draft", "staging"],
  },
} as const;

export type OptEnvironmentKey = keyof typeof environmentCommandsConfiguration;
