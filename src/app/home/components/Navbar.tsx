import Image from 'next/image'
export default function NavBar() {
  return (
    <nav className='w-full flex justify-center fixed bg-black bg-opacity-90 z-40'>
      <div className='flex pt-6 items-center w-full max-w-7xl justify-between'>
        <Image
          src='/logo.svg'
          alt='Leticia Goncalves Logo'
          className='dark:invert'
          width={24}
          height={24}
          priority
        />
        <div className='flex gap-6'>
          {sections.map((section, index) => {
            return (
              <a
                key={index}
                href={`#${section.idName}`}
                className='px-2 active:text-purple-300 py-6 hover:border-b-2 hover:border-purple-300 hover:text-purple-300 transition-colors duration-200 ease-in-out'
              >
                {section.title}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

const sections = [
  {
    title: 'Skills',
    idName: 'skills',
  },
  {
    title: 'Projects',
    idName: 'projects',
  },
  {
    title: 'Work',
    idName: 'work',
  },
  {
    title: 'Studies',
    idName: 'studies',
  },
  {
    title: 'Contact',
    idName: 'contact',
  },
]
