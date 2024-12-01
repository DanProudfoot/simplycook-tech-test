import { globalCss } from "@pigment-css/react";

// Global reset taken from https://www.joshwcomeau.com/css/custom-css-reset/

globalCss`
  --colour-text-strong: #000000;
  --colour-text-detail: #414042;

  --font-size-body-s: 0.875rem; // 14px
  --font-size-detail: 0.8125rem; // 13px

  --font-weight-bold: 700;
  --font-weight-regular: 500;

  --line-height-body-s: 24px;
  --line-height-detail: 18px;

  --letter-spacing-body-s: 0%;
  --letter-spacing-detail: -2%;
`;
