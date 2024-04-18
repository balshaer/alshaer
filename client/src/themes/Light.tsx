import { createGlobalStyle } from "styled-components";

const LightMode = createGlobalStyle`
  :root {
    --background: #fffffe;
    --headline: #0d0d0d;
    --paragraph: #2a2a2a;
    --button: #6246ea;
    --button-hover: #6246ea;
    --button-text: #fffffe;
    --card-background: #eff0f3;
    --link-color: #6246ea;
    --nav-item: #2b2c34;
    --logo-background: #2b2c34;
    --logo-text-color: #2b2c34;
    --gradient-color-1: #6246ea;
    --gradient-color-2: #af5af0;
    --input-background:#d1d1e9;
    --input-border-color: #010101;
    --badge-color: #6246ea;
    --badge-text:#fffffe;
    --skeleton-color: #353f4e;
    --tertiary-color: #2ea775;
    --footer-border-color: #b6b6b8;
  }
`;

export default LightMode;
