import { History, Institution, Link } from "@prisma/client";

export interface InstitutionWithProps extends Institution {
  History: History[]
  Link: Link
}