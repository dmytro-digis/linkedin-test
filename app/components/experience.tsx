type ExperienceProps = {
  title: string
  content: string[]
}

export default function Experience({ title, content }: ExperienceProps) {
  const slicedContent = content.map((item) => item.slice(0, 32))
  return (
    <div className="mt-5 flex text-sm">
      <div className="mr-10 w-1/6 italic text-gray-900">{title}</div>
      <ul className="relative list-none pl-[3px] font-light text-gray-700 before:absolute before:left-[-1px] before:top-[8px] before:h-[62%] before:w-[2px] before:bg-gray-300 before:content-['']">
        {slicedContent.map((item, index) => (
          <li
            className="relative mb-2 ml-1 pl-3 before:absolute before:left-[-12px] before:top-[5px] before:h-[10px] before:w-[10px] before:rounded before:bg-gray-300 before:content-['']"
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
