import Image from 'next/image'
import externaLinks from '@/../../externalLinks.json'
import {
  LinkedinLogo,
  DribbbleLogo,
  GithubLogo,
  DiscordLogo,
  EnvelopeSimple,
} from 'phosphor-react'


  const linkedinUrl = externaLinks.linkedinUrl
  const dribbbleUrl = externaLinks.dribbbleUrl
  const githubUrl = externaLinks.githubUrl
  const discordUrl = externaLinks.discordUrl
  const emailUrl = externaLinks.emailUrl
  
  const socialMedias = [
    {
      name: 'Linkedin',
      url:  linkedinUrl,
      icon:  LinkedinLogo
    },
    {
      name: 'Dribble',
      url:  dribbbleUrl,
      icon:  DribbbleLogo
    },
    {
      name: 'Git Hub',
      url:  githubUrl,
      icon:  GithubLogo
    },
    {
      name: 'Discord',
      url:  discordUrl,
      icon:  DiscordLogo
    },
    {
      name: 'E-mail',
      url:  emailUrl,
      icon:  EnvelopeSimple
    },
  ]
export default function Footer() {
 

  function openLink(platformLink: string | URL | undefined) {
    if (platformLink === emailUrl) sendEmail()
    else window.open(platformLink, '_blank')
  }
  function sendEmail() {
    window.location.href = `mailto:${emailUrl}`
  }
  //include sJIRA, GIT, TEAMS, SLACK,
  return (
    <footer
      id='contact'
      className='mt-12 text-center flex flex-col justify-center relative items-center min-h-screen w-full  bg-dark-800'
    >
      <h3 className='text-white bg-red'>Wanna Know More? Lets Talk!</h3>
      <div className='my-20'>
        <div className='flex flex-col items-center '>
          <Image
            src='/logo.svg'
            alt='Leticia Goncalves Logo'
            className='my-3 cursor-pointer'
            width={32}
            height={32}
            priority
          />
          <span className='text-'>Letícia Gonçalves</span>
          <span>Software Developer</span>
        </div>
        <div className='flex gap-6 mt-12 justify-self-center'>
          {
            socialMedias.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className='bg-dark' onClick={() => openLink(item.url)}>
                  <Icon  size={48} color={'#907ceb'} weight='fill'
                className='bg-dark-700 hover:bg-dark-500 p-2 rounded-md border-solid border-1 border-dark-500 cursor-pointer' />
                </div>
              )
            })
          }

        </div>
        <p onClick={sendEmail} className="mt-12 cursor-pointer hover:text-lilac-600">{emailUrl}</p>
      </div>

      <div className='text-sm bottom-0 absolute max-w-4xl w-full mb-6 border-t-dark-700 border-1 border-x-0 border-b-0 pt-6'>
        <p>Built with Next.js and Tailwind</p>
        <p>All Rights Reserved 2023</p>
      </div>
    </footer>
  )
}
