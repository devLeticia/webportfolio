export default function WordsCarrousel () {
    return (
        <div className='relative md:mb-12 ='>
            <div className='w-full animate flex absolute'>
                {carrouselWords.map((word, index) => {
                return (
                    <p
                    className='left-0 flex whitespace-nowrap text-7xl font-medium text-grey-700'
                    key={index}
                    >
                    {word} <span className='block w-3'></span>•<span className='block w-3'></span>
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
  