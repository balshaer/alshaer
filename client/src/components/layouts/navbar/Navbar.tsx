import Logo from "../../ui/Logo";
import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
  return (
    <div className="container">
      <div className={"main-navbar"}>
        <Logo />

        <div className="flex flex-row-reverse items-center justify-center gap-2">
          <NavbarMenu />
        </div>
      </div>
    </div>
  );
}
