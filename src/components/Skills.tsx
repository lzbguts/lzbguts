import { Badge } from "@/components/ui/badge"

export const Skills = () => {
  const skills: { name: string, cn: string }[] = [
    { name: "HTML", cn: "bg-orange-500" },
    { name: "CSS", cn: "bg-blue-500" },
    { name: "JavaScript", cn: "bg-yellow-500" },
    { name: "TypeScript", cn: "bg-blue-500" },
    { name: "Node.js", cn: "bg-green-500" },
    { name: "Vue.js", cn: "bg-green-300" },
    { name: "React", cn: "bg-blue-500" },
    { name: "PHP", cn: "bg-purple-500" },
    { name: "MySQL", cn: "bg-blue-500" },
    { name: "MongoDB", cn: "bg-blue-500" },
    { name: "Python", cn: "bg-yellow-500" },
    { name: "C", cn: "bg-blue-500" },
    { name: "C++", cn: "bg-purple-300" },
    { name: "Git", cn: "bg-orange-300" },
  ]

  return (
    <div id="skills" className={`flex flex-col space-y-4`}>
      <p className="text-4xl">Skills</p>
      <div className="flex flex-row gap-4 flex-wrap">
        {skills.map((skill) => {
          return (
            <Badge key={skill.name} variant="outline" className={`text-white ${skill.cn}`}>
              {skill.name}
            </Badge>
          )
        })}
      </div>
    </div>
  )
}