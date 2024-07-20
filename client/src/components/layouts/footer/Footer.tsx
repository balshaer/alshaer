import CopyRight from "./CopyRight";
import FooterItems from "./FooterItems";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--footer-background)]  border-t-[0.5px] border-[var(--footer-border-color)]  ">
      <div className="max-w-3xl container  max-md:gap-4 flex justify-between items-center py-10 max-md:flex-col ">
        <div>
          <FooterItems />
        </div>
        <div>
          <CopyRight />
        </div>
      </div>
    </footer>
  );
}
