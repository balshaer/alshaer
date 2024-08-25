import { animateScroll as scroll } from "react-scroll";

export const scrollToTop = () => {
  scroll.scrollToTop({ duration: 500, smooth: true });
};
