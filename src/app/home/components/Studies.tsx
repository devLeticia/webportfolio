import Image from 'next/image'
import { Palette, GraduationCap } from 'phosphor-react'

export default function Studies() {
  return (
    <div>
      <h3 className='text-center my-20'>Studies</h3>
      <div className='grid grid-cols-2 gap-12 max-w-5xl'>
        <div className='flex flex-col gap-10 justify-end p-14'>
          {courses.map((course) => {
            return (
              <div key={course.name} className='flex justify-start gap-6'>
                <Palette size={72} color={'#907ceb'} />
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
        <div className='flex flex-col gap-10 bg-neutral-950 pl-14 pb-14 rounded-lg overflow-clip'>
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
              <div key={grad.name} className='flex flex-col w-2/3'>
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

const courses = [
  {
    icon: 'code-block',
    name: 'Ignite FullStack Javascript',
    institution: 'ROCKETSEAT',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    year: 'ongoing',
  },
  {
    icon: 'pallete',
    name: 'Product Design, User Experience and Interfaces',
    institution: 'INTERACTION DESIGN FOUNDATION',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
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
