export default function Stacks() {
  return (
    <div className='flex justify-between gap-44'>
      <div className='flex flex-col text-center'>
        {frontendStack.map((stack, index) => {
          return (
            <div
              key={index}
              className='p-6 w-56 h-56 bg-indigo-700 rounded-lg -mt-44 shadow-zinc-800 shadow-sm'
            >
              <p className='text-left text-white'>{stack}</p>
            </div>
          )
        })}
        <h4 className='mt-6'>Front-End</h4>
      </div>
      <div className='flex flex-col text-center'>
        {backendStack.map((stack, index) => {
          return (
            <div
              key={index}
              className='p-6 w-56 h-56 bg-indigo-700 rounded-lg -mt-44 shadow-zinc-800 shadow-sm'
            >
              <p className='text-left text-white'>{stack}</p>
            </div>
          )
        })}
        <h4 className='mt-6'>Back-End</h4>
      </div>
      <div className='flex flex-col text-center'>
        {designStack.map((stack, index) => {
          return (
            <div
              key={index}
              className='p-6 w-56 h-56 bg-indigo-700 rounded-lg -mt-44 shadow-zinc-800 shadow-sm'
            >
              <p className='text-left text-white'>{stack}</p>
            </div>
          )
        })}
        <h4 className='mt-6'>Design</h4>
      </div>
    </div>
  )
}

const frontendStack = [
  'HTML & CSS',
  'Javascript',
  'Typescript',
  'Vue.js',
  'React',
  'ReactNative',
]
const backendStack = ['Node.js', 'Mondo db', 'C#', 'MySQL', 'Prisma', 'Next.js']
const designStack = [
  'Figma',
  'Adobe Xd',
  'Adobe Illustrator',
  'Atomica Design',
  'Color Theory',
  'Good Taste :D',
]
