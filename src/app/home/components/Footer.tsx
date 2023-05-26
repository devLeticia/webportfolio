import Image from 'next/image'
import {
  LinkedinLogo,
  DribbbleLogo,
  GithubLogo,
  DiscordLogo,
  EnvelopeSimple,
} from 'phosphor-react'
export default function Footer() {
  return (
    <footer
      id='contact'
      className='text-center flex flex-col justify-center items-center min-h-screen w-full  bg-neutral-950'
    >
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
      <p className='mt-40'>Built with Next.js and Tailwind</p>
      <p>All Rights Reserved 2023</p>
    </footer>
  )
}
