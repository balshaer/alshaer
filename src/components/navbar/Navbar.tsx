import Logo from "../logo/Logo";
import PageMode from "../pageMode/PageMode";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <div className="Navbar py-[20px] flex flex-row justify-between items-center w-full  max-md:fixed max-md:top-0 max-md:right-0 max-md:left-0 max-md:m-auto max-md:px-8 max-md:z-50  max-md:backdrop-blur-2xl max-md:border-b-[1px] max-md:border-b-[#ffffff20] ">
      <Logo />

      <div className="flex flex-row-reverse gap-2 items-center justify-center">
        <PageMode />

        <div className="max-md:hidden">
          <NavbarLinks />
        </div>
      </div>
    </div>
  );
}
