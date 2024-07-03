import { prisma } from "@/utils/prisma"

export async function GET() {
  const socialMedia = await prisma.link.findMany({
    where: {
      type: 'SocialMedia'
    },
    include: {
      Icon: true
    }
  })

  return Response.json(socialMedia, {
    status: 200
  })
}