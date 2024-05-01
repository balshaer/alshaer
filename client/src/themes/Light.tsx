import { createGlobalStyle } from "styled-components";

const LightMode = createGlobalStyle`
  :root {
    --background: #f9f9f9;
    --headline: #000000;
    --paragraph: #333333;
    --border: #000000;
    --button: transparent;
    --scroll: #000;
    --button-border: #000000;
    --button-hover: #000000;
    --button-text: #000000;
    --button-text-hover: #fff;
    --card-background: #edf0f1;
    --link-color: #000000;
    --logo-text-color: #000000;
    --input-background:#e6e5e7;
    --input-border-color: #000;
    --badge-color: #000000;
    --badge-text:#eee;
    --skeleton-color: #353f4e;
    --tertiary-color: #000000;
    --footer-border-color: #000000;
    --footer-background : #161818;
    --footer-text: #c1c2c2;
    --menu-color:#000;
  }
`;

export default LightMode;
