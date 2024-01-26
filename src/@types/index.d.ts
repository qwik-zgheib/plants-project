export interface IItems {
  name: string;
  text?: string;
  icon: JSX.Element;
  path?: string;
  fnHandle?: () => void;
}
