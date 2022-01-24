import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import ProjectChoices from "@components/ProjectChoices";
import Blog from "@components/blog/Blog"

export default function Home() {
  return (
    <ContainerBlock
      title="Laroybafi Ahmad"
    >
      <Hero />
      <Blog />
      <ProjectChoices />
    </ContainerBlock>
  );
}