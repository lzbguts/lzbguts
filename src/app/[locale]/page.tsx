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

  const [companiesRaw, schoolsRaw] = institutions?.reduce((acc, institution) => {
    if (institution.type === "Company") {
      acc[0].push({
        ...institution,
        History: institution.History.sort((a, b) => new Date(b.initialDate || "").getTime() - new Date(a.initialDate || "").getTime())
      })
    } else {
      acc[1].push({
        ...institution,
        History: institution.History.sort((a, b) => new Date(b.initialDate || "").getTime() - new Date(a.initialDate || "").getTime())
      })
    }
    return acc
  }, [[], []] as [InstitutionWithProps[], InstitutionWithProps[]])

  const companies = companiesRaw.sort((a, b) => new Date(b.History[0]?.initialDate || "").getTime() - new Date(a.History[0]?.initialDate || "").getTime())
  const schools = schoolsRaw.sort((a, b) => new Date(b.History[0]?.initialDate || "").getTime() - new Date(a.History[0]?.initialDate || "").getTime())

  const projectsByDate = projects.sort((a, b) => new Date(b.initialDate || "").getTime() - new Date(a.initialDate || "").getTime())

  return (
    <div className="flex flex-col space-y-24">
      <Banner />
      <History companies={companies} schools={schools} />
      <Projects projects={projectsByDate} />
      <Skills />
      <Contact />
    </div>
  );
}
