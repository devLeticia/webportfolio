'use client'
import NavBar from './home/components/Navbar'
import Intro from './home/components/Intro'
import Projects from './home/components/Projects'
import WorkExperience from './home/components/WorkExperience'
import Skills from './home/components/Skills'
import Studies from './home/components/Studies'
import Footer from './home/components/Footer'
import Inspirations from './home/components/Inspirations'
export default function Home() {
  return (
    <>
      {/* //https://visual.systems/training?ref=onepagelove */}
      <NavBar />
      <main className='flex gap-20 flex-col items-center w-full justify-center overflow-hidden'>
        <div className='max-w-4xl'>
          <section id='intro'>
            <Intro />
          </section>
          <section id='skills' className='py-60'>
            <Skills />
          </section>
          <section id='projects' className='py-32'>
            <Projects />
          </section>
          <section id='inspirations' className='py-32'>
            <Inspirations />
          </section>
          <section id='work' className='py-32'>
            <WorkExperience />
          </section>
          <section id='studies' className='py-32'>
            <Studies />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
