import TitleOfSection from "../custom/TitleOfSection";

export default function Contact() {
  return (
    <section className="my-8">
      <TitleOfSection title={"Find me on :"} />

      <ul className="text-[var(--paragraph)] max-md:flex-col items-start  hovered flex gap-4">
        <li>
          <a
            className="flex flex-row-reverse items-center  opacity-60 hover:opacity-100 hovered gap-2 w-full"
            target="_blank"
            href="https://www.linkedin.com/in/balshaer/"
          >
            <span>Linkedin</span>

            <span>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="linkedin"
              />
            </span>
          </a>
        </li>

        <li>
          <a
            className="flex flex-row-reverse items-center  opacity-60 hover:opacity-100 hovered gap-2 w-full"
            target="_blank"
            href="https://github.com/balshaer"
          >
            <span>Github</span>

            <span>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/officel/16/github.png"
                alt="github"
              />
            </span>
          </a>
        </li>

        <li>
          <a
            className="flex flex-row-reverse items-center  opacity-60 hover:opacity-100 hovered gap-2 w-full"
            target="_blank"
            href="https://wa.me/970593493899"
          >
            <span>Whatsapp</span>

            <span>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/whatsapp.png"
                alt="whatsapp"
              />
            </span>
          </a>
        </li>

        <li>
          <a
            className="flex flex-row-reverse items-center  opacity-60 hover:opacity-100 hovered gap-2 w-full"
            target="_blank"
            href="https://dev.to/baraa"
          >
            <span>Dev.to</span>

            <span>
              <img
                width="20"
                height="20"
                src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
                alt="dev.to"
              />
            </span>
          </a>
        </li>

        <li>
          <a
            className="flex flex-row-reverse items-center  opacity-60 hover:opacity-100 hovered gap-2 w-full"
            target="_blank"
            href="https://www.youtube.com/@Codewithbaraa"
          >
            <span>Youtube</span>

            <span>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/youtube-play.png"
                alt="youtube-play"
              />
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
