import { createGlobalStyle } from "styled-components";

const DarkMode = createGlobalStyle`
  :root {
    --background: #16161a;
    --headline: #fffffe;
    --paragraph: #94a1b2;
    --border: #000000;
    --button: #7f5af0;
    --scroll: #7f5af0;
    --button-border: #7f5af0;
    --button-hover: #5b36cc;
    --button-text: #fffffe;
    --button-text-hover: #fffffe;
    --card-background: #242629;
    --link-color: #7f5af0;
    --nav-item: #94a1b2;
    --logo-background: #fffffe;
    --logo-text-color: #fff;
    --gradient-color-1: #7f5af0;
    --gradient-color-2: #af5af0;
    --input-background:#242629;
    --input-border-color: #010101;
    --badge-color: #7f5af0;
    --badge-text:#fffffe;
    --skeleton-color: #353f4e;
    --tertiary-color: #7f5af0;
    --footer-border-color: #ffffff25;
    --footer-text :#94a1b2;
    --menu-color:#94a1b2;
  }
`;

export default DarkMode;
