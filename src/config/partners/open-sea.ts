import { DAY, Partner } from './types'
import { utcToZonedTime } from 'date-fns-tz'

const openSeaConfig: Partner = {
  slug: 'open-sea',
  name: 'OpenSea',
  url: 'https://opensea.io/',
  description:
    'Our cutting-edge platform not only empowers but also inspires artists, creators, and collectors, enabling them to actively engage and thrive in the groundbreaking digital revolution of non-fungible tokens (NFTs).',
  brandColor: '#2081E2',
  icon: '/partners/open-sea/icon.svg',
  iconInverse: '/partners/open-sea/icon-inverse.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  drops: [
    {
      image: '/partners/open-sea/drop/main.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Space Light Dark',
      crossMintClientId: '04a71fe3-29a3-42b4-8dec-a5c633fe5029',
      address: '0x4406EF711207f60f7bA6EEf2757F3b404D28a0b7',
      type: 'erc-721',
      startDate: utcToZonedTime(new Date('2023-07-24'), 'UTC').toISOString(),
      endDate: utcToZonedTime(new Date('2023-07-27'), 'UTC').toISOString(),
      price: '0.0001',
    },
    {
      image: '/partners/open-sea/external-drops/1.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Closer to the Sun',
      startDate: utcToZonedTime(new Date('2023-07-24'), 'UTC').toISOString(),
      endDate: utcToZonedTime(new Date('2023-07-27'), 'UTC').toISOString(),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/2.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Runaway',
      startDate: utcToZonedTime(new Date('2023-07-24'), 'UTC').toISOString(),
      endDate: utcToZonedTime(new Date('2023-07-27'), 'UTC').toISOString(),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/3.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Yu-Gi-Oh!',
      startDate: utcToZonedTime(new Date('2023-07-24'), 'UTC').toISOString(),
      endDate: utcToZonedTime(new Date('2023-07-27'), 'UTC').toISOString(),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/4.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Number 1',
      startDate: utcToZonedTime(new Date('2023-07-24'), 'UTC').toISOString(),
      endDate: utcToZonedTime(new Date('2023-07-27'), 'UTC').toISOString(),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
  ],
}

export default openSeaConfig
