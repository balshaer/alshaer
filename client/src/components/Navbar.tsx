import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <div className="container ">
      <div className={"main-navbar"}>
        <Logo />
        <div className="flex flex-row-reverse gap-2 items-center justify-center">
          <NavbarMenu />
        </div>
      </div>
    </div>
  );
}
