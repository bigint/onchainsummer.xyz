import { MintType } from "@/components/MintDialog/types"

export const DAY = 1000 * 60 * 60 * 24

export type DropType = 'erc-721' | 'zora-erc-1155' | 'external'

export interface Drop {
  image: string
  name: string
  startDate: number
  endDate: number
  price: string
  address: `0x${string}`
  crossMintClientId: string
  type: DropType
  externalLink?: string
  creator: string
  // TODO, consider requiring mint type
  mintType?: MintType
}

export interface Partner {
  slug: string
  name: string
  url: string
  description: string
  brandColor: string
  icon: string
  banner: string
  drops: Drop[]
  aarweaveDigest: string
  twitter: string
}
