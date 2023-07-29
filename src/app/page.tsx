'use client'
import NavBar from './home/components/Navbar'
import Intro from './home/components/Intro'
import Projects from './home/components/Projects'
import WorkExperience from './home/components/WorkExperience'
import Skills from './home/components/Skills'
import Studies from './home/components/Studies'
import Footer from './home/components/Footer'
import Inspirations from './home/components/Inspirations'
import WordsCarrousel from './home/components/WordsCarrousel';

export default function Home() {
  return (
    <>
      {/* //https://visual.systems/training?ref=onepagelove */}
      <NavBar />
      <main className='flex gap-20 px-6 flex-col items-center w-full justify-center border-box overflow-hidden'>
        <div className='container max-w-4xl flex flex-col gap-12 md:gap-36'>
          <section id='intro'>
            <Intro />
          </section>
          <WordsCarrousel />
          <section id='skills'>
            <Skills />
          </section>
          <section id='projects'>
            <Projects />
          </section>
          <section id='inspirations'>
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
      <Footer/>
    </>
  )
}
