import { ArrowUpRight } from 'phosphor-react'
import Image from 'next/image'

export default function WorkExperience() {
  return (
    <div>
      <div className='bg-dark-800 w-full border-solid  border-gray-500 p-10 md:p-16 mr-16 rounded-2xl flex flex-col mt-12 border-1 border-dark-700'>
      <h4>Work Experience</h4>
        <div className='h-1 mt-3 rounded-full w-full max-w-md bg-gradient-to-r from-lilac-600  to-sky-600 block'></div>
        <p className='mt-3'>
          Develop responsive web pages for a Single-Page Application using
          JavaScript, HTML, CSS.Develop responsive web pages for a Single-Page
          Application using JavaScript, HTML, CSS,
        </p>
        <div className='pl-20'>

        
        <div className='mt-16'>
          <h5>Software Developer</h5>
          <h6 className='mt-2 uppercase font-medium tracking-wider text-lilac-600'>
            Nelogica
          </h6>
          <p className='mt-2'>
            Develop responsive web pages for a Single-Page Application using
            JavaScript, HTML, CSS.Develop responsive web pages for a Single-Page
            Application using JavaScript.
          </p>
          <p className='mt-6 mb-16'>
            Develop responsive web pages for a Single-Page Application using
            JavaScript, HTML, CSS.Develop responsive web pages for a Single-Page
            Application using JavaScript.
          </p>
        </div>

        <div className='flex items-centerpy-6'>
          <Image
            src='/diamond.svg'
            alt='company acquisition'
            className='mr-6'
            width={36}
            height={36}
            priority
          />
          <div>
            <h6 className='uppercase font-medium tracking-wider text-sun-600'>
              Acquisition
            </h6>
            <p className=' text-sun-300'>
              Company was acquired by billionaire Company
            </p>
          </div>
        </div>
        <div className='mt-16'>
          <h5>Software Developer</h5>
          <h6 className='mt-2 uppercase font-medium tracking-wider text-lilac-600'>
            Nelogica
          </h6>
          <p className='mt-2'>
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
