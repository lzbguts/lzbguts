import { getInstitutions, getProjects } from "@/lib/actions";
import { InstitutionWithProps } from "@/types/Institution";
import { Banner } from "@/components/Banner";
import { History } from "@/components/History";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default async function Home() {
  const institutions = await getInstitutions() || [];
  const projects = await getProjects() || [];

  const [companies, schools] = institutions?.reduce((acc, institution) => {
    if (institution.type === "Company") {
      acc[0].push(institution)
    } else {
      acc[1].push(institution)
    }
    return acc
  }, [[], []] as [InstitutionWithProps[], InstitutionWithProps[]])

  return (
    <div className="flex flex-col space-y-24">
      <Banner />
      <History companies={companies} schools={schools} />
      <Projects projects={projects} />
      <Skills />
      <Contact />
    </div>
  );
}
