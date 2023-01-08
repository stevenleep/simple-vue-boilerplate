class FeatureModel {}

export class RoleModel {
  public readonly role: string;

  public features: FeatureModel[] = [];

  constructor(role: string) {
    this.role = role;
  }
}
