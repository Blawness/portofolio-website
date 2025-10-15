import { getProjects, getFeaturedProjects } from "@/lib/sanity";
import { PortfolioHome } from "@/components/portfolio-home";

export default async function Home() {
  const [featuredProjects, allProjects] = await Promise.all([
    getFeaturedProjects(),
    getProjects()
  ]);

  return (
    <PortfolioHome 
      featuredProjects={featuredProjects}
      allProjects={allProjects}
    />
  );
}
