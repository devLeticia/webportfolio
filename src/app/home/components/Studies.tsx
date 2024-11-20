import Image from 'next/image'
import { Code, Palette, GraduationCap, Infinity } from 'phosphor-react'

const courses = [
  {
    icon: Code,
    name: 'Ignite: Fullstack Javascript',
    institution: 'ROCKETSEAT',
    description:
      'Web, Mobile, and Back-end with JavaScript. Highly advanced hands-on projects with React.js, React Native, Node.js, and other related technologies.',
  },
  {
    icon: Palette,
    name: 'Product Design, User Experience and Interfaces',
    institution: 'INTERACTION DESIGN FOUNDATION',
    description:
      'Strong foundation in interactive design principles, from user research to wireframing, prototyping, and usability testing.',
  },
]

const graduations = [
  {
    name: 'System Analisys and Development',
    universities: ['ESTACIO DE SÁ UNIVERSITY'],
    conclusionYear: 2022,
  },
  {
    name: 'International Relations Bs',
    universities: [
      'PUC-RIO',
      'UNIVERSITY OF SOUTH CAROLINA',
      'FREE UNIVERSITY OF BERLIN',
    ],
    conclusionYear: 2016,
  },
]

export default function Studies() {
  return (
    <div>
      <h4>Studies</h4>
      <div className="h-1 mt-3 rounded-full w-1/2 bg-gradient-to-r from-lilac-600 to-sky-600 block"></div>
      <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 gap-6 max-w-5xl mt-12">
        <div className="flex flex-col gap-6 justify-end">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <div
                key={index}
                className="flex bg-dark-800 rounded-lg py-14 pl-10 pr-14 items-start gap-6 border-solid border-1 border-dark-700"
              >
                <span>
                  <Icon size={32} color={'#907ceb'} className="shrink-0" />
                </span>
                <div className="flex flex-col">
                  <h5>{course.name}</h5>
                  <h6 className="mt-3 text-sm uppercase font-medium tracking-wider text-lilac-600">
                    {course.institution}
                  </h6>
                  <p className="mt-6">{course.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex flex-col justify-between gap-6 bg-dark-800 pl-14 pb-14 rounded-lg overflow-clip border-solid border-1 border-dark-700">
          <div className="flex w-full justify-between">
            <GraduationCap size={32} color={'#907ceb'} className="mt-14" />
            <Image
              src="/globe.svg"
              alt="Earth Globe"
              className="-mb-36"
              width={254}
              height={254}
              priority
            />
          </div>
          <div className="flex flex-col gap-16">
            {graduations.map((grad) => (
              <div key={grad.name} className="flex flex-col h-full pr-10">
                <h5 className="mb-3">{grad.name}</h5>
                {grad.universities.map((uni, index) => (
                  <h6
                    key={index}
                    className="uppercase font-medium text-sm text-lilac-600"
                  >
                    {uni}
                  </h6>
                ))}
                <span className="text-sm mt-3 text-grey-600">
                  {grad.conclusionYear}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
