export default function Stacks() {
  return (
    <div>
      <h3 className='my-20 text-white text-center'>Stacks</h3>
      <div className='flex justify-between gap-44'>
        {stacks.map((stack, index) => {
          return (
            <div key='index' className='flex flex-col text-center'>
              {stack.stack.map((stack, index) => {
                return (
                  <div
                    key={index}
                    className='p-6 w-56 h-56 bg-indigo-700 rounded-lg -mt-44 first:mt-0 shadow-zinc-800 shadow-sm'
                  >
                    <p className='text-left text-white'>{stack}</p>
                  </div>
                )
              })}
              <h4 className='mt-6'>{stack.area}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const stacks = [
  {
    area: 'Front-end',
    stack: ['Node.js', 'Mondo db', 'C#', 'MySQL', 'Prisma', 'Next.js'],
  },
  {
    area: 'Back-end',
    stack: ['Node.js', 'Mondo db', 'C#', 'MySQL', 'Prisma', 'Next.js'],
  },
  {
    area: 'Design',
    stack: [
      'Figma',
      'Adobe Xd',
      'Adobe Illustrator',
      'Atomica Design',
      'Color Theory',
      'Good Taste :D',
    ],
  },
]
