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
        <div className='max-w-5xl'>
          <section id='intro'>
            <Intro />
          </section>
          <section id='projects' className='relative overflow-visible'>
            <Projects />
          </section>
          <section id='stacks'>
            <Stacks />
          </section>
          <section id='work'>
            <WorkExperience />
          </section>
          <section id='studies'>
            <Studies />
          </section>
          <section id='inspirations' className='my-40'>
            <h3 className='text-center mb-32'>Daily Inspired by</h3>
            <Inspirations />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
