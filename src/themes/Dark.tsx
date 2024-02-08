import { createGlobalStyle } from "styled-components";

const DarkMode = createGlobalStyle`
  :root {
    --background: #171923;
    --headline: #F7F9FC;
    --paragraph: #a0aec0;
    --button: #166BFF;
    --button-hover: #2d7aff;
    --button-text: #ffffff;
    --card-background: #171923;
    --link-color: #2997ff;
    --nav-item: #a0aec0;
    --logo-background: #F7F9FC;
    --logo-text-color: #F7F9FC;
    --gradient-color-1: #00d2ff;
    --gradient-color-2: #3a7bd5;
    --input-background:#1f2631;
    --input-border-color: #2D3748;
    --badge-color: #1f2631;


  }
`;

export default DarkMode;
