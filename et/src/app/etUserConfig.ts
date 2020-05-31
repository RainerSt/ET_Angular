export interface ETUserConfig {
  id: number;
  user: string;
  name: string;
  checkEmptyAction: boolean;
  conditionYes: string;
  conditionNo:  string;
  actionDo:     string;
  actionIgnore: string;
}
