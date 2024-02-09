import CopyRight from "./CopyRight";
import FooterItems from "./FooterItems";

export default function Footer() {
  
  return (
    <footer className="w-full max-md:gap-4  border-t-[0.5px] border-t-[#ffffff25]  flex justify-between items-center py-10 max-md:flex-col">
      <div>
        <FooterItems />
      </div>

      <div>
        <CopyRight />
      </div>
    </footer>
  );
}
