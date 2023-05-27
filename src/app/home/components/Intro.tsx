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
      <p className='text-violet-400 text-lg mt-32 mb-7 tracking-wider'>
        LETÍCIA GONÇALVES
      </p>
      {/* idea to reality, concept to deployment, dream to reality */}
      <h1 className='text-white mb-14'>
        Building digital products from<br></br>design to code.
      </h1>
      <p className='text-xl'>
        I am a software developer based in Brazil,<br></br> I specialize in
        front-end development and UI/UX Design.
      </p>
      <button className='my-14 rounded-full' onClick={openLinkedin}>
        Get in touch
      </button>

      <div className='w-full animate my-32 flex gap-6  absolute -bottom-32 '>
        {carrouselWords.map((word, index) => {
          return (
            <p
              className='left-0 whitespace-nowrap text-8xl font-medium text-neutral-800'
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
  'Problem-solving',
  'Analytical',
  'Attention to detail',
  'Persistence',
  'Adaptability',
  'Continuous learning',
  'Logical thinking',
  'Efficient coding',
  'Collaboration',
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
  'Empathy',
  'Adaptability',
  'Open-mindedness',
  'Conceptualization',
  'Typography skills',
  'Color theory',
  'Storytelling',
  'Problem-solving',
  'Collaboration',
  'Iterative process',
]
