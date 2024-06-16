"use server"

import { prisma } from "./utils/prisma"

export async function getInstitutions() {
  try {
    const institutions = await prisma.institution.findMany({
      include: {
        History: true,
        Link: true
      }
    })
    return institutions
  } catch (error) {
    console.error(error)
  }
}

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        Link: true
      }
    })
    return projects
  } catch (error) {
    console.error(error)
  }
}