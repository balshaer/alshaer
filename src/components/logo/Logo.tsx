import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

const githubUsername = "Balshaer"; 

export default function Logo() {
  const githubAvatarUrl = `https://github.com/${githubUsername}.png`;

  

  return (
    <>
      <Link to={"/"}>
        <div className="logo cursor-pointer text-[var(--headline)]">
          <Avatar>
            <AvatarImage src={githubAvatarUrl} />
            <AvatarFallback>{githubUsername.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </Link>
    </>
  );
}
