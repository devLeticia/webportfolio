import Image from 'next/image'
import externaLinks from '@/../../externalLinks.json'
import fakeMock from '../../../../public/proj/fakemocks.png'

const fourPointsUrl = externaLinks.fourPointsUrl
const drimoosUrl = externaLinks.drimoosUrl

export default function Projects() {
  function openLink(platformLink: string | URL | undefined) {
    window.open(platformLink, '_blank')
  }
  return (
    <div>
      <h4>Projects</h4>
      <div className='h-1 mt-3 rounded-full w-1/2 bg-gradient-to-r from-lilac-600  to-sky-600'></div>
      <p className='mt-8 mb-12'>
        To solidify and share my expertise while making a positive impact, I
        have embarked on a journey of developing projects that showcase my
        prowess in design, development, and project management:
      </p>
      <div className='flex flex-col gap-12 items-center cursor-pointer'>
        <div className='bg-dark-800 w-full border-solid border-1 border-dark-700 p-10 rounded-2xl flex flex-col relative'>
          <p className='mb-2'>Medium Blog</p>
          <h5>UI/UX Essentials for Developers</h5>
          <h6 className='mt-3 text-sm uppercase font-medium tracking-wider text-lilac-600'>
            FOUR POINTS UX
          </h6>
          <p className='mt-6'>
            A compelling UX/UI blog crafted for developers! Fomarted to unveil
            key concepts through four concise points, it unlocks valuable
            insights to create captivating user experiences.
          </p>
          <button
            className='rounded-full hidden md:block absolute right-10 bottom-10'
            onClick={() => openLink(fourPointsUrl)}
          >
            Learn more
          </button>
          <Image
            src={fakeMock}
            alt='mockups'
            className='-mb-10 mt-20'
            width={1200}
            height={1200}
          />
        </div>
        <button
          className='rounded-full md:hidden w-36 bottom-10'
          onClick={() => openLink(fourPointsUrl)}
        >
          Learn more
        </button>
      </div>
      <div className='flex flex-col gap-12 items-center cursor-pointer mt-12'>
        <div className='bg-dark-800 w-full border-solid border-1 border-dark-700 p-10 rounded-2xl flex flex-col relative'>
          <p className='mb-2'>Mobile App</p>
          <h5>Smart Dream Journaling</h5>
          <h6 className='mt-3 text-sm uppercase font-medium tracking-wider text-lilac-600'>
            Drimoos
          </h6>
          <p className='mt-6'>
            A user-friendly mobile app that adds delight to dream journaling.
            With a playful guided reflection, it helps you explore and discover
            the deeper meanings of your dreams.
          </p>
          <button
            className='rounded-full hidden md:block absolute right-10 bottom-10'
            onClick={() => openLink(fourPointsUrl)}
          >
            Learn more
          </button>
          <Image
            src={fakeMock}
            alt='mockups'
            className='-mb-10 mt-20'
            width={1200}
            height={1200}
          />
        </div>
        <button
          className='rounded-full md:hidden w-36 bottom-10'
          onClick={() => openLink(fourPointsUrl)}
        >
          Learn more
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
