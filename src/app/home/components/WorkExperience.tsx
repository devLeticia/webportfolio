import { ArrowUpRight } from 'phosphor-react'

export default function WorkExperience() {
  return (
    <div className='max-w-2xl flex flex-col items-center'>
      {workExperiences.map((job, index) => {
        return (
          <div className='w-full' key={index}>
            <span className='bg-purple-500 h-4 w-4 rounded-full block float-left -ml-2'></span>
            <h4 className='font-normal ml-10'> {job.position}</h4>
            <div className=' border border-y-0 border-r-0 border-purple-700 pl-10 pb-20 -mt-10 pt-10'>
              <h5 className='text-purple-700 my-3'>{job.company}</h5>
              {job.atributions.map((description) => {
                return (
                  <p key={description} className='mt-6'>
                    {description}
                  </p>
                )
              })}
            </div>
          </div>
        )
      })}
      <button className='my-14 tracking-tight text-center'>
        Connect on Linkedin
      </button>
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
    ],
    interval: '',
  },
  {
    status: 'current',
    position: 'Front-end Developer, UI Designer',
    company: 'AKELOO',
    atributions: [
      'Develop responsive web pages for a Single-Page Application using JavaScript,HTML, CSS.',
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
