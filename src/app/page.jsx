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
          <p>A frontend developer based in the city 
<br/>of Lagos,Nigeria</p>
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
       <Projects name="Dictionary web app" link="https://dictionary-web-app-liart.vercel.app/" desc="A dictionary web app built where users can search for words and it brings out the meaning " stack="ReactJs,Tailwind,Dictionary API." />
       <Projects name="Countries app" link="https://dictionary-web-app-liart.vercel.app/"/>
       <Projects name="Clippy" link="https://dictionary-web-app-liart.vercel.app/"/>
       </div>
      </section>

      </main>
    </div>
  )
}

export default Home