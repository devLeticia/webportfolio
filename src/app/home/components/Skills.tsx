export default function Stacks() {
  return (
    <div className='bg-gray-950 w-full border-solid  border-gray-500 p-14 relative rounded-2xl flex'>
      <div className='bg-gray-900 -mt-32 -mb-32 w-full max-w-lg border-solid border-1 rounded-2xl border-gray-500 p-14 '>
        <h4>Skills</h4>
        <div className='h-1 mt-3 rounded-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'></div>
        <div>
          {stacks.map((item) => {
            return (
              <>
                <h6 key={item.area} className='mt-8'>
                  {item.area}
                </h6>
                <div className='mt-3 grid grid-flow-row grid-cols-5 gap-5 '>
                  {item.stack.map((index, stack) => {
                    return (
                      <div
                        key={index}
                        className='h-14 rounded-lg w-full bg-gray-950'
                      ></div>
                    )
                  })}
                </div>
              </>
            )
          })}
        </div>
      </div>
      <div className='flex flex-col justify-between max-w-xs  pl-16'>
        <div>
          <h2 className='text-white font-medium'>Ipsum Lorem</h2>
          <p className='mt-6'>
            Develop responsive web pages for a Single-Page Application using
            JavaScript, HTML, CSS.Develop responsive web pages for a Single-Page
            Application using JavaScript, HTML, CSS,
          </p>
          <p className='mt-6'>
            Vue.js and Tailwind maintaining clean code patterns and design
            system guidelines.Develop responsive web pages for a Single-Page
            Application using JavaScript, HTML, CSS.
          </p>
        </div>
        <button className='bg-white text-white  bottom-0 rounded-full w-full'>
          Reach out
        </button>
      </div>
    </div>
  )
}

const stacks = [
  {
    area: 'Frontend',
    stack: [
      'Node.js',
      'Mondo db',
      'C#',
      'MySQL',
      'Prisma',
      'Next.js, Node.js',
      'Mondo db',
      'C#',
      'MySQL',
      'Prisma',
      'Next.js, Node.js',
      'Mondo db',
      'C#',
      'MySQL',
      'Prisma',
    ],
  },
  {
    area: 'Backend',
    stack: ['Node.js', 'Mondo db', 'C#', 'MySQL', 'Prisma'],
  },
  {
    area: 'UI/UX Design',
    stack: [
      'Figma',
      'Adobe Xd',
      'Adobe Illustrator',
      'Atomica Design',
      'Color Theory',
      'Good Taste :D',
      'Adobe Illustrato',
      'Atomica Desig',
      'Color Theor',
      'Good Taste :',
    ],
  },
]
