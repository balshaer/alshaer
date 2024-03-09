import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to={"/"}>
        <div className="flex items-center justify-start gap-2 cursor-pointer  Logo">
          <span className="text-[var(--paragraph)] hovered hover:text-[var(--link-color)] cursor-pointer font-semibold">
            Baraa
          </span>
        </div>
      </Link>
    </div>
  );
}
