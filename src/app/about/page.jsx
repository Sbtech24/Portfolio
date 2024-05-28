import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

const About = () => {
  return (
    <div className={styles.container}>
      <main>
        <p>Hello i'm Oluwasemilore, a software engineer and my main focus for now is <br/>
        building great user interfaces for the web 
        </p>
        <p>
          I enjoy writing javascript/Typescript but i am also willing to learn new languages and add new frameworks to my stack 
          My go to stack for the web include Nextjs,Tailwind,Reactjs,Javascript/Typescript,MongoDb and ExpressJs for Api development.<br/>I also build websites with wordpress ocassionally 
          I am always looking to learn new things and broaden my horizon
        </p>
        <p>I am open to colaborate on projects,feel free to reach out to me here <a href="bajomosemilore@gmail.com">Send me an Email</a></p>
      </main>
    </div>
  )
}

export default About