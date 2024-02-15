import { createGlobalStyle } from "styled-components";

const LightMode = createGlobalStyle`
:root {
  /* Primary Colors */
  --background: #f5f7fa;
  --navbar-background: #ffffff;
  --footer-background: #f5f7fa;
  --banner-background: #f5f7fa;

  /* Text Colors */
  --navbar-button-text: #ffffff;
  --secondary-button-text: #ffffff;
  --third-button-text: #ffffff;
  --button-text: #ffffff;
  --navbar-item-text: #52606d;
  --headline: #000000;
  --paragraph: #52606d;
  --footer-items: #9aa5b1;
  --footer-links: #52606d;

  /* Button Colors */
  --navbar-button-background: #1f2933;
  --button-background: #8247ff;
  --banner-button-background: #8247ff;
  --secondary-button-background: #1f2933;
  --third-button-background: #1f2933;

  /* Secondary Colors */
  --secondary-background: #1f2933;
  --secondary-headline: #ffffff;
  --secondary-paragraph: #d5d7d9;

  /* Tertiary Colors */
  --third-background: #dfc9c0;
  --third-headline: #0d0d0c;
  --third-paragraph: #0d0d0c;
}

`;

export default LightMode;
