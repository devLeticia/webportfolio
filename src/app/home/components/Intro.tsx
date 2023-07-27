import externaLinks from '@/../../externalLinks.json'

export default function Intro() {
  const linkedinUrl = externaLinks.linkedinUrl
  function openLinkedin() {
    window.open(linkedinUrl, '_blank')
  }

  return (
    <div
      className='z-10 flex flex-col w-full max-w-7xl justify-center 
    items-center text-center min-h-screen relative'
    >
      <p className='text-lilac-600 text-lg mt-32 mb-7 tracking-wider'>
        HI, I&apos;M LETÍCIA GONÇALVES
      </p>
      {/* idea to reality, concept to deployment, dream to reality */}
      <h1 className='text-white mb-14'>
      Building digital products<br></br>from design to code.
      </h1>
      <p className='text-xl'>
      I specialize in front-end development and UI/UX Design. 
      <br></br>Hand me some squares and circles, and I&apos;ll weave amazing stuff into reality!
      </p>
      <button className='my-14 rounded-full' onClick={openLinkedin}>
        Contact
      </button>

      <div className='w-full animate my-32 flex gap-6  absolute -bottom-32 '>
        {carrouselWords.map((word, index) => {
          return (
            <p
              className='left-0 whitespace-nowrap text-8xl font-medium text-dark-700'
              key={index}
            >
              {word} {'   '}•{''}
              {''}
              {''}
            </p>
          )
        })}
      </div>
    </div>
  )
}
//transition-duration - qunato tempo demora pra transição acontecer

const carrouselWords = [
  'Creativity',
  'Stunning design',
  'Problem-solving',
  'Analytical',
  'Attention to detail',
  'Persistence',
  'Adaptability',
  'Continuous learning',
  'Logical thinking',
  'Efficient coding',
  'Collaboration',
  'Never Stop Learning',
  'Strong communication',
  'Versatility',
  'Curiosity',
  'Innovative',
  'Resourcefulness',
  'Creativity',
  'Visual thinking',
  'Attention to detail',
  'Aesthetic sense',
  'User-centered design',
  'Adaptability',
  'Open-mindedness',
  'Conceptualization',
  'Storytelling',
  'Problem-solving',
  'Collaboration',
  'Iterative process',
]
