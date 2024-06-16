"use server"

import { getSocialMedia } from "./links"

export async function getSocialMediaAction() {
  return await getSocialMedia()
}