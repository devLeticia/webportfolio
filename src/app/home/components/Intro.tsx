import externaLinks from '@/../../externalLinks.json'

export default function Intro() {
  const linkedinUrl = externaLinks.linkedinUrl
  function openLinkedin() {
    window.open(linkedinUrl, '_blank')
  }

  return (
    <div
      className='z-10 flex flex-col w-full md:justify-center 
    items-center text-center min-h-screen -mb-36'
    >
      <p className='text-lilac-600 md:text-lg mt-32 mb-7 tracking-wider fadeInUp-animation'>
        HI, I&apos;M LETÍCIA  ;D
      </p>
      {/* idea to reality, concept to deployment, dream to reality */}
      <h1 className='text-white mb-14 fadeInUp-animation'>
      Building digital products from design to code.
      </h1>
      <p className='md:text-xl fadeInUp-animation'>
      I&apos;m a software developer specializing in front-end development and UI/UX design. <br className="hidden md:block" />Give me some squares and circles, and I&apos;ll craft amazing digital products!
      </p>
      <button className='my-14 rounded-full fadeInUp-animation' onClick={openLinkedin}>
        Get in touch
      </button>
    </div>
  )
}
