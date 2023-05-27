import Image from 'next/image'
import externaLinks from '@/../../externalLinks.json'
export default function Projects() {
  const dribbbleUrl = externaLinks.dribbbleUrl
  const githubUrl = externaLinks.dribbbleUrl

  function openLink(platformLink) {
    window.open(platformLink, '_blank')
  }
  return (
    <div className='flex flex-col items-center'>
      <h3 className='my-20 text-center'>Projects</h3>
      {projects.map((proj, index) => {
        return (
          <div
            key={proj.name}
            className='grid grid-cols-2 max-w-5xl gap-12 mb-32 relative '
          >
            <Image
              src='/projects/character.png'
              alt='Leticia Goncalves Logo'
              className='absolute -bottom-20 left-0'
              width={264}
              height={264}
              priority
            />
            <div className='rounded-lg overflow-clip max-h-96 cursor-pointer hover:shadow-2xl hover:shadow-purple-900 transition-shadow ease-linear delay-100'>
              <Image
                src='/projects/background.png'
                alt='Leticia Goncalves Logo'
                className='w-full '
                width={860}
                height={860}
                priority
              />
            </div>
            <div className='flex flex-col '>
              <h4 className=' cursor-pointer'>{proj.name}</h4>
              <h6 className=' cursor-pointer uppercase font-medium tracking-wider'>
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
      <h5 className='mb-6'>More about it on</h5>
      <div className='flex'>
        <button
          className='text-center right-0 left-0 rounded-l-full'
          onClick={() => openLink(dribbbleUrl)}
        >
          Dribble
        </button>
        <button
          className='text-center right-0 left-0 rounded-r-full'
          onClick={() => openLink(githubUrl)}
        >
          GitHub
        </button>
      </div>
    </div>
  )
}

const projects = [
  {
    status: 'www.mottibox.com',
    name: 'Motti Box',
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
