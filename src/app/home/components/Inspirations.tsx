import Image from 'next/image'
export default function Inspirations() {
  return (
    <>
      <h4 className='text-center mb-16'>Daily Inspired by</h4>
      <div className='container flex justify-center items-center gap-12'>
        {inspirations.map((inspiration, index) => {
          return (
            <Image
              key={`${index} + ${inspiration.name}`}
              src={`/inspiration-logos/${inspiration.imgFileName}`}
              alt={inspiration.name}
              height={156}
              width={156}
            />
          )
        })}
      </div>
    </>
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
