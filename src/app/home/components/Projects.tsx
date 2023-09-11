import Image from 'next/image'
import externalLinks from '@/../../externalLinks.json'

const fourPointsUrl = externalLinks.fourPointsUrl
const chimpTokUrl = externalLinks.chimpTokUrl

export default function Projects() {
  function openLink(platformLink: string | URL | undefined) {
    window.open(platformLink, '_blank')
  }
  return (
    <div>
      <h4>Projects</h4>
      <div className='h-1 mt-3 rounded-full w-1/2 bg-gradient-to-r from-lilac-600  to-sky-600'></div>
      <p className='mt-8 mb-12'>
        I&apos;ve been engainging in some projects to solidify knowledge while making a positive impact. Check it out:
      </p>
      
      <div className='flex flex-col gap-12 items-center cursor-pointer'>
      {
        projects.map((item, index) => {
          return (
            <div  key={index} className='bg-dark-800 w-full overflow-clip border-solid border-1 border-dark-700  rounded-2xl flex flex-col relative'>
              <div className="p-10">
                <p className='mb-2'>{item.type}</p>
                <h5>{item.brief}</h5>
                <h6 className='mt-3 text-sm uppercase font-medium tracking-wider text-lilac-600'>
                  {item.name}
                </h6>
                {item.status === 'Coming soon' && <span className="bg-lilac-700 text-white px-4 py-2 text-xs font-medium rounded-sm mt-6 inline-block">{item.status}</span>}
               
              </div>
              {item.status !== 'Coming soon' && 
              <button
                className='rounded-full hidden md:block absolute right-10 bottom-10'
                onClick={() => openLink(item.websiteURL)}
              >
                 {item.CTAText}
              </button>
              
              }
              <div className="w-full flex justify-center">
              <Image
                src={item.imgPath}
                alt={item.name}
                width={800}
                height={800}
              />

              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

const projects = [
  {
    type: 'Web Application',
    brief: 'Pomodoro Timer',
    name: 'ChimpTok',
    websiteURL: chimpTokUrl,
    status: 'Production',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    categories: ['design', 'development', 'marketing', 'web', 'mobile'],
    technologies: ['React', 'Vite', 'Typescript', 'Figma'],
    imgPath: '/proj/Chimptok.png',
    CTAText: 'Learn more'
  },
  {
    type: 'Medium Blog',
    brief: 'UI/UX Essentials for Developers',
    name: 'Four Points UX',
    websiteURL: fourPointsUrl,
    status: 'Coming soon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    categories: ['design', 'development', 'ui', 'ux', 'web', 'mobile'],
    technologies: ['Figma', 'Adobe Illustrator', 'Medium'],
    imgPath: 'proj/four-points.png',
    CTAText: 'Access'
  },
  // {
  //   status: 'ongoing',
  //   name: 'Quiz Clash',
  //   brief: 'Attack Defense Quiz Game',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   categories: ['design', 'development', 'marketing', 'web', 'mobile'],
  //   technologies: ['Javascript', 'React'],
  //   imgPath: '/projects/background.png',
  //   highlightImgPath: '/projects/character.png',
  // },
]
