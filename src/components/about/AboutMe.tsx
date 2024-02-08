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
          "I am a self-driven, career-oriented software developer specializing in front-end development and open-source, My expertise lies in building interactive web applications on the client side. Primarily working with technologies like JavaScript, Reac.js, and TypeScript"
        }
      />

      <DescriptionOfSection description="I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible, unfavorable or not." />
    </section>
  );
}
