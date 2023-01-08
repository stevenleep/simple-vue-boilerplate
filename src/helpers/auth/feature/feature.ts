// @ts-ignore
class FeatureAuthentication {
  constructor(private readonly role: string) {}

  public async authenticate() {}
}

export function createComponentFeatureAuthentication(role: string): FeatureAuthentication {
  return new FeatureAuthentication(role);
}
