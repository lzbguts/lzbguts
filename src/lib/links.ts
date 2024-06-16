import { prisma } from "@/utils/prisma"

export const getSocialMedia = async () => {
  const socialMedia = await prisma.link.findMany({
    where: {
      type: 'SocialMedia'
    }
  })

  return socialMedia
}