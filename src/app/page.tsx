'use client'
import NavBar from './home/components/Navbar'
import Intro from './home/components/Intro'
import Projects from './home/components/Projects'
import WorkExperience from './home/components/WorkExperience'
import Stacks from './home/components/Skills'
import Studies from './home/components/Studies'
import Footer from './home/components/Footer'
import Inspirations from './home/components/Inspirations'
export default function Home() {
  return (
    <>
      {/* //https://visual.systems/training?ref=onepagelove */}
      <NavBar />
      <main className='flex  gap-20 flex-col items-center w-full justify-center overflow-hidden'>
        <div className='max-w-4xl'>
          <section id='intro' className='pb-40'>
            <Intro />
          </section>
          <section id='stacks' className='py-40'>
            <Stacks />
          </section>
          
          <section id='projects' className='relative overflow-visible'>
            <Projects />
          </section>
          <section id='inspirations' className='my-40'>
            <h4 className='text-center mb-16'>Daily Inspired by</h4>
            <Inspirations />
          </section>
          <section id='work'>
            <WorkExperience />
          </section>
          <section id='studies'>
            <Studies />
          </section>
          
        </div>
      </main>
      <Footer />
    </>
  )
}
