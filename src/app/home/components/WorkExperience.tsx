import { ArrowUpRight } from 'phosphor-react'
import Image from 'next/image'

export default function WorkExperience() {
  return (
    <div>
      <div className='bg-gray-950 w-full border-solid border-gray-500 p-16 rounded-2xl flex flex-col'>
        <h4>Work Experience</h4>
        <div className='h-1 mt-3 rounded-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 block'></div>
        <p className='mt-6'>
          Develop responsive web pages for a Single-Page Application using
          JavaScript, HTML, CSS.Develop responsive web pages for a Single-Page
          Application using JavaScript, HTML, CSS,
        </p>
        <div className='bg-gray-900 w-full border-solid  border-gray-500 p-16 rounded-2xl flex flex-col mt-12'>
          <h5>Software Developer</h5>
          <h6 className='mt-2 uppercase font-medium tracking-wider'>
            Nelogica
          </h6>
          <p className='mt-6'>
            Develop responsive web pages for a Single-Page Application using
            JavaScript, HTML, CSS.Develop responsive web pages for a Single-Page
            Application using JavaScript, HTML, CSS,
          </p>
          <p className='mt-6'>
            Develop responsive web pages for a Single-Page Application using
            JavaScript, HTML, CSS.Develop responsive web pages for a Single-Page
            Application using JavaScript, HTML, CSS,
          </p>
          <p className='mt-6 mb-16'>
            Develop responsive web pages for a Single-Page Application using
            JavaScript, HTML, CSS.Develop responsive web pages for a Single-Page
            Application using JavaScript, HTML, CSS,
          </p>
          <div className='grid grid-cols-2 border border-t-2 border-x-0 border-b-0 -mx-16 px-16 '>
            <div className='flex flex-col items-center max-w justify-center text-center border border-r-2 border-y-0 border-l-0 mr-16 -mb-16 pr-12'>
              <Image
                src='/diamond.svg'
                alt='company acquisition'
                className='dark:invert'
                width={42}
                height={42}
                priority
              />
              <h6 className='mt-3 uppercase font-medium tracking-wider '>
                Acquisition
              </h6>
              <p className='mt-3 w-60'>
                Company was acquired by billionaire Company
              </p>
            </div>
            <div className='mt-16'>
              <h5>Software Developer</h5>
              <h6 className='mt-2 uppercase font-medium tracking-wider'>
                Nelogica
              </h6>
              <p className='mt-12'>
                Develop responsive web pages for a Single-Page Application using
                JavaScript, HTML, CSS.Develop responsive web pages.
              </p>
              <p className='mt-6'>
                Develop responsive web pages for a Single-Page Application using
                JavaScript, HTML, CSS.Develop responsive web pages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const workExperiences = [
  {
    status: 'current',
    position: 'Software Developer, UX/UI Designer',
    company: 'NELOGICA',
    atributions: [
      'Develop responsive web pages for a Single-Page Application using JavaScript,HTML, CSS, Vue.js and Tailwind maintaining clean code patterns and design system guidelines.',
      'Develop responsive web pages for a Single-Page Application using JavaScript,HTML, CSS, Vue.js and Tailwind maintaining clean code patterns and design system guidelines.',
      'Develop responsive web pages for a Single-Page Application using JavaScript,HTML, CSS, Vue.js and Tailwind maintaining clean code patterns and design system guidelines.',
    ],
    interval: '',
  },
  {
    status: 'current',
    position: 'Front-end Developer, UI Designer',
    company: 'AKELOO',
    atributions: [
      'Develop responsive web pages for a Single-Page Application using JavaScript,HTML, CSS.',
      'Develop responsive web pages for a Single-Page Application using JavaScript,HTML, CSS, Vue.js and Tailwind maintaining clean code patterns and design system guidelines.',
    ],
    interval: '',
  },
  {
    position: 'Study, Practice, Repeat',
    company: '',
    atributions: [],
    interval: '',
  },
]
