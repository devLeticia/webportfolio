import Image from 'next/image'
import externaLinks from '@/../../externalLinks.json'

const linkedinUrl = externaLinks.linkedinUrl
const githubUrl = externaLinks.githubUrl

export default function Stacks() {  
  function openLink(platformLink: string | URL | undefined) {
    window.open(platformLink, '_blank')
  }

  return (
    <div className='bg-dark-800 md:w-full md:p-14 relative border-solid border-1 border-dark-700 rounded-2xl flex my-32 fadeInUp-animation'>
      <div className='bg-dark-700 md:-mt-32 md:-mb-32 w-full md:max-w-lg  rounded-2xl border-solid border-1 border-dark-500 p-10 md:p-14 '>
        <h4>Skills</h4>
        <div className='h-1 mt-3 rounded-full w-full bg-gradient-to-r from-lilac-600  to-sky-600'></div>
        <div>
          {stacks.map((item) => {
            return (
              <>
                <h6 key={item.area} className='mt-8'>
                  {item.area}
                </h6>
                <div className='mt-3 grid grid-flow-row grid-cols-5 gap-5 '>
                  {item.stack.map((stack, index) => {
                    return (
                      <div key={`${index} + ${stack.name}`}>
                        <div className='aspect-square	 rounded-lg flex items-center justify-center w-full bg-dark-800'>
                          <Image
                            src={`/skills-logo${stack.iconPath}`}
                            alt={stack.name}
                            height={28}
                            width={28}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className='md:flex flex-col justify-between max-w-xs pl-12 hidden'>
        <div>
          <h2 className='text-white font-medium'>Stunning Design, Flawless Code!</h2>
          <p className='mt-6'>
          With a solid foundation in HTML, CSS, and JavaScript, I&apos;m proficient in building amazing Single Page Applications with Vue.js and React for both web and mobile. On the backend, my go-to tools for efficient APIs are Node.js and C#. Prototypes built with Figma and Illustrator are the foundation of my projects.
          </p>
        </div>
        <button className='bg-white text-white  bottom-0 rounded-full w-full' onClick={() => openLink(linkedinUrl)}>
          Reach out
        </button>
      </div>
    </div>
  )
}

const stacks = [
  {
    area: 'Frontend',
    stack: [
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/html.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/css.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/sass.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/tailwind.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/bootstrap.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/javascript.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/typescript.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/vue.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/vuetify.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/nuxt.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/react.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/reactNative.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/nextjs.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/vite.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/ionic.svg',
      },
    ],
  },
  {
    area: 'Backend',
    stack: [
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/csharp.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/nodejs.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/prisma.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/jest.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/sql.svg',
      },
    ],
  },
  {
    area: 'UI/UX Design',
    stack: [
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/figma.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/adobeXd.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/illustrator.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/photoshop.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/storybook.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/atomicDesign.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/colorTheory.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/psicology.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/sociology.svg',
      },
      {
        name: 'javascript',
        description: 'javascript Ipsum Lorem',
        iconPath: '/goodTaste.svg',
      },
    ],
  },
]
