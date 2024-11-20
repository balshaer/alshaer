import { createGlobalStyle } from "styled-components";

const DarkMode = createGlobalStyle`
  :root {
    --background: #16161a;
    --headline: #fffffe;
    --paragraph: #94a1b2;
    --border: #719dba7a;
    --button: #7f5af0;
    --scroll: #7f5af0;
    --button-border: #7f5af0;
    --button-hover: #5b36cc;
    --button-text: #fffffe;
    --button-text-hover: #fffffe;
    --card-background: #242629;
    --card-headline : #fffffe;
    --card-paragraph : #94a1b2;
    --link-color: #7f5af0;
    --link-hover:#fff;
    --nav-item: #94a1b2;
    --Logo-background: #fffffe;
    --Logo-text-color: #fff;
    --gradient-color-1: #36264385;
    --gradient-color-2: #5c149385;
    --input-background:#242629;
    --input-border-color: #7575755e;
    --badge-background: #7f5af0;
    --badge-text:#fffffe;
    --skeleton-color: #353f4e;
    --tertiary-color: #7f5af0;
    --footer-border-color: #ffffff25;
    --footer-text :#94a1b2;
    --menu-color:#94a1b2;
    --input-text: #fff;
    --input-border:"#ef4565";
    --selectBox-border : #7f5af0;
    --outline-button-text :#cbbaff;
    --mark: #000;
    --active : #fff;
    --active-text : #000;
    --mobile-nav : #16161aa6;
  }
`;

export default DarkMode;
