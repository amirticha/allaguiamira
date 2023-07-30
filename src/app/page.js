'use client';
import { useEffect, useState } from 'react'
// import { AnimatePresence } from 'framer-motion';
// import Preloader from '../components/Preloader';
//  import Landing from '../components/Landing';
//  import Projects from '../components/Projects';
//  import Description from '../components/Description';
//  import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
//  import Skills from '../components/Skills';
  import Email from '../components/Email';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])

  return (
    // <main className={styles.main}>
    <main >
         {/* <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Landing /> */}
        {/* <Description />
       <Skills/> 
          <SlidingImages />*/}
        {/* <Projects /> */}
      {/* <Contact />   */}
      <Email />  
    </main>
  )
}
