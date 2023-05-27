import { ArrowUpRight } from 'phosphor-react'

export default function WorkExperience() {
  return (
    <div>
      <h3 className='my-20 text-white text-center'>Work Experience</h3>
      <div className='max-w-2xl flex flex-col items-center'>
        {workExperiences.map((job, index) => {
          return (
            <div className='w-full' key={index}>
              <div className='flex items-center gap-10'>
                <span className='bg-purple-500 h-4 w-4 rounded-full block float-left'></span>
                <h4 className='font-normal my-3'> {job.position}</h4>
              </div>
              <div className='border border-solid border-y-0 border-r-0  border-purple-500 pl-12 ml-2'>
                <h5 className='text-purple-500 my-3'>{job.company}</h5>
                {job.atributions.map((description) => {
                  return (
                    <p
                      key={description}
                      className='mb-6 last:mb-0 pb-0 last:pb-20'
                    >
                      {description}
                    </p>
                  )
                })}
              </div>
            </div>
          )
        })}
        <button className='rounded-full my-14 tracking-tight text-center'>
          Connect on Linkedin
        </button>
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
