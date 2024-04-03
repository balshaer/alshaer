import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to={"/"}>
        <div className="flex items-center justify-start gap-2 cursor-pointer  Logo">
          <span className=" text-2xl font-bold hovered text-[var(--link-color)] cursor-pointer ">
            .b
          </span>
        </div>
      </Link>
    </div>
  );
}
