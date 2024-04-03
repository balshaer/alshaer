import { createGlobalStyle } from "styled-components";

const LightMode = createGlobalStyle`
  :root {
    --background: #fffffe;
    --headline: #2b2c34;
    --paragraph: #2b2c34;
    --button: #6246ea;
    --button-hover: #6246ea;
    --button-text: #fffffe;
    --card-background: #d1d1e9;
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


  }
`;

export default LightMode;
