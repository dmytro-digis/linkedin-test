import { User } from '@/app/types'
import { Phone, Mail, Linkedin, Dot } from 'lucide-react'
import Experience from '@/app/components/experience'

export default function UserCard({
  name,
  current_title,
  location,
  phone_number,
  personal_email,
  linkedIn,
  experience,
  education,
  ...rest
}: User) {
  return (
    <div className="w-full p-2 md:w-full lg:w-1/2 xl:w-1/3">
      <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white px-5 py-5">
        <div className="border-b border-gray-200">
          <div className="flex gap-3">
            <h2 className="title-font font-bold italic text-gray-800">{name}</h2>
            <a href={`tel:${phone_number}`} target="_blank" title={phone_number}>
              <Phone color="grey" />
            </a>
            <a href={`mailto:${personal_email}`} target="_blank" title={personal_email}>
              <Mail color="grey" />
            </a>
            <div className="flex-grow border-l border-gray-400 pl-3">
              <a href={linkedIn} target="_blank" title={linkedIn}>
                <Linkedin color="grey" />
              </a>
            </div>
          </div>
          <div className="mb-2 text-gray-900">
            {current_title} <Dot color="lightgrey" size={35} style={{ display: 'inline' }} />{' '}
            <span className="font-light text-gray-500">{location}</span>
          </div>
        </div>
        <div>
          <Experience title="Experience" content={experience} />
          <Experience title="Education" content={education} />
        </div>
      </div>
    </div>
  )
}
