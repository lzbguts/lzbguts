import { Link, Project, Technology } from "@prisma/client";
import { LinkWithProps } from "./Link";

export interface ProjectWithProps extends Project {
  Link: LinkWithProps[]
  Technology: Technology[]
}