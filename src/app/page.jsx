import React from 'react'
import styles from "./page.module.css"
import Hero from "/public/semi.jpg"
import Image from 'next/image'
import Projects from '@/components/Projects/Projects'
import Icons from '@/components/Icons/Icons';
import Dictionary from "/public/Dictionary.png"

const Home = () => {
  return (
    <div className={styles.container} >
      <main>
      <section className={styles.heroContainer}>
        <div>
          <h1>Bajomo Oluwasemilore</h1>
          <p className={styles.paragraph}>A <span className={styles.span}> Software Engineer(frontend) </span>
             I bring a solid foundation in <span className={styles.span}>creating user-friendly</span> and <span className={styles.span}>responsive web applications</span>.
              I hold a Bachelor's degree in Computer Science.
               I am passionate about crafting <span className={styles.span}>seamless user experiences</span> and continually learning new technologies to enhance my capabilities.
          </p>
         
        </div>
       <Image src={Hero}width={200} height={200} className={styles.img}/>
      </section>

      <section className={styles.toolsContainer}>
        <h1 className={styles.h1}>Technologies and tools</h1>
       <Icons/>
      </section>


      {/* Featured projects  */}
      <section className={styles.project}>
        <h1 className={styles.h1}>Featured projects</h1>
        <div className={styles.wrapper}>
       <Projects name="Dictionary web app" link="https://dictionary-web-app-liart.vercel.app/" desc="A dictionary web app built where users can search for words and it brings out the meaning " stack="ReactJs,Tailwind,Dictionary API." gitlink="https://github.com/Sbtech24/Dictionary-web-app-"/>
       <Projects name="Country app" link="https://loreys-countries-info-app.vercel.app/" desc="Country app is a web app displaying information about various countries in the world" stack="Reactjs,React-router,Javascript,Rest-countries-api" gitlink="https://github.com/Sbtech24/Countries"/>
       <Projects name="Sunny Side" link="https://sb-sunnyside.netlify.app/" desc="Sunny side landing page is a frontend mentor challenge built with html css and javascript" stack="Html,css and javascript" gitlink="https://github.com/Sbtech24/sunnyside"/>
       </div>
      </section>

      </main>
    </div>
  )
}

export default Home