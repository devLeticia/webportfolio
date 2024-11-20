import Image from 'next/image'
import externaLinks from '@/../../externalLinks.json'

const linkedinUrl = externaLinks.linkedinUrl
const githubUrl = externaLinks.githubUrl

export default function Skills() {  
  function openLink(platformLink: string | undefined) {
    if (platformLink) {
      window.open(platformLink, '_blank')
    } else {
      console.error('Invalid platform link')
    }
  }

  return (
    <div className="bg-dark-800 md:w-full md:p-14 relative border-solid border-1 border-dark-700 rounded-2xl flex my-32 fadeInUp-animation">
      <div className="bg-dark-700 md:-mt-32 md:-mb-32 w-full md:max-w-lg rounded-2xl border-solid border-1 border-dark-500 p-10 md:p-14">
        <h4>Skills</h4>
        <div className="h-1 mt-3 rounded-full w-full bg-gradient-to-r from-lilac-600 to-sky-600"></div>
        <div>
          {stacks.map((item, index) => (
            <div key={`area-${index}`}>
              <h6 className="mt-8">{item.area}</h6>
              <div className="mt-3 grid grid-flow-row grid-cols-5 gap-5">
                {item.stack.map((stack, stackIndex) => (
                  <div key={`stack-${index}-${stackIndex}`}>
                    <div className="aspect-square rounded-lg flex items-center justify-center w-full bg-dark-800">
                      <Image
                        src={`/skills-logo${stack.iconPath}`}
                        alt={stack.name}
                        height={28}
                        width={28}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex flex-col justify-between max-w-xs pl-12 hidden">
        <div>
          <h2 className="text-white font-medium">Stunning Design, Flawless Code!</h2>
          <p className="mt-6">
            With a solid foundation in HTML, CSS, and JavaScript, I&apos;m proficient in building amazing Single Page Applications with Vue.js and React for both web and mobile.
          </p>
          <p className="mt-6">
            On the backend, my go-to tools for efficient APIs are Node.js and C#. Prototypes built with Figma and Illustrator are the foundation of these amazing projects.
          </p>
        </div>
        <button
          className="bg-white text-black bottom-0 rounded-full w-full"
          onClick={() => openLink(linkedinUrl)}
        >
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
      { name: 'HTML', description: 'HTML', iconPath: '/html.svg' },
      { name: 'CSS', description: 'CSS', iconPath: '/css.svg' },
      { name: 'SASS', description: 'SASS', iconPath: '/sass.svg' },
      { name: 'Tailwind', description: 'Tailwind', iconPath: '/tailwind.svg' },
      { name: 'Bootstrap', description: 'Bootstrap', iconPath: '/bootstrap.svg' },
      { name: 'JavaScript', description: 'JavaScript', iconPath: '/javascript.svg' },
      { name: 'TypeScript', description: 'TypeScript', iconPath: '/typescript.svg' },
      { name: 'Vue.js', description: 'Vue.js', iconPath: '/vue.svg' },
      { name: 'Vuetify', description: 'Vuetify', iconPath: '/vuetify.svg' },
      { name: 'Nuxt', description: 'Nuxt', iconPath: '/nuxt.svg' },
      { name: 'React', description: 'React', iconPath: '/react.svg' },
      { name: 'React Native', description: 'React Native', iconPath: '/reactNative.svg' },
      { name: 'Next.js', description: 'Next.js', iconPath: '/nextjs.svg' },
      { name: 'Vite', description: 'Vite', iconPath: '/vite.svg' },
      { name: 'Ionic', description: 'Ionic', iconPath: '/ionic.svg' },
    ],
  },
  {
    area: 'Backend',
    stack: [
      { name: 'C#', description: 'C#', iconPath: '/csharp.svg' },
      { name: 'Node.js', description: 'Node.js', iconPath: '/nodejs.svg' },
      { name: 'Prisma', description: 'Prisma', iconPath: '/prisma.svg' },
      { name: 'Jest', description: 'Jest', iconPath: '/jest.svg' },
      { name: 'SQL', description: 'SQL', iconPath: '/sql.svg' },
    ],
  },
  {
    area: 'UI/UX Design',
    stack: [
      { name: 'Figma', description: 'Figma', iconPath: '/figma.svg' },
      { name: 'Adobe XD', description: 'Adobe XD', iconPath: '/adobeXd.svg' },
      { name: 'Illustrator', description: 'Illustrator', iconPath: '/illustrator.svg' },
      { name: 'Photoshop', description: 'Photoshop', iconPath: '/photoshop.svg' },
      { name: 'Storybook', description: 'Storybook', iconPath: '/storybook.svg' },
      { name: 'Atomic Design', description: 'Atomic Design', iconPath: '/atomicDesign.svg' },
      { name: 'Color Theory', description: 'Color Theory', iconPath: '/colorTheory.svg' },
      { name: 'Psychology', description: 'Psychology', iconPath: '/psychology.svg' },
      { name: 'Sociology', description: 'Sociology', iconPath: '/sociology.svg' },
      { name: 'Love', description: 'Love', iconPath: '/goodTaste.svg' },
    ],
  },
]
