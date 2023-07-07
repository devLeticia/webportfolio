import Image from 'next/image'
import { Palette, Code, GraduationCap } from 'phosphor-react'

const icons = [Code, Palette]

const courses = [
  {
    icon: icons[0],
    name: 'Ignite: Fullstack Javascript',
    institution: 'ROCKETSEAT',
    description:
      'Web, Mobile, and Back-end with JavaScript. Highly advanced hands-on projects with React.js, React Native, Node.js, and other related technologies.',
    year: 'ongoing',
  },
  {
    icon: icons[1],
    name: 'Product Design, User Experience and Interfaces',
    institution: 'INTERACTION DESIGN FOUNDATION',
    description:
      'Strong foundation in interactive design principles, from user research to wireframing, prototyping, and usability testing.',
    year: 'ongoing',
  },
]
const graduations = [
  {
    name: 'System Analisys and Development',
    universities: ['ESTACIO DE SÁ UNVIVERSITY'],
    conclusionYear: 2022,
  },
  {
    name: 'International Relations',
    universities: [
      'PUC-RIO',
      'UNIVERSITY OF SOUTH CAROLINA',
      'FREE UNIVERSITY OF BERLIN',
    ],
    conclusionYear: 2016,
  },
]

export default function Studies() {
  return (
    <div>
      <h4>Studies</h4>
      <div className='h-1 mt-3 rounded-full max-w-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
      <div className='grid grid-cols-2 gap-6 max-w-5xl mt-12'>
        <div className='flex flex-col gap-6 justify-end'>
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <div
                key={course.name}
                className='flex  bg-zinc-950 rounded-lg py-14 pl-10 pr-14 items-start gap-6'
              >
                <span>
                  <Icon size={32} color={'#907ceb'} className='shrink-0' />
                </span>
                <div className='flex flex-col'>
                  <h5>{course.name}</h5>
                  <h6 className='mt-3 uppercase font-medium tracking-wider'>
                    {course.institution}
                  </h6>
                  <p className='mt-6'>{course.description}</p>
                  <span className='mt-3 text-zinc-700'>{course.year}</span>
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex flex-col gap-6 bg-zinc-950 pl-14 pb-14 rounded-lg overflow-clip'>
          <div className='flex w-full justify-between'>
            <GraduationCap size={42} color={'#907ceb'} className='mt-14' />
            <Image
              src='/globe.svg'
              alt='Earth Globe'
              className='dark:invert -mb-36'
              width={316}
              height={316}
              priority
            />
          </div>
          {graduations.map((grad) => {
            return (
              <div
                key={grad.name}
                className='flex flex-col justify-end h-full  w-2/3'
              >
                <h5 className='mb-3'>{grad.name}</h5>
                {grad.universities.map((uni) => {
                  return (
                    <h6 key={uni} className='uppercase font-medium'>
                      {uni}
                    </h6>
                  )
                })}
                <span className='mt-3 text-zinc-700'>
                  {grad.conclusionYear}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
