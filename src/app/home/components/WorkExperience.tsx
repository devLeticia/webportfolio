import { SketchLogo } from 'phosphor-react'
import { workExperiences } from '../constants/work-experiences'

export default function WorkExperience() {
  return (
    <div>
      <h4>Work Experience</h4>
      <div className='h-1 mt-3 rounded-full flex-col w-full max-w-md bg-gradient-to-r from-lilac-600 to-sky-600 block'></div>
      <p className='mt-8'>
        Throughout my career in the tech industry, I have acquired valuable experience as both a
        software developer and UI/UX designer. Here is a concise overview of my journey:
      </p>
      {workExperiences.map((item) => {
        return (
          <div
            key={item.id}
            className='bg-dark-800 w-full border-solid container border-gray-500 p-10 rounded-2xl flex flex-col mt-12 border-1 border-dark-700'
          >
            <div className='flex flex-col w-full items-center'>
              <div>
                <p className='mb-2'>{item.status}</p>
                <h5>{item.position}</h5>
                <h6 className='mt-3 text-sm uppercase font-medium tracking-wider text-lilac-600'>
                  {item.company}
                </h6>
                <div className='grid flex-row md:flex-col md:grid-cols-2 gap-12 mt-6'>
                  <div>
                    <p>{item.atributions}</p>
                    {item.highlight && (
                      <div className='flex gap-3 items-center mt-3'>
                        <SketchLogo
                          size={42}
                          color={'#5ba3fa'}
                          weight='fill'
                          className='p-2 shrink-0 rounded-md border-s-white'
                        />
                        <p className='text-xs text-sky-600'>{item.highlight}</p>
                      </div>
                    )}
                  </div>
                  <div className='flex flex-col gap-3 md:gap-6'>
                    <p className='text-white font-semibold'>Main Duties</p>
                    {item.mainDuties.map((duty, index) => {
                      const Icon = duty.icon
                      return (
                        <div key={index} className='text-sm bg-dark flex gap-3 items-start'>
                          <Icon
                            size={36}
                            color={'#907ceb'}
                            weight='fill'
                            className='bg-dark-700 p-2 shrink-0 rounded-md border-solid border-1 border-dark-500'
                          />
                          <p>{duty.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}