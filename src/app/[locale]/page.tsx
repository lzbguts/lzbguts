import { Banner } from "./Banner";
import { History } from "./History";
import { getInstitutions, getProjects } from "@/actions";
import { InstitutionWithProps } from "@/types/Institution";
import dynamic from "next/dynamic";
import { Projects } from "./Projects";

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

  const companies = companiesRaw.sort((a, b) => new Date(b.History[0].initialDate || "").getTime() - new Date(a.History[0].initialDate || "").getTime())
  const schools = schoolsRaw.sort((a, b) => new Date(b.History[0].initialDate || "").getTime() - new Date(a.History[0].initialDate || "").getTime())

  return (
    <div className="flex flex-col space-y-24">
      <Banner />
      <History companies={companies} schools={schools} />
      <Projects projects={projects} />
    </div>
  );
}
