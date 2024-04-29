import Logo from "../logo/Logo";
import PageMode from "../pageMode/PageMode";

export default function Navbar() {
  return (
    <div className="Navbar max-w-3xl m-auto py-[20px]  flex px-10 flex-row justify-between items-center w-full  max-md:fixed max-md:top-0 max-md:right-0 max-md:left-0 max-md:m-auto max-md:px-8 max-md:z-50  max-md:backdrop-blur-2xl max-md:border-b-[1px] max-md:border-[#000] ">
      <Logo />
      <div className="flex flex-row-reverse gap-2 items-center justify-center">
        <PageMode />
      </div>
    </div>
  );
}
