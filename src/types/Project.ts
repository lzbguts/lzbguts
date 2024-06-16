import { Link, Project } from "@prisma/client";

export interface ProjectWithProps extends Project {
  Link: Link[]
}