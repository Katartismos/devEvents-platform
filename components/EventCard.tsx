import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Clock3, MapPin } from 'lucide-react'

interface Props {
  title: string,
  image: string,
  slug: string,
  location: string,
  date: string,
  time: string,
}

const EventCard = ({ title, image, slug, location, date, time }: Props) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <Image src={image} alt={title} width={410} height={300} className="poster" />

      <div className="flex flex-row gap-2">
        <MapPin size={14} className="text-gray-300" />
        <p>{location}</p>
      </div>

      <p className="title">{title}</p>

      <div className="datetime">
        <div>
          <CalendarDays size={14} className="text-gray-300" />
          <p>{date}</p>
        </div>
        <div>
          <Clock3 size={14} className="text-gray-300" />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  )
}

export default EventCard