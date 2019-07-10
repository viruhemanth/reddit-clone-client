import { css } from 'styled-components';

const size = {
  large: 1140,
  med: 900,
  small: 400,
};

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
