"use server"

import { prisma } from "@/utils/prisma"
import { createTransport } from "nodemailer"

export async function getSocialMedia() {
  const socialMedia = await prisma.link.findMany({
    where: {
      type: 'SocialMedia'
    },
    include: {
      Icon: true
    }
  })

  return socialMedia
}

export async function getInstitutions() {
  try {
    const institutions = await prisma.institution.findMany({
      include: {
        History: {
          orderBy: {
            initialDate: 'desc'
          }
        },
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
        Link: {
          include: {
            Icon: true
          }
        },
        Technology: true
      },
      orderBy: {
        initialDate: 'desc'
      }
    })
    return projects
  } catch (error) {
    console.error(error)
  }
}

export async function sendMail({ name, email, message }: { name: string, email: string, message: string }) {
  try {
    const transporter = createTransport({
      service: 'gmail',
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Contact from portfolio (${email})`,
      html: `
      <p>Name: ${name} </p>
      <p>Email: ${email} </p>
      <p>Message: ${message} </p>
      `,
    })

    return true
  } catch (error) {
    console.error(error)
    return false
  }
}