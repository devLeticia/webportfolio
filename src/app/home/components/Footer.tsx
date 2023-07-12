import Image from 'next/image'
import externaLinks from '@/../../externalLinks.json'
import {
  LinkedinLogo,
  DribbbleLogo,
  GithubLogo,
  DiscordLogo,
  EnvelopeSimple,
} from 'phosphor-react'
export default function Footer() {
  const linkedinUrl = externaLinks.linkedinUrl
  const dribbbleUrl = externaLinks.dribbbleUrl
  const githubUrl = externaLinks.githubUrl
  const discordUrl = externaLinks.discordUrl
  const emailUrl = externaLinks.emailUrl

  function openLink(platformLink) {
    window.open(platformLink, '_blank')
  }
  //include sJIRA, GIT, TEAMS, SLACK,
  return (
    <footer
      id='contact'
      className='text-center flex flex-col justify-center relative   items-center min-h-screen w-full  bg-dark-800'
    >
      <h3 className='text-white bg-red'>Wanna know more? Lets talk!</h3>
      <div className='my-20'>
        <div className='flex flex-col items-center '>
          <Image
            src='/logo.svg'
            alt='Leticia Goncalves Logo'
            className='dark:invert my-3 cursor-pointer'
            width={64}
            height={64}
            priority
            onClick={() => openLink(dribbbleUrl)}
          />
          <span className='font-medium text-purple-400'>Lets do it</span>
          <p>contact@leticia.pro</p>
        </div>
        <div className='flex gap-6 mt-12 justify-self-center bg-dark'>
          <LinkedinLogo
            size={48}
            color={'#907ceb'}
            className='bg-black p-2 rounded-lg'
            weight='fill'
          />
          <DribbbleLogo
            size={48}
            color={'#907ceb'}
            className='bg-black p-2 rounded-lg'
            weight='fill'
          />
          <GithubLogo
            size={48}
            color={'#907ceb'}
            className='bg-black p-2 rounded-lg'
            weight='fill'
          />
          <DiscordLogo
            size={48}
            color={'#907ceb'}
            className='bg-black p-2 rounded-lg'
            weight='fill'
          />
          <EnvelopeSimple
            size={48}
            color={'#907ceb'}
            className='bg-black p-2 rounded-lg'
            weight='fill'
          />
        </div>
      </div>

      <div className='text-sm  absolute bottom-0 mb-6'>
        <p>Built with Next.js and Tailwind</p>
        <p>All Rights Reserved 2023</p>
      </div>
    </footer>
  )
}
