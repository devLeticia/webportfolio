import Image from 'next/image'
import externaLinks from '@/../../externalLinks.json'
import {
  LinkedinLogo,
  DribbbleLogo,
  GithubLogo,
  DiscordLogo,
  EnvelopeSimple,
} from 'phosphor-react'
const icons = [
  LinkedinLogo,
  DribbbleLogo,
  GithubLogo,
  DiscordLogo,
  EnvelopeSimple,]
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
      <h3 className='text-white bg-red'>Wanna Know More? Lets Talk!</h3>
      <div className='my-20'>
        <div className='flex flex-col items-center '>
          <Image
            src='/logo.svg'
            alt='Leticia Goncalves Logo'
            className='dark:invert my-3 cursor-pointer'
            width={32}
            height={32}
            priority
            onClick={() => openLink(dribbbleUrl)}
          />
          <span className='text-'>Letícia Gonçalves</span>
          <span>Software Developer</span>
        </div>
        <div className='flex gap-6 mt-12 justify-self-center bg-dark'>
          {
            icons.map((icon, index) => {
              const Icon = icon
              return (
                <Icon key={index} size={48} color={'#907ceb'} weight='fill'
                className='bg-dark-700 p-2 rounded-md border-solid border-1 border-dark-500 cursor-pointer' />
              )
            })
          }
        </div>
        <p className="mt-12">contact@leticia.pro</p>
      </div>

      <div className='text-sm bottom-0 absolute max-w-4xl w-full mb-6 border-t-dark-700 border-1 border-x-0 border-b-0 pt-6'>
        <p>Built with Next.js and Tailwind</p>
        <p>All Rights Reserved 2023</p>
      </div>
    </footer>
  )
}
