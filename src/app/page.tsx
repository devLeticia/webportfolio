'use client'

import Image from 'next/image'
import { Palette, GraduationCap } from 'phosphor-react'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-full max-w-5xl flex justify-between'>
        <Image
          src='/logo.svg'
          alt='Leticia Goncalves Logo'
          className='dark:invert'
          width={30}
          height={24}
          priority
        />
        <ul className='flex gap-6'>
          <li>Projects</li>
          <li>Stacks</li>
          <li>Work</li>
          <li>Studies</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='z-10 flex flex-col w-full max-w-5xl items-center text-center'>
        <p className='text-violet-400 text-lg mt-32 mb-7 tracking-wider'>
          LETÍCIA GONÇALVES
        </p>
        <h1 className='text-white mb-14'>
          Building digital products,<br></br> brands, and experience.
        </h1>
        <p className='text-xl'>
          I am a software developer based in Brazil,<br></br> I specialize in
          front-end development and UI/UX Design.
        </p>
        <button className='my-14'>Get in touch</button>
        {/* <ul className='my-32 flex gap-6 text-7xl font-medium text-zinc-800'>
          <li>Projects/</li>
          <li>Stacks/</li>
          <li>Work/</li>
          <li>Studies/</li>
          <li>Contact/</li>
          <li>Projects/</li>
          <li>Stacks/</li>
          <li>Work/</li>
          <li>Studies/</li>
          <li>Contact/</li>
        </ul> */}
      </div>
      <section className='mt-14'>
        <h3>Stacks</h3>
      </section>
      <section className='mt-14'>
        <h3>Work Experience</h3>
      </section>
      <section className='mt-14'>
        <h3 className='text-center'>Studies</h3>
        {/* courses */}
        <div className='grid grid-cols-2 mt-16 gap-3 max-w-5xl'>
          <div className='flex flex-col gap-10 justify-between p-14'>
            {courses.map((course) => {
              return (
                <div key={course.name} className='flex justify-start gap-6'>
                  <Palette size={72} color={'#907ceb'} />
                  <div className='flex flex-col'>
                    <h5>{course.name}</h5>
                    <h6 className='mt-3 text-purple-900 uppercase font-medium tracking-wider'>
                      {course.institution}
                    </h6>
                    <p className='mt-6'>{course.description}</p>
                    <span className='mt-3 text-zinc-700'>{course.year}</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flex flex-col gap-10 bg-neutral-950 pl-14 pb-14 rounded-lg'>
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
                      <h6
                        key={uni}
                        className='text-purple-900 uppercase font-medium'
                      >
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
      </section>
    </main>
  )
}

const courses = [
  {
    icon: 'code-block',
    name: 'Ignite Bootcamp',
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
    universities: ['ESTACIO DE SÁ UNVIVERSTISTY'],
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
