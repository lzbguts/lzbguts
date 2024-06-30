import { Icon, Link, Project } from "@prisma/client";

export interface LinkWithProps extends Link {
  Icon: Icon | null
}