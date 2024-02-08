import DescriptionOfSection from "../custom/DescriptionOfSection";
import TitleOfSection from "../custom/TitleOfSection";

export default function AboutMe() {
  return (
    <section className="my-8">
      <TitleOfSection
        title={"I'm Baraa Alshaer I live in Gaza, where I build the future. "}
      />

      <DescriptionOfSection
        description={
          "I am a self-driven, career-oriented software developer specializing in front-end development and open-source. My expertise lies in building interactive web applications on the client side, primarily working with technologies like JavaScript, React.js, and TypeScript."
        }
      />
      <br />

      <DescriptionOfSection description="I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not." />
      <br />

      <p className="text-[var(--paragraph)] text-lg max-md:text-sm max-md:w-full max-w-[50%] max-md:max-w-none">
        Beyond learning, I enjoy writing technical articles and creating
        projects that both inspire and benefit fellow developers. You can find
        my recent posts on
        <a
          className=" text-[var(--link-color)] hover:underline ps-2"
          href="https://freecodecamp.org/news/author/victoreke/"
          rel="noreferrer noopener"
          target="_blank"
        >
          dev.to
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            className="inline"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
            <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
          </svg>
        </a>
      </p>
    </section>
  );
}
