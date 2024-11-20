"use server"

import { prisma } from "@/utils/prisma"
import { createTransport } from "nodemailer"

export async function getSocialMedia() {
  try {
    return await prisma.link.findMany({
      where: {
        type: 'SocialMedia'
      },
      include: {
        Icon: true
      }
    })
  } catch (error) {
    console.error(error)
  }
}

export async function getInstitutions() {
  try {
    return await prisma.institution.findMany({
      include: {
        History: {
          orderBy: {
            initialDate: 'desc'
          }
        },
        Link: true
      }
    })
  } catch (error) {
    console.error(error)
  }
}

export async function getProjects() {
  try {
    return await prisma.project.findMany({
      include: {
        Link: {
          include: {
            Icon: true
          },
          orderBy: {
            name: 'asc'
          }
        }
      },
      orderBy: {
        initialDate: 'desc'
      }
    })
  } catch (error) {
    console.error(error)
  }
}

export async function sendMail({ name, email, message }: { name: string, email: string, message: string }) {
  try {
    const transporter = createTransport({
      host: process.env.EMAIL_HOST,
      secure: true,
      port: Number(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
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