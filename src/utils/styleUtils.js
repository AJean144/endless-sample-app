import { css } from "styled-components";
import Color from "color";
import theme from "../config/theme";

export const breakpoints = Object.keys(theme.breakpoints).reduce(
  (accumulator, label) => {
    Object.assign(accumulator, {
      [label]: (...args) => css`
        @media (min-width: ${theme.breakpoints[label]}) {
          ${css(...args)};
        }
      `,
    });

    return accumulator;
  },
  {}
);

export const darken = (color, percentage) =>
  Color(color).darken(percentage).hsl().string();
