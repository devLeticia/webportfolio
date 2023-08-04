import {
  ArrowUpRight,
  Layout,
  FileVue,
  UsersFour,
  MagicWand,
  Code,
  Lifebuoy,
} from 'phosphor-react'
import Image from 'next/image'

export default function WorkExperience() {
  return (
    <div>
      <h4>Work Experience</h4>
      <div className='h-1 mt-3 rounded-full flex-col w-full max-w-md bg-gradient-to-r from-lilac-600  to-sky-600 block'></div>
      <p className='mt-8'>
        Having gained valuable experience in the tech industry, I am skilled as
        both a software developer and UI/UX designer. Here, a small summary of what I have been working on.
      </p>
      {workExperiences.map((item, index) => {
        return (
          <div
            key={index}
            className='bg-dark-800 w-full border-solid container border-gray-500 p-10 rounded-2xl flex flex-col mt-12 border-1 border-dark-700'
          >
            <div className='flex flex-col w-full items-center'>
              <div>
                <p className='mb-2'>{item.status}</p>
                <h5>{item.position}</h5>
                <h6 className='mt-3 text-sm uppercase font-medium tracking-wider text-lilac-600'>
                  {item.company}
                </h6>
                <div className='grid flex-row md:flex-col md:grid-cols-2 gap-12 mt-6'>
                  <div>
                    <p>{item.atributions}</p>
                  </div>
                  <div className='flex flex-col gap-3 md:gap-6'>
                    {item.mainDuties.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <div
                          key={index}
                          className='text-sm bg-dark flex gap-3 items-center'
                        >
                          <Icon
                            size={42}
                            color={'#907ceb'}
                            weight='fill'
                            className='bg-dark-700 p-2 shrink-0 rounded-md border-solid border-1 border-dark-500 cursor-pointer'
                          />
                          <p>{item.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const workExperiences = [
  {
    status: '2022 - Present',
    position: 'Software Developer, UX/UI Designer',
    company: 'Nelogica',
    atributions: [
      "Continuing my journey at Nelogica, a prominent billionaire fintech firm, I had the privilege of applying my expertise as a UX/UI designer and frontend developer. Here, I further honed my skills by crafting innovative solutions and implementing cutting-edge technologies. My contributions played a significant part in elevating the company's products and services to meet the ever-evolving demands of the fintech industry."
    ],
    mainDuties: [
      {
        icon: MagicWand,
        description: 'Crafted visually captivating interfaces, elevating fintech products to new heights',
      },
      {
        icon: Code,
        description: 'Implemented cutting-edge frontend techniques for seamless web applications',
      },
      {
        icon: Lifebuoy,
        description: 'Provided exceptional support, ensuring customer satisfaction and issue resolution.',
      },
    ],
  },
  {
    status: '2021',
    position: 'Frontend Developer, UX/UI Designer',
    company: 'Akeloo',
    atributions: [
      `As a UX/UI designer and frontend developer at Akeloo, a rising fintech startup, I played a pivotal role in  designing low and high fidelity prototypes to enhance various features, expand service offerings, and optimize support processes. My work directly contributed to the company's growth and success in the competitive fintech market.`
    ],
    mainDuties: [
      {
        icon: Layout,
        description: 'Ideated and designed captivating UX/UI for new features using Figma and Illustrator.',
      },
      {
        icon: FileVue,
        description: 'Expanded and promoted services through creative design solutions, enhancing user engagement.',
      },
      {
        icon: UsersFour,
        description: 'Developed cost-effective support tools, optimizing customer assistance and reducing costs.',
      },
    ],
  },
]
