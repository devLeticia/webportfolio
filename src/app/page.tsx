'use client'

import Image from 'next/image'
import {
  Palette,
  GraduationCap,
  LinkedinLogo,
  DribbbleLogo,
  GithubLogo,
  DiscordLogo,
  EnvelopeSimple,
} from 'phosphor-react'
import Intro from './home/components/Intro'
import Footer from './home/components/Footer'
import Projects from './home/components/Projects'
import WorkExperience from './home/components/WorkExperience'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <div className='w-full text-center'>
        <div className='flex max-w-5xl justify-between py-10 px-20 items-center'>
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
      </div>
      <div className='z-10 flex flex-col w-full max-w-7xl items-center text-center'>
        <p className='text-violet-400 text-lg mt-32 mb-7 tracking-wider'>
          LETÍCIA GONÇALVES
        </p>
        <h1 className='text-white mb-14'>
          Building digital products<br></br>from design to code.
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
      <section className='my-14'>
        <h3 className='mb-20 text-center'>Projects</h3>
        <Projects />
      </section>
      <section className='my-14'>
        <h3>Stacks</h3>
      </section>
      <section className='my-14'>
        <h3 className='mb-20 text-center'>Work Experience</h3>
        <WorkExperience />
      </section>
      <section className='my-14'>
        <h3 className='text-center mb-32'>Studies</h3>
        {/* courses */}
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
      </section>
      <section className='my-40'>
        <h3 className='text-center mb-32'>Daily Inspired by</h3>
        <div className='flex justify-center items-center gap-12'>
          <Image
            src='/inspiration-logos/dribbble.svg'
            alt='Leticia Goncalves Logo'
            className='dark:invert'
            width={164}
            height={164}
            priority
          />
          <Image
            src='/inspiration-logos/dribbble.svg'
            alt='Leticia Goncalves Logo'
            className='dark:invert'
            width={164}
            height={164}
            priority
          />
          <Image
            src='/inspiration-logos/dribbble.svg'
            alt='Leticia Goncalves Logo'
            className='dark:invert'
            width={164}
            height={164}
            priority
          />
          <Image
            src='/inspiration-logos/dribbble.svg'
            alt='Leticia Goncalves Logo'
            className='dark:invert'
            width={164}
            height={164}
            priority
          />
          <Image
            src='/inspiration-logos/dribbble.svg'
            alt='Leticia Goncalves Logo'
            className='dark:invert'
            width={164}
            height={164}
            priority
          />
        </div>
      </section>
      <footer className='text-center flex flex-col justify-center items-center min-h-screen w-full  bg-neutral-950'>
        <h3 className='text-white'>Wanna know more? Lets talk!</h3>
        <div className='flex gap-6 my-20'>
          <LinkedinLogo
            size={56}
            color={'#907ceb'}
            className='bg-black p-2 rounded-lg'
            weight='fill'
          />
          <DribbbleLogo
            size={56}
            color={'#907ceb'}
            className='bg-black p-2 rounded-lg'
            weight='fill'
          />
          <GithubLogo
            size={56}
            color={'#907ceb'}
            className='bg-black p-2 rounded-lg'
            weight='fill'
          />
          <DiscordLogo
            size={56}
            color={'#907ceb'}
            className='bg-black p-2 rounded-lg'
            weight='fill'
          />
          <EnvelopeSimple
            size={56}
            color={'#907ceb'}
            className='bg-black p-2 rounded-lg'
            weight='fill'
          />
        </div>
        <Image
          src='/logo.svg'
          alt='Leticia Goncalves Logo'
          className='dark:invert'
          width={30}
          height={24}
          priority
        />
        <span className='font-medium my-12 text-purple-400'>Lets do it</span>
        <p>contact@leticia.pro</p>
        <p>Built with Love with Next.js</p>
        <p>All Rights Reserved 2023</p>
      </footer>
    </main>
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
