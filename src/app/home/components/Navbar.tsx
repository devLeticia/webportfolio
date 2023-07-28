import Image from 'next/image'
export default function NavBar() {
  return (
    <nav className='w-full flex justify-center fixed bg-black bg-opacity-90 z-40 backdrop-blur-sm'>
      <div className='flex pt-6 py-6 items-center w-full max-w-4xl justify-center md:justify-between border-solid border-b-dark-500 border-1 border-x-0 border-t-0 px-6'>
        <a href="#intro">
          <Image
            src='/logo.svg'
            alt='Leticia Goncalves Logo'
            width={28}
            height={28}
            priority
          />
        </a>
        <div className='gap-6 hidden md:flex'>
          {sections.map((section, index) => {
            return (
              <a
                key={index}
                href={`#${section.idName}`}
                className='px-2 active:text-lilac-600  hover:text-lilac-600 transition-colors duration-200 ease-in-out'
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
