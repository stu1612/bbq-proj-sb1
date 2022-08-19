// files
import data from "../data/homeStories.json";
import Hero from "../components/Hero";
import img from "../assets/images/home_banner.jpg";
import icon from "../assets/images/bull.png";
import StoryContainer from "../components/StoryContainer";

export default function Home() {
  // components
  const IntroCards = data.map((story) => (
    <StoryContainer key={story.id} story={story} />
  ));
  return (
    <main>
      <Hero
        img={img}
        alt="Pork steaks cooking on open BBQ"
        icon={icon}
        title="Holy BBQ"
      />
      <section>{IntroCards}</section>
    </main>
  );
}
