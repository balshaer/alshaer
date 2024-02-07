import { createGlobalStyle } from "styled-components";

const LightMode = createGlobalStyle`
  :root {
    --background: #ffffff;
    --headline: #2D3748;
    --paragraph: #5F718C;
    --button: #166BFF;
    --button-hover: #2d7aff;
    --button-text: #ffffff;
    --card-background: #ffffff;
    --link-color: #166BFF; /* Corrected missing # */
    --nav-item: #47546b;
    --logo-background: #166BFF;
    --logo-text-color: #166BFF;
    --gradient-color-1: #00d2ff;
    --gradient-color-2: #3a7bd5;
  }
`;

export default LightMode;
