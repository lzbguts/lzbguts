import { Link, Project } from "@prisma/client";
import { LinkWithProps } from "./Link";

export interface ProjectWithProps extends Project {
  Link: LinkWithProps[]
}