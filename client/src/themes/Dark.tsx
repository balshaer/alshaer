import { createGlobalStyle } from "styled-components";

const DarkMode = createGlobalStyle`
  :root {
    --background: #16161a;
    --headline: #fffffe;
    --paragraph: #94a1b2;
    --button: #7f5af0;
    --button-hover: #7f5af0;
    --button-text: #fffffe;
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

  }
`;

export default DarkMode;
