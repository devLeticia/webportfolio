import externaLinks from '@/../../externalLinks.json'
import Image from 'next/image';

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
       {`Hi, I'm Letícia Gonçalves`}
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
          className='fadeInUp-animation '
          src='3d/code.png'
          alt='rocket'
          height={256}
          width={132}
        />
    </div>
      <h1 className='text-white mb-14 fadeInUp-animation'  style={{ animationDelay: '0.5s' }}>
      Building digital products from design to code.
      </h1>
     <p className='md:text-xl fadeInUp-animation' style={{ animationDelay: '0.7s' }}>
      {'I\'m a software developer specializing in front-end development and UI/UX design.'} 
      <br className="hidden md:block" style={{ animationDelay: '1s' }}/>
      {'Give me some squares and circles, and I\'ll craft amazing digital products!'}
    </p>
      <button className='my-14 rounded-full fadeInUp-animation' onClick={openLinkedin}>
        Get in touch
      </button>
    </div>
  )
}
