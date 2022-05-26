import "styled-components";

declare module "styled-components";

export interface IDefautTheme {
  title: string;

  color: {
    primary: string;
    secundary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    sucess: string;
    info: string;
    warning: string;
  };
}
