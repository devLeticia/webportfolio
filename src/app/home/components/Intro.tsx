export default function Intro() {
  return (
    <div className='z-10 flex flex-col w-full max-w-7xl justify-center items-center text-center mimn-w-[calc(100%-210rem)] min-h-screen'>
      <p className='text-violet-400 text-lg mt-32 mb-7 tracking-wider'>
        LETÍCIA GONÇALVES
      </p>
      {/* idea to reality, concept to deployment, dream to reality */}
      <h1 className='text-white mb-14'>
        Building digital products from<br></br>design to code.
      </h1>
      <p className='text-xl'>
        I am a software developer based in Brazil,<br></br> I specialize in
        front-end development and UI/UX Design.
      </p>
      <button className='my-14'>Get in touch</button>
      {/* <ul className='my-32 flex gap-6 text-7xl font-medium text-zinc-800'>
          <li>Projects/</li>
          <li>Stacks/</li>
          <li>Work/</li>
          <li>Studies/</li>
          <li>Contact/</li>
          <li>Projects/</li>
          <li>Stacks/</li>
          <li>Work/</li>
          <li>Studies/</li>
          <li>Contact/</li>
        </ul> */}
    </div>
  )
}
