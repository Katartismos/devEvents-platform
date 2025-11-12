export interface EventItem {
  title: string
  image: string
  slug: string
  location: string
  date: string
  time: string
}

// Realistic upcoming / popular developer events. Images reference files under /public/images
export const events: EventItem[] = [
  {
    title: 'DevEvent Global Summit 2026',
    image: '/images/event-full.png',
    slug: 'devevent-global-2026',
    location: 'Athens, Greece',
    date: '2026-05-21',
    time: '09:30',
  },
  {
    title: 'React Summit 2026',
    image: '/images/event1.png',
    slug: 'react-summit-2026',
    location: 'Amsterdam, Netherlands',
    date: '2026-03-12',
    time: '09:00',
  },
  {
    title: 'Next.js Conf 2026',
    image: '/images/event2.png',
    slug: 'nextjs-conf-2026',
    location: 'Online / Hybrid',
    date: '2026-04-07',
    time: '10:00',
  },
  {
    title: "AWS re:Invent 2025",
    image: '/images/event3.png',
    slug: 'aws-reinvent-2025',
    location: 'Las Vegas, NV, USA',
    date: '2025-12-02',
    time: '08:00',
  },
  {
    title: 'Google I/O 2026',
    image: '/images/event4.png',
    slug: 'google-io-2026',
    location: 'Mountain View, CA, USA',
    date: '2026-05-19',
    time: '10:00',
  },
  {
    title: 'ETHDenver 2026',
    image: '/images/event5.png',
    slug: 'ethdenver-2026',
    location: 'Denver, CO, USA',
    date: '2026-02-20',
    time: '09:00',
  },
  {
    title: 'HackMIT 2026',
    image: '/images/event6.png',
    slug: 'hackmit-2026',
    location: 'Cambridge, MA, USA',
    date: '2026-09-18',
    time: '18:00',
  },
]

export default events
