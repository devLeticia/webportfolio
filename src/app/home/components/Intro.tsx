import externaLinks from '@/../../externalLinks.json'
import Image from 'next/image'
import { introContent } from '../constants/intro-content'


export default function Intro() {
  const linkedinUrl = externaLinks.linkedinUrl

  function openLinkedin() {
    window.open(linkedinUrl, '_blank')
  }

  return (
    <div
      className='z-10 flex flex-col w-full md:justify-center 
    items-center text-center min-h-screen -mb-36 relative'
    >
      <p className='text-lilac-600 md:text-lg mt-32 mb-7 tracking-wider uppercase font-medium fadeInUp-animation shadow-2xl'>
        {introContent.greeting}
      </p>

      <div className='absolute max-w-[6rem] lg:max-w-[12rem] -left-[1rem] top-[8rem] lg:-left-[10rem] lg:top-[11rem]'>
        <Image
          className='fadeInUp-animation'
          src='3d/rocket.png'
          alt='rocket'
          height={256}
          width={184}
        />
      </div>

      <div className='absolute max-w-[5rem] lg:max-w-[12rem] -right-[1rem] bottom-[18rem] lg:-right-[10rem] lg:bottom-[11rem]'>
        <Image
          className='fadeInUp-animation'
          src='3d/code.png'
          alt='code'
          height={256}
          width={132}
        />
      </div>

      <h1 className='text-white mb-14 fadeInUp-animation' style={{ animationDelay: '0.5s' }}>
        {introContent.headline}
      </h1>

      <p className='md:text-xl   fadeInUp-animation' style={{ animationDelay: '0.7s' }}>
        {introContent.description.line1}</p>

      <button className='my-14 rounded-full fadeInUp-animation' onClick={openLinkedin}>
        {introContent.cta}
      </button>
    </div>
  )
}