import Image from 'next/image'
export default function Projects() {
  return (
    <div className='flex flex-col items-end'>
      {projects.map((proj) => {
        return (
          <div
            key={proj.name}
            className='grid grid-cols-2 max-w-5xl gap-12 mb-32 relative'
          >
            <Image
              src='/projects/character.png'
              alt='Leticia Goncalves Logo'
              className='absolute -bottom-20 left-0'
              width={264}
              height={264}
              priority
            />
            <div className='rounded-lg overflow-clip max-h-96'>
              <Image
                src='/projects/background.png'
                alt='Leticia Goncalves Logo'
                className='w-full'
                width={860}
                height={860}
                priority
              />
            </div>
            <div className='flex flex-col'>
              <h4>{proj.name}</h4>
              <h6 className='uppercase font-medium tracking-wider'>
                {proj.brief}
              </h6>
              <div className='flex gap-2'>
                {proj.technologies.map((tec) => {
                  return (
                    <span
                      key={tec}
                      className='px-3 py-2 uppercase  tracking-widest bg-neutral-900 text-yellow-300  mt-6 inline-block text-xs rounded-md'
                    >
                      {tec}
                    </span>
                  )
                })}
              </div>
              <p className='mt-6'>{proj.description}</p>
              <p className='mt-12'> Javascript • React • Nodejs</p>
              <span className='align-self-end text-lime-500 block'>
                {proj.status}
              </span>
            </div>
          </div>
        )
      })}
      <button className='text-center right-0 left-0'>Discover More</button>
    </div>
  )
}

const projects = [
  {
    status: 'deployed: www.motti.day',
    name: 'Motti',
    brief: 'MOTIVATION PHRASE FOR THE DAY',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    categories: ['design', 'development', 'marketing', 'web', 'mobile'],
    technologies: ['AI', 'React', 'Figma'],
    imgPath: '/projects/background.png',
    highlightImgPath: '/projects/character.png',
  },
  {
    status: 'ongoing',
    name: '4 Points',
    brief: 'UX/UI Essentials for Developers',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    categories: ['design', 'development', 'marketing', 'web', 'mobile'],
    technologies: ['Medium', 'Figma', 'Design Theory'],
    imgPath: '/projects/background.png',
    highlightImgPath: '/projects/character.png',
  },
  {
    status: 'ongoing',
    name: 'Quiz Clash',
    brief: 'Attack Defense Quiz Game',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    categories: ['design', 'development', 'marketing', 'web', 'mobile'],
    technologies: ['Javascript', 'React'],
    imgPath: '/projects/background.png',
    highlightImgPath: '/projects/character.png',
  },
]

/* 
Quiz Clash 
Pomotok
Rabbit Rocket

Drimoos
Brigader-in 
Ciambella
*/
