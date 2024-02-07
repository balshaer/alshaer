import Logo from "../logo/Logo";
import PageMode from "../pageMode/PageMode";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <div className="Navbar py-[20px] flex flex-row justify-between items-center w-full">
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
