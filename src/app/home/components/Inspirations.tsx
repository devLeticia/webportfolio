import Image from 'next/image'
export default function Inspirations() {
  return (
    <div className='flex justify-center items-center gap-12'>
      {inspirations.map((inspiration, index) => {
        return (
          <Image
            key={`${index} + ${inspiration.name}`}
            src={`/inspiration-logos/${inspiration.imgFileName}`}
            alt={inspiration.name}
            //className='dark:invert'
            height={172}
            width={172}
            // priority
          />
        )
      })}
    </div>
  )
}

const inspirations = [
  {
    name: 'Behance',
    imgFileName: 'behance.svg',
    link: 'https://www.behance.net/',
  },
  {
    name: 'Css Tricks',
    imgFileName: 'css-tricks.svg',
    link: 'https://https://css-tricks.com/',
  },
  {
    name: 'Fireship',
    imgFileName: 'fireship.svg',
    link: 'https://www.fireship.io/',
  },
  {
    name: 'Dribbble',
    imgFileName: 'dribbble.svg',
    link: 'https://www.behance.net/',
  },
]
