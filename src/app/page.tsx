'use client'
import NavBar from './home/components/Navbar'
import Intro from './home/components/Intro'
import Projects from './home/components/Projects'
import WorkExperience from './home/components/WorkExperience'
import Stacks from './home/components/Stacks'
import Studies from './home/components/Studies'
import Footer from './home/components/Footer'
import Inspirations from './home/components/Inspirations'
export default function Home() {
  return (
    <>
      <NavBar />
      <main className='flex min-h-screen flex-col items-center justify-between'>
        <section id='intro'>
          <Intro />
        </section>
        <section id='projects' className='my-14'>
          <h3 className='mb-20 text-center'>Projects</h3>
          <Projects />
        </section>
        <section id='stacks' className='my-14'>
          <h3 className='mb-20 text-center'>Stacks</h3>
          <Stacks />
        </section>
        <section id='work' className='my-14'>
          <h3 className='mb-20 text-center'>Work Experience</h3>
          <WorkExperience />
        </section>
        <section id='studies' className='my-14'>
          <h3 className='text-center mb-32'>Studies</h3>
          <Studies />
        </section>
        <section id='inspirations' className='my-40'>
          <h3 className='text-center mb-32'>Daily Inspired by</h3>
          <Inspirations />
        </section>
      </main>
      <Footer />
    </>
  )
}
